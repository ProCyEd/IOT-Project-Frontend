import sqlite3
from flask import Flask, request
app = Flask(__name__)
conn = sqlite3.connect('IoT.db')


c = conn.cursor()
@app.route("/getusers", methods=['GET'])
def pullUsers():
    try:
        c.execute('SELECT * FROM users')
        items = c.fetchall
        for item in items:
            print(f'{items[0]} {items[1]} {items[2]}')
    except Exception as e:
        print(e.args)
        
conn.commit()
conn.close()