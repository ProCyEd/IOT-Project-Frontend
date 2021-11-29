import sqlite3
from flask import Flask, request
app = Flask(__name__)
conn = sqlite3.connect('IoT.db')

c = conn.cursor()

@app.route("/addme", methods=['POST'])
def onCreateUser(value):
    try:
        c.execute('INSERT INTO users VALUES (?, ?, ?)', value.name, value.email, value.password)
    except Exception as e:
        print(e.args)


print('successfully inserted into users')

conn.commit()
conn.close()