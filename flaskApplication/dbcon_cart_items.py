import dbcon_items

def addCart(id_user, mycursor):
    query = ("INSERT INTO cart (id, id_user) VALUES (NULL, %s);")

    mycursor.execute(query, (id_user,))
    mycursor.execute("COMMIT")

    print("user cart linked!")

def addItem_toCart(id_item, id_user, quantity, mycursor):
    try:
        query = ("SELECT id FROM cart WHERE id_user = %s")
        mycursor.execute(query, (id_user,))
        id_cart = mycursor.fetchone()[0]

        query = ("INSERT INTO cart_items (id_item, id_cart, quantity) VALUES (%s,%s,%s)")
        val = (id_item, id_cart, quantity)

        mycursor.execute(query, val)
        mycursor.execute("COMMIT")

    except Exception as e:
        print("Exception error : ", e)

def removeItem_fromCart(id_item, id_user, mycursor):
    try:
        query = ("SELECT id FROM cart WHERE id_user = %s")
        mycursor.execute(query, (id_user,))
        id_cart = mycursor.fetchone()[0]
        
        query = ("DELETE FROM cart_items WHERE id_item = %s AND id_cart = %s")

        mycursor.execute(query, (id_item, id_cart))
        mycursor.execute("COMMIT")
    except Exception as e:
        print("Exception error : ", e)

def editItemQTY_fromCart(quantity, id_cartItems, mycursor):
    try:
        query = ("UPDATE cart_items SET quantity = %s WHERE cart_items.id = %s")
        val = (quantity, id_cartItems)

        mycursor.execute(query, val)
        mycursor.execute("COMMIT")
    except Exception as e:
        print("Exception error : ", e)

def get_userCartItems(id_cartUser, mycursor):
    try:
        query = ("SELECT id FROM cart WHERE id_user = %s")
        mycursor.execute(query, (id_cartUser,))
        db_cart = mycursor.fetchone()[0]

        query = ("SELECT id_item FROM cart_items WHERE id_cart = %s")

        mycursor.execute(query, (db_cart,))
        db_cartID = mycursor.fetchall()

        data = []
        items = []
        i = 0
        for cart in db_cartID:
            query = ("SELECT * FROM items WHERE id = %s")

            mycursor.execute(query, (db_cartID[i],))
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

    except Exception as e:
        print("Exception error : ", e)

def getItem_quantity(id_user, mycursor):
    query = ("SELECT quantity FROM cart_items WHERE id_cart = %s")

    mycursor.execute(query, (id_user,))
    result = mycursor.fetchall()
    
    return result