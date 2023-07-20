import dbcon_user

def login_user(username, mycursor):

    query = ("INSERT INTO session (username) VALUES (%s);")

    mycursor.execute(query, (username,))
    mycursor.execute("COMMIT")

def logout_user(mycursor):
    query = ("TRUNCATE ` session `")
    
    mycursor.execute(query)
    mycursor.execute("COMMIT")

def get_sessionCustomer(mycursor):
    query = ("SELECT username FROM session")

    mycursor.execute(query)
    result = mycursor.fetchone()[0]

    return result