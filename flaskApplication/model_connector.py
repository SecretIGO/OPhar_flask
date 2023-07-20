import pymysql
import sys
import os
import uuid

import dbcon_items
import dbcon_store
import dbcon_user
import dbcon_cart_items
from paymongo_local import paymongo_checkoutSystem
import dbcon_order

mydb = pymysql.connect(
  host="127.0.0.1",
  user="root",
  password="root",
  database="db_onphar"
)

mycursor = mydb.cursor()

uni_uids = dbcon_order.get_userPackages(3, mycursor)
print(uni_uids)

items = []
i = 0
for uni_uid in uni_uids:
    packages = dbcon_order.get_packageDetails(uni_uid, mycursor)
    for package in packages:
      items.insert(i, dbcon_order.get_packageItems(packages, mycursor))

    i+=1

print(items)

# package = dbcon_order.get_packageDetails(1, mycursor)
# print(package)
# items = dbcon_order.get_packageItems(package, mycursor)
# print(items)

# random_uuid = uuid.uuid4()
# print(random_uuid)
# dbcon_order.addPackage(random_uuid, mycursor)
# dbcon_order.cart_to_order(3, random_uuid, mycursor)
# dbcon_order.remove_itemsInCart(3, mycursor)

# paymongo_checkoutSystem.paymongo_createSession()

# print(dbcon_items.get_itemDetails(41, mycursor))

# dbcon_cart_items.addItem_toCart(42, 2, 10, mycursor)

# print(dbcon_cart_items.getItem_quantity(3, mycursor))

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


