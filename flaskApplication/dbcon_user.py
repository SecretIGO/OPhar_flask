# dbcon_user local lib for accessing data for users
  # all logics for users

import re
from datetime import datetime

# ______________________________________________________________________________________________ < ' USERS ' >
# - - - - - - - - - - - FINDING USER IN THE DATABASE (signin)

  # problem 1 : not case sensitive...
    # -> eg. testUser and testuser as username is detected as an active username when testUser is the only one in the db
    # FIXED!

def get_roleCount(mycursor):
  query = "SELECT COUNT(*) FROM roles"
  mycursor.execute(query)

  return mycursor.fetchone()[0]


def determine_role(role):
  if role == 1:
    return "user_customer"
  elif role == 2:
    return "user_pharmacy_staff"
  elif role == 3:
    return "user_courier"
  elif role == 4:
    return "user_pharmacy_manager"
  elif role == 5:
    return "user_admin"
  else:
    return None

def get_role(username, mycursor):
  try:

    i = 1
    result = None
    while (result == None):
      str_role = str(determine_role(i))
      
      query = ("SELECT id_role FROM " + str_role + " WHERE BINARY username=%s")
      mycursor.execute(query, (username,))
      result = mycursor.fetchone()

      i+=1

    return result[0]
  
  except Exception as e:
    print("Error exception : ", e)

def find_username(username, mycursor):

  try:
    id_role = get_role(username, mycursor)
    str_role = str(determine_role(id_role))

    query = ("SELECT username FROM " + str_role + " WHERE BINARY username=%s")
    mycursor.execute(query, (username,))  
    result = mycursor.fetchone()

    if result:
      return result
    else:
      return None

  except Exception as e:
    print("Error exception : ", e)

def find_password(username, mycursor):

  try:
    id_role = get_role(username, mycursor)
    str_role = str(determine_role(id_role))
      
    query = ("SELECT password FROM " + str_role + " WHERE BINARY username=%s")
    mycursor.execute(query, (username,))
    result = mycursor.fetchone()

    if result:
      return result
    else:
      return None

  except Exception as e:
    print("Error exception : ", e)

# ______________________________________________________________________________________________
# - - - - - - - - - - - VALIDATE EMAIL (signup)

def validate_email(email):
  # Check if email follows the 'email' pattern
  regex = '^[a-z0-9]+[\._]?[a-z0-9]+[@]\w+[.]\w{2,3}$'

  if not re.search(regex, email):
    return "Does not follow email pattern..."
  
  return None

# ______________________________________________________________________________________________
# - - - - - - - - - - - VALIDATE USERNAME (signup)

def validate_username(username, mycursor):
  id_role = get_role(username, mycursor)
  str_role = determine_role(id_role)
  try:
    query = ("SELECT username FROM " + str_role + " WHERE BINARY username=%s")

    if str_role != "None":
      return "Username already Exists!"
  
  except Exception as e:
    print("Error exception: ", e)
    
  return None

# ______________________________________________________________________________________________
# - - - - - - - - - - - VALIDATE PASSWORD (signup)

def validate_password(password):
  # Check if the password has at least 8 characters
  if len(password) < 8:
    return "password must contain at least 8 charcters"
  
  # Check if the password contains at least one uppercase letter
  if not re.search(r'[A-Z]', password):
    return "password must contain at least 1 upper case character"
  
  # Check if the password contains at least one lowercase letter
  if not re.search(r'[a-z]', password):
    return "password must contain at least 1 lower case character"
  
  # Check if the password contains at least one digit
  if not re.search(r'\d', password):
    return "password contain at least 1 digit"

  return None

# ______________________________________________________________________________________________
# - - - - - - - - - - - ADDING USER TO THE DATABASE (signup)

  # NOTE : roles
    # 1 = customer 
    # 2 = p_staff
    # 3 = courier
    # 4 = p_manager
    # 5 = admin

def addUser(fullname, username, password, email, role, mycursor):
  try:
    id_role = int(role)
    str_role = determine_role(id_role)

    print(fullname, username, password, email, role)
    print(str_role)
    date = datetime.today().strftime('%Y-%m-%d')

    query = ("INSERT INTO " + str_role + " (firstname, lastname, username, password, email, joinDate, id_role, activeStatus) VALUES (%s,%s,%s,%s,%s,%s,%s,%s)")
    val = (fullname[0], fullname[1], username, password, email, date, role, 1)

    mycursor.execute(query, val)
    mycursor.execute("COMMIT")

  except Exception as e:
    print("Exception error : ", e)

# ______________________________________________________________________________________________
# - - - - - - - - - - - LOGGING IN USER (signin)

  # This works, but according to stackoverflow, comparisons like this is bypassable. but whatever.

def login_user(username, password, mycursor):
  try:
    status = False
    result = None
    
    result = str(find_username(username, mycursor)[0])

    if result != "None":
      user_password = find_password(username, mycursor)
      
      print(password)
      print(user_password[0])
      if password == user_password[0]:
        print("User identified!")

        id_role = get_role(username, mycursor)
        str_role = str(determine_role(id_role))

        query = ("UPDATE " + str_role + " SET activeStatus=1 WHERE username = %s")
        mycursor.execute(query, (username,))
        mycursor.execute("COMMIT")
        status = True
        return status
      else:
        print("Incorrect password!")
        print(status)
        return status
      
    else:
      print("Username not found!")
      return status

  except Exception as e:
    print("Error Exception : ", e)

  return status

# ______________________________________________________________________________________________
# - - - - - - - - - - - LOGOUT USER

def logout_user(username, id_role, mycursor):
  str_role = determine_role(id_role)

  query = ("UPDATE " + str_role + " SET activeStatus=0 WHERE username = %s")
  mycursor.execute(query, (username,))

  mycursor.execute("COMMIT")
  
# ______________________________________________________________________________________________
# - - - - - - - - - - - GETTING USER INFORMATION

def get_userID(username, mycursor):
  id_role = get_role(username, mycursor)
  str_role = determine_role(id_role)
  
  query = ("SELECT id FROM " + str_role + " WHERE BINARY username=%s")
  mycursor.execute(query, (username,))
  result = mycursor.fetchone()[0]

  return result

def get_userInformation(username, mycursor):
  id_role = get_role(username, mycursor)
  str_role = determine_role(id_role)

  query = ("SELECT firstname, lastname, username, email FROM " + str_role + " WHERE BINARY username=%s")
  mycursor.execute(query, (username,))
  result = mycursor.fetchone()

  if result:
    details = s_fname, s_mname, s_lname, s_username, email = result

  return details

# ______________________________________________________________________________________________
# - - - - - - - - - - - GETTING THE COUNT OF ALL CURRENTLY ONLINE USERS

def get_allActiveUserCount(role, mycursor):
  str_role = determine_role(role)

  query = ("SELECT COUNT(activeStatus) FROM " + str_role + " WHERE activeStatus = true")
  mycursor.execute(query)
  activeUsers = mycursor.fetchone()[0]

  print("active users : ", activeUsers)

  return activeUsers

# ______________________________________________________________________________________________
# - - - - - - - - - - - GETTING THE COUNT OF ALL USERS

def get_userCount(mycursor):
  numof_users = 0
  temp = 1
  i = 0
  while i < get_roleCount(mycursor):
    str_role = determine_role(temp)
    
    query = ("SELECT COUNT(*) FROM " + str_role)
    mycursor.execute(query)
    numof_users += mycursor.fetchone()[0]
    temp+=1
    i+=1

  print("num of users : ", numof_users)

  return numof_users