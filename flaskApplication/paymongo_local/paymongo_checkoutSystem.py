import requests

url = "https://api.paymongo.com/v1/checkout_sessions"

payload = { "data": { "attributes": {
            "line_items": [
                {
                    "currency": "PHP",
                    "amount": 25000,
                    "name": "Product 1",
                    "quantity": 2
                }
            ],
            "payment_method_types": ["gcash", "paymaya", "card"],
            "send_email_receipt": True
        } } }
headers = {
    "accept": "application/json",
    "content-type": "application/json",
    "authorization": "Basic c2tfdGVzdF9pc2tSTVBuN3g4TjVWSm5YYm1TanU2NWg6"
}

response = requests.post(url, json=payload, headers=headers)

if response.status_code == 200:
    data = response.json()
    checkout_session_id = data["data"]["id"]
    checkout_url = data["data"]["attributes"]["checkout_url"]
    print(checkout_url)
else:
    print(f"Error: API request failed with status code {response.status_code}.")


