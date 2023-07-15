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