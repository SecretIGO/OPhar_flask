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

# result = dbcon_user.find_username("", mycursor)

# print(result)
# print(dbcon_user.get_userInformation("johndoe", mycursor))

# dbcon_items.addItem("Aspirin", "120", "1", "1", "50", "Aspirin is a nonsteroidal anti-inflammatory drug", "1", mycursor)
  # working

# dbcon_items.removeItem(61, mycursor)
  # working

# -------------------------------------------------------- for loop for multiple items ASC
# results = dbcon_items.find_storeItems(2, mycursor)

# i = 0
# for result in results:
#   print(results[i], '\n')

#   i+=1
  # working


