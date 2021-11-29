import sqlite3
from flask import Flask, request
app = Flask(__name__)
conn = sqlite3.connect('IoT.db')

c = conn.cursor()
@app.route("/getspecificuser", methods=['GET'])
def onCreateUser(value):
    try:
        c.execute('SELECT * FROM users WHERE name = (?) AND email = (?) AND psw = (?)', value.name, value.email, value.password)
    except Exception as e:
        print(e.args)


print('successfully get specific user')

conn.commit()
conn.close()