from flask import Flask, render_template, request, redirect, url_for, jsonify
from flask_mysqldb import MySQL
from flask_cors import CORS
import paymongo
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

paymongo_secret_key = 'pk_test_1vaiknErtpKCpLKnhkaT37gn'
# paymongo.api.key = paymongo_secret_key

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
        session.login_user(username, mycursor)

        return jsonify({'success': True, 'id_user': id_user})
    else:
        return jsonify({'success': False, 'error': 'Invalid credentials'})
    
@app.route('/api/logout', methods=['POST', 'GET'])
def logout():
    mycursor = mydb.connection.cursor()
    data = request.get_json()
    username = data['username']
    id_role = dbcon_user.get_role(username, mycursor)
    str_role = dbcon_user.determine_role(id_role)

    session.logout_user(str_role, mycursor)

    if session.get_sessionCustomer(mycursor):
        return jsonify({'success': True})
    else:
        return jsonify({'success': False})

@app.route('/api/check_loginStatus')
def check_loginStatus():
    mycursor = mydb.connection.cursor()

    result = session.get_sessionCustomer(mycursor)

    return result

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
    username = data['username']
    id_user = dbcon_user.get_userID(username, mycursor)
    id_item = data['id_item']
    quantity = data['quantity']
    print(id_user, id_item, quantity)

    if id_user and id_item and quantity:
        dbcon_cart_items.addItem_toCart(id_item, id_user, quantity, mycursor)
        return jsonify({'success' : True})
    else:
        return jsonify({'success' : False})

@app.route('/api/get_cartItems', methods=['GET', 'POST'])
def get_cartItems():
    mycursor = mydb.connection.cursor()
    
    if request.method == 'POST':
        data = request.get_json()
        username = data['username']
        id_user = dbcon_user.get_userID(username, mycursor)
        result = dbcon_cart_items.get_userCartItems(id_user, mycursor)
        return jsonify(result)
    
    return 'Invalid request'

@app.route('/api/get_itemQuantity', methods = ['GET', 'POST'])
def get_itemQuantity():
    mycursor = mydb.connection.cursor()
    
    if request.method == 'POST':
        data = request.get_json()
        username = data['username']
        id_user = dbcon_user.get_userID(username, mycursor)
        result = dbcon_cart_items.getItem_quantity(id_user, mycursor)
        return jsonify(result)
    
    return 'Invalid request'

@app.route('/api/create_checkout_session', methods=['POST'])
def create_checkout_session():
    data = request.get_json()
    subtotal = data['subtotal']

    # Set api key config
    paymongo.api_key='sk_test_2byzkVErtpKCpLK9hkFT37gn'

    # Payment Method
    payment_method = paymongo.PaymentMethod.retrieve('pm_...')

    # Retrieve attributes
    payment_method.id = "pm_..."

    payment_method.type = "card"

    paymongo.PaymentMethod.create({
    'type': 'card',
    'details': {
        'card_number': '5111111111111118',
        'cvc': '123',
        'exp_month': 3,
        'exp_year': 2025,
    },
    'billing': {
        'address': {
        'line1': 'test line 1',
        'line2': 'test line 2',
        'city': 'Antipolo',
        'state': 'Rizal',
        'postal_code': '1870',
        'country': 'PH'
        },
        'email': 'test@paymongo.com',
        'name': 'Pay Mongo',
        'phone': '09123456789'
    }
    })

    # Payment Intent
    paymongo.PaymentIntent.retrieve('pi_...')

    payment_intent = paymongo.PaymentIntent.create({
    'amount': 10000,
    'currency': 'PHP',
    'description': 'Dog Treat',
    'payment_method_allowed': [
        'card'
    ],
    'statement_descriptor': 'BarkerShop'
    })

    paymongo.PaymentIntent.attach('pi_...', {
    'payment_method': 'pm_...',
    'return_url': 'https://test/success'
    })

    paymongo.PaymentIntent.cancel('pi_...')

    paymongo.PaymentIntent.capture('pi_...', {
    'amount':10000
    })

    # Payment
    paymongo.Payment.retrieve('pay_...')

    # Refund
    paymongo.Refund.retrieve('ref_...')

    paymongo.Refund.create({
    'amount': 10000,
    'payment_id': 'pay_...',
    'reason': 'requested_by_customer',
    'metadata': {
        'merchant': 'test value'
    }
    })

if __name__ == '__main__':
    app.run(debug=True, port=8080)