import pymysql

import dbcon_items
import dbcon_store
import dbcon_user

mydb = pymysql.connect(
  host="127.0.0.1",
  user="root",
  password="root",
  database="db_onphar"
)

mycursor = mydb.cursor()

result = dbcon_user.find_username("", mycursor)

print(result)
print(dbcon_user.get_userInformation("johndoe", mycursor))
