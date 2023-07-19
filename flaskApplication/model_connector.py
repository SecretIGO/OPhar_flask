import pymysql

import dbcon_items
import dbcon_store
import dbcon_user
import dbcon_cart_items

mydb = pymysql.connect(
  host="127.0.0.1",
  user="root",
  password="root",
  database="db_onphar"
)

mycursor = mydb.cursor()

# print(dbcon_items.get_itemDetails(41, mycursor))

# dbcon_cart_items.addItem_toCart(42, 2, 10, mycursor)

print(dbcon_cart_items.getItem_quantity(3, mycursor))

# print(dbcon_items.find_allItems(mycursor))

# print(dbcon_cart_items.get_userCartItems(1, mycursor))

# dbcon_user.login_user("Jokowan","Jokowan23",mycursor)

# print(dbcon_user.get_userID("Jokowan", mycursor))

# result = dbcon_user.find_username("", mycursor)

# print(result)
# print(dbcon_user.get_userInformation("Marsch28", mycursor))

# print(dbcon_items.get_itemDetails(41, mycursor))
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


