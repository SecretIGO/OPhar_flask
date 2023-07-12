from flask import Flask, render_template, session, request, redirect, url_for, jsonify
from flask_mysqldb import MySQL
from flask_cors import CORS
from datetime import date
import mysql.connector

import dbcon_user

app = Flask(__name__)
app.secret_key = 'egg'

mysql = MySQL()

CORS(app)

app.config[ 'MYSQL_HOST' ] = "localhost"
app.config[ 'MYSQL_USER' ] = "root"
app.config[ 'MYSQL_PASSWORD' ] = "root"
app.config[ 'MYSQL_DB' ] = "db_onphar"

mydb =  MySQL(app)

@app.route('/')
def index():
    return "Heehee"


@app.route('/api/test')
def hello():
    return jsonify({
        "members" : [
            "members1",
            "members2",
            "members3"
        ]
    })

@app.route('/api/return_user')
def return_user():
    mycursor = mydb.connection.cursor()
    user = dbcon_user.find_username("markRover12", mycursor)

    return jsonify (user)

@app.route('/api/find_user', methods = ['GET', 'POST'])
def find_user():
    mycursor = mydb.connection.cursor()
    result = dbcon_user.find_username("markRover12", mycursor)

    return jsonify(result)

@app.route('/api/login', methods=['POST', 'GET'])
def login():
    mycursor = mysql.connection.cursor()
    data = request.get_json()
    username = data['username']
    password = data['password']

    status = dbcon_user.login_user(username, password, mycursor)
    print(status)
    if status:

        session['user_id'] = dbcon_user.get_userID(username, mycursor)

        return jsonify({'success': True})
    else:
        return jsonify({'success': False, 'error': 'Invalid credentials'})

@app.route('/api/get_userinfo', methods = ['GET', 'POST'])
def get_userinfo():
    mycursor = mydb.connection.cursor()
    result = dbcon_user.get_userInformation("johndoe", mycursor)

    return jsonify(result)

@app.route('/api/submit_username', methods=['GET','POST'])
def submit_getuserinfo():
    data = request.get_json(force=True)
    username = data['username']
    mycursor = mydb.connection.cursor()

    result = dbcon_user.get_userInformation(username, mycursor)

    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True, port=8080)