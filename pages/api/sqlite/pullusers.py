import sqlite3

conn = sqlite3.connect('IoT.db')

c = conn.cursor()

def pullUsers():
    c.execute('SELECT * FROM users')
    items = c.fetchall
    for item in items:
        print(f'{items[0]} {items[1]} {items[2]}')

conn.commit()
conn.close()