from flask import Flask, render_template, session, request, redirect, url_for, jsonify
from flask_mysqldb import MySQL
from flask_cors import CORS
from datetime import date

import dbcon_user
import dbcon_items

app = Flask(__name__)
app.secret_key = 'baconandeggs'
CORS(app)

app.config[ 'MYSQL_HOST' ] = "localhost"
app.config[ 'MYSQL_USER' ] = "root"
app.config[ 'MYSQL_PASSWORD' ] = ""
app.config[ 'MYSQL_DB' ] = "db_onphar"

mydb =  MySQL(app)

@app.route('/')
def index():
    return render_template('signin.html')