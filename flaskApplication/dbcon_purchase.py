# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
# ITEM PRICE BASED ON QUANTITY

def calculate_itemPrice(id_cartItem, mycursor):
    query = ("SELECT id_item FROM cart_items WHERE id = %s")

    mycursor.execute(query, id_cartItem)
    id_item = mycursor.fetchone()[0]

    query = ("SELECT quantity FROM cart_items WHERE id = %s")

    mycursor.execute(query, id_cartItem)
    quantity = int(mycursor.fetchone()[0])

    query = ("SELECT price FROM items WHERE id = %s")

    mycursor.execute(query, id_item)
    price = float(mycursor.fetchone()[0])

    return price * quantity

# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
# GET COUNT OF ALL ITEMS

def get_cartItemCount(id_cart, mycursor):
    query = ("SELECT COUNT(id_cart) FROM cart_items WHERE id_cart = %s")

    mycursor.execute(query, id_cart)
    result = mycursor.fetchone()[0]

    return result

# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
# TOTAL PRICE
    # GET COUNT OF ALL ITEMS 

def calculate_totalPrice(id_cart, mycursor):
    for item in items:
        
    