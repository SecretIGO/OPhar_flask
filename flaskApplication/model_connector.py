import mysql.connector

import dbcon_items
import dbcon_store
import dbcon_user

mydb = mysql.connector.connect(
  host="localhost",
  user="root",
  password="root",
  database="db_onphar"
)

mycursor = mydb.cursor()
