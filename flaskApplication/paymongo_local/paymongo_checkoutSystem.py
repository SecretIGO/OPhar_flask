import requests

def paymongo_createSession():
    url = "https://api.paymongo.com/v1/checkout_sessions"

    headers = {
        "accept": "application/json",
        "content-type": "application/json",
        "authorization": "Basic Sm9rb3dhbjoxMjM="
    }

    response = requests.post(url, headers=headers)

    print(response.text)