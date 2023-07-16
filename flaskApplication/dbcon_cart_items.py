import dbcon_items

def addItem_toCart(id_item, quantity, mycursor):
    try:
        query = ("INSERT INTO item_cart (id_item, quantity) VALUES (%s,%s,%s)")
        val = (id_item, quantity)

        mycursor.execute(query, val)
        mycursor.execute("COMMIT")

    except Exception as e:
        print("Exception error : ", e)

def removeItem_fromCart(id_cartItems, mycursor):
    try:
        query = ("DELETE FROM cart_items WHERE cart_items.id = %s")

        mycursor.execute(query, (id_cartItems,))
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
        query = ("SELECT id_item FROM cart_items WHERE id_cart = %s")

        mycursor.execute(query, (id_cartUser,))
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