from datetime import datetime

def determine_category(id_category):
    if id_category == 1:
        return "liquids"
    if id_category == 2:
        return "tablets"
    if id_category == 3:
        return "capsules"
    if id_category == 4:
        return "drops"
    if id_category == 5:
        return "inhalers"
    if id_category == 6:
        return "injections"
    if id_category == 7:
        return "patches"
    if id_category == 8:
        return "buccals"

def addItem(name, price, id_category, id_symptom, remaining_stock, description, id_store, mycursor):
    try:
        date = datetime.today().strftime('%Y-%m-%d')


        query = ("INSERT INTO items (name, price, id_category, id_symptom, remaining_stock, description, item_dateListed, rating, ActiveStatus, quantity_sold, id_store) VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)")
        val = (name, price, id_category, id_symptom, remaining_stock, description, date, 0, 1, 0, id_store)

        mycursor.execute(query, val)
        mycursor.execute("COMMIT")

    except Exception as e:
        print("Exception error : ", e)

def removeItem(id, mycursor):
    try:
        query = ("DELETE FROM items WHERE id = %s")

        mycursor.execute(query, id)
        mycursor.execute("COMMIT")
        
        print("item removed!")

    except Exception as e:
        print("Exception error : ", e)

def find_allItems(mycursor):
    try:
        query = ("SELECT * FROM items")

        mycursor.execute(query)
        db_items = mycursor.fetchall()

        data = []
        items = []
        i = 0
        for item in db_items:
            str_category = determine_category(item[3])

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

def find_storeItems(id_store, mycursor):
    try:
        query = ("SELECT * FROM items WHERE id_store = %s")

        mycursor.execute(query, id_store)
        db_items = mycursor.fetchall()

        data = []
        items = []
        i = 0
        for item in db_items:
            str_category = determine_category(item[3])

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