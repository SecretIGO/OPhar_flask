import uuid

import dbcon_items
import dbcon_cart_items

def addPackage(uni_uid, mycursor):
    query = ("INSERT INTO orders (id, id_package) VALUES(NULL, %s)")
    mycursor.execute(query, (uni_uid,))
    mycursor.execute("COMMIT")

def cart_to_order(id_user, uni_uid, mycursor):
    query = ("SELECT id FROM cart WHERE id_user = %s")
    mycursor.execute(query, (id_user,))
    id_cart = mycursor.fetchone()[0]

    query = ("SELECT id FROM cart_items WHERE id_cart = %s")
    mycursor.execute(query, (id_cart,))
    id_cartItems = mycursor.fetchall()

    data = []
    items = []
    i = 0
    for cart in id_cartItems:
        query = ("SELECT * FROM items WHERE id = %s")
        mycursor.execute(query, (id_cartItems[i],))
        db_items = mycursor.fetchall()
        for item in db_items:
            str_category = dbcon_items.determine_category(item[3])
            data = {
                'id' : item[0],
                'name' : item[1],
                'price' : item[2],
                'category' : str_category,
                'remaining_stock' : item[5],
                'description' : item[6],
                'item_dateListed' : item[7],
                'rating' : item[8],
            }
        items.insert(i, data)
        i+=1
    
    query = ("SELECT id_item FROM cart_items WHERE id_cart = %s")
    mycursor.execute(query, (id_cart,))
    id_items = mycursor.fetchall()

    quantitities = dbcon_cart_items.getItem_quantity(id_user, mycursor)

    query = ("SELECT id FROM orders WHERE id_package = %s")
    mycursor.execute(query, (uni_uid,))
    id_package = mycursor.fetchone()[0]

    i = 0
    for item in id_items:
        query = ("INSERT INTO order_package (id_user, id_item, quantity, id_package) VALUES(%s, %s, %s, %s)")
        val = (id_user, item[0], quantitities[i][0], id_package)
        print(val, '\n')

        mycursor.execute(query, val)
        mycursor.execute("COMMIT")
        i+=1

def remove_itemsInCart(id_user, mycursor):
    query = ("SELECT id FROM cart WHERE id_user = %s")
    mycursor.execute(query, (id_user,))
    id_cart = mycursor.fetchone()[0]

    query = ("DELETE FROM cart_items WHERE id_cart = %s")
    mycursor.execute(query, (id_cart,))
    mycursor.execute("COMMIT")

def get_userPackages(id_user, mycursor):
    query = ("SELECT id_package FROM order_package WHERE id_user = %s")
    mycursor.execute(query, (id_user,))
    id_package = mycursor.fetchone()[0]
    
    query = ("SELECT id_package FROM orders WHERE id = %s")
    mycursor.execute(query, (id_package,))
    uni_uid = mycursor.fetchone()[0]

    return uni_uid

def get_packageDetails(uni_uid, mycursor):
    query = ("SELECT id FROM orders WHERE id_package = %s")
    mycursor.execute(query, (uni_uid,))
    id_package = mycursor.fetchone()[0]

    query = ("SELECT * FROM order_package WHERE id_package = %s")
    mycursor.execute(query, (id_package,))
    packageDetails = mycursor.fetchall()

    return packageDetails

def get_packageItems(packageDetails, mycursor):
    data = []
    items = []
    i = 0
    for package in packageDetails:
        query = ("SELECT * FROM items WHERE id = %s")
        mycursor.execute(query, (packageDetails[i][2],))
        db_items = mycursor.fetchall()
        for item in db_items:
            str_category = dbcon_items.determine_category(item[3])
            data = {
                'id' : item[0],
                'name' : item[1],
                'price' : item[2],
                'category' : str_category,
                'remaining_stock' : item[5],
                'description' : item[6],
                'item_dateListed' : item[7],
                'rating' : item[8],
            }
        items.insert(i, data)
        i+=1
    return items
