from flask import Flask, render_template, request, redirect, url_for, jsonify
from flask_mysqldb import MySQL
from flask_cors import CORS
from datetime import date
import json
import os

import dbcon_user
import dbcon_items
import dbcon_cart_items
import session

app = Flask(__name__)
app.secret_key = 'baconandeggs'
CORS(app)

app.config[ 'MYSQL_HOST' ] = "localhost"
app.config[ 'MYSQL_USER' ] = "root"
app.config[ 'MYSQL_PASSWORD' ] = "root"
app.config[ 'MYSQL_DB' ] = "db_onphar"

mydb =  MySQL(app)

# = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
# = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
# T E S T

@app.route('/')
def index():
    return "heehee"

@app.route('/api/test')
def hello():
    return jsonify({
        "members" : [
            "members1",
            "members2",
            "members3"
        ]
    })

@app.route('/api/update_json', methods=['POST'])
def update_json():
    data = request.get_json()
    file_path = '../pharmaexpress/file.json'

    with open(file_path, 'r') as file:
        existing_data = json.load(file)

    existing_data.update(data)

    with open(file_path, 'w') as file:
        json.dump(existing_data, file)

    return jsonify(message='JSON file updated successfully')

# = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
# = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
# U S E R S

@app.route('/api/get_user', methods =['GET', 'POST'])
def get_userID():
    mycursor = mydb.connection.cursor()
    data = request.get_json()
    username = data['username']
    userID = dbcon_user.get_userID(username, mycursor)

    result = dbcon_user.get_userInformation(username, mycursor)
    return jsonify(result)

@app.route('/api/find_user', methods = ['GET', 'POST'])
def find_user():
    mycursor = mydb.connection.cursor()
    data = request.get_json()
    username = data['username']
    result = dbcon_user.find_username(username, mycursor)

    return jsonify(result)

@app.route('/api/signup', methods = ['GET', 'POST'])
def signup():
    mycursor = mydb.connection.cursor()
    data = request.get_json()
    firstname = data['firstname']
    lastname = data['lastname']
    username = data['username']
    password = data['password']
    email = data['email']
    id_role = data['id_role']
    
    email_error = dbcon_user.validate_email(email)
    username_error = dbcon_user.validate_username(username, mycursor)
    password_error = dbcon_user.validate_password(password)
    status = False

    if(username_error):
        return ({
            'success': False,
            'username_error': username_error
        })
    
    if(password_error):
        return ({
            'username_error': None,
            'success': False,
            'password_error': password_error
        })
    
    if(email_error):
        return ({
            'password_error': None,
            'success': False,
            'email_error': email_error
        })
    
    status = True
    if(status == True):
        dbcon_user.addUser((firstname, lastname), username, password, email, id_role, mycursor)

        return({
            'email_error': None,
            'success': True
        })

@app.route('/api/login', methods=['POST', 'GET'])
def login():
    mycursor = mydb.connection.cursor()
    data = request.get_json()
    username = data['username']
    password = data['password']

    status = dbcon_user.login_user(username, password, mycursor)
    if status:
        id_user = dbcon_user.get_userID(username, mycursor)
        session.login_user(id_user, username, mycursor)

        return jsonify({'success': True, 'id_user': id_user})
    else:
        return jsonify({'success': False, 'error': 'Invalid credentials'})

@app.route('/api/check_loginStatus')
def check_loginStatus():
  is_logged_in = 'user_id' in session
  return jsonify({'isLoggedIn': is_logged_in})

@app.route('/api/get_userinfo', methods = ['GET', 'POST'])
def get_userinfo():
    mycursor = mydb.connection.cursor()
    data = request.get_json()
    username = data['username']
    result = dbcon_user.get_userInformation(username, mycursor)

    return jsonify(result)

@app.route('/api/submit_username', methods=['GET','POST'])
def submit_getuserinfo():
    data = request.get_json(force=True)
    username = data['username']
    mycursor = mydb.connection.cursor()

    result = dbcon_user.get_userInformation(username, mycursor)

    return jsonify(result)

# = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
# = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
# I T E M S

@app.route('/api/add_item')
def addItem():
    mycursor = mydb.connection.cursor()
    data = request.get_json()
    name = data['name']
    price = data['price']
    id_category = data['id_category']
    id_symptom = data['id_symptom']
    remaining_stock = data['remaining_stock']
    description = data['description']
    id_store = data['id_store']
    status = data['status']

    try:
        if status:
            dbcon_items.addItem(name, price, id_category, id_symptom, remaining_stock, description, id_store, mycursor)

            return jsonify({'success' : True})
        else:
            return jsonify({'success' : False})

    except Exception as e:
        print("Error exception : ", e)

@app.route('/api/remove_item')
def removeItem():
    mycursor = mydb.connection.cursor()
    data = request.get_json()
    id_item = data['id_item']

    dbcon_items.removeItem(id_item, mycursor)

@app.route('/api/get_items')
def get_allItems():
    mycursor = mydb.connection.cursor()

    result = dbcon_items.find_allItems(mycursor)

    return jsonify(result)

@app.route('/api/get_itemDetails', methods = ['POST', 'GET'])
def get_itemDetails():
    mycursor = mydb.connection.cursor()
    data = request.get_json()
    id_item = int(data['id_item'])
    print(id_item)
    result = dbcon_items.get_itemDetails(id_item, mycursor)
    return jsonify(result)

# = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
# = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
# C A R T   I T E M S

@app.route('/api/add_item_toCart', methods=['GET', 'POST'])
def add_item_toCart():
    mycursor = mydb.connection.cursor()
    data = request.get_json()
    id_user = session.get('id_user')
    id_item = data['id_item']
    quantity = data['quantity']
    print(id_user, id_item, quantity)

    if id_user and id_item and quantity:
        dbcon_cart_items.addItem_toCart(id_item, id_user, quantity, mycursor)
        return jsonify({'success' : True})
    else:
        return jsonify({'success' : False})

if __name__ == '__main__':
    app.run(debug=True, port=8080)