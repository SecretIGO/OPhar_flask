from flask import Flask, render_template, request, redirect, url_for, jsonify
from flask_mysqldb import MySQL
from flask_cors import CORS
from datetime import date
import mysql.connector

import dbcon_user

app = Flask(__name__)
mysql = MySQL()
CORS(app)

app.config[ 'MYSQL_HOST' ] = "localhost"
app.config[ 'MYSQL_USER' ] = "root"
app.config[ 'MYSQL_PASSWORD' ] = ""
app.config[ 'MYSQL_DB' ] = "db_onphar"

mydb =  MySQL(app)
mycursor = mydb.connection.cursor()

@app.route('/')
def start():
    return render_template('home.js')

@app.route('/api/test')
def hello():
    return jsonify({
        "members" : [{
            "member1" : [{
                "id" : 1,
                "name" : "Allen",
                "username" : "Allen531",
                "password" : "12345",
                "type": "Customer",
            }],
            "member2" : [{
                "id" : 2,
                "name" : "Jack",
                "username" : "Jack213",
                "password" : "qwerty",
                "type": "StoreManager",
            }],
        }]
    })

@app.route('/api/return_user')
def return_user():
    user = dbcon_user.find_username("markRover12", 1, mycursor)
    return jsonify (user)

@app.route('/register_user', methods = ['POST'])
def register_user():
    if request.method == "POST" and 'fname' in request.form and 'mname' in request.form and 'lname' in request.form and 'username' in request.form and 'email' in request.form and 'password' in request.form and 'role' in request.form:
        fname = request.form['fname']
        mname = request.form['mname']
        lname = request.form['lname']
        username = request.form['username']
        email = request.form['email']
        password = request.form['password']
        role = request.form['role']
        mycursor = mydb.connection.cursor()

        username_warning = dbcon_user.find_username(username, role, mycursor)
        if username_warning:
            return render_template('signup.html', 
                                   username_warning = "Username Already Exists!",
                                   fname = fname,
                                   mname = mname,
                                   lname = lname,
                                   username = username,
                                   email = email,
                                   password = password,
                                   role = role)
        
        email_warning = dbcon_user.validate_email(email)
        if email_warning:
            return render_template('signup.html', 
                                   email_warning = email_warning, 
                                   fname = fname,
                                   mname = mname,
                                   lname = lname,
                                   username = username,
                                   email = email,
                                   password = password,
                                   role = role)

        password_warning = dbcon_user.validate_password(password)
        if password_warning:
            return render_template('signup.html', 
                                   password_warning = password_warning,
                                   fname = fname,
                                   mname = mname,
                                   lname = lname,
                                   username = username,
                                   email = email,
                                   password = password,
                                   role = role) 
        
        dbcon_user.addUser((fname, mname, lname), username, password, email, role, mycursor)

        return render_template('signin.html')
    
@app.route('/find_user', methods = ['GET', 'POST'])
def find_user():
    if request.method == "POST":
        username = request.form['username']
        role = request.form['role']
        mycursor = mydb.connection.cursor()
        result = dbcon_user.find_username(username, role, mycursor)

@app.route('/login_user', methods = ['GET','POST'])
def login_user():
    if request.method == "POST":
        username = request.form['username']
        password = request.form['password']

if __name__ == '__main__':
    app.run(debug=True, port=8080)