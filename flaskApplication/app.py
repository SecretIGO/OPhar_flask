from flask import Flask, render_template, request, redirect
from flask_mysqldb import MySQL as mysql
from datetime import date

app = Flask(__name__)

app.config[ 'MYSQL_HOST' ] = "localhost"
app.config[ 'MYSQL_USER' ] = "root"
app.config[ 'MYSQL_PASSWORD' ] = "root"
app.config[ 'MYSQL_DB' ] = "db_onphar"

mydb = mysql(app)

@app.route('/')
def hello():
    return render_template("index.html")

@app.route('/insert', methods = ['POST'])
def determine_role(role):
    if role == 1:
                return "user_customer"
    if role == 2:
                return "user_pharmacy_staff"
    if role == 3:
                return "user_courier"
    if role == 4:
                return "user_pharmacy_manager"
    if role == 5:
                return "user_admin"

def addUser():
    if request.method == "POST":
        fname = request.form['fname']
        mname = request.form['mname']
        lname = request.form['lname']
        username = request.form['username']
        email = request.form['email']
        password = request.form['password']
        role = request.form['role']
        mycursor = mysql.connection.cursor()

        str_role = determine_role(role)
        query = ("INSERT INTO " + str_role + " (firstname, middlename, lastname, username, password, email, joinDate, id_role, activeStatus) VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s)")
        val = (fname, mname, lname, username, password, email, date.today(), role, 1)
        
        mycursor.execute(query, val)
        mycursor.execute("COMMIT")
        
        

if __name__ == '__main__':
    app.run(debug=True)