from flask import Flask, render_template, request, redirect, url_for
from flask_mysqldb import MySQL
from datetime import date

import dbcon_user

app = Flask(__name__)

app.config[ 'MYSQL_HOST' ] = "localhost"
app.config[ 'MYSQL_USER' ] = "root"
app.config[ 'MYSQL_PASSWORD' ] = "root"
app.config[ 'MYSQL_DB' ] = "db_onphar"

mydb =  MySQL(app)

@app.route('/')
def hello():
    return render_template("signup.html")

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
    app.run(debug=True)