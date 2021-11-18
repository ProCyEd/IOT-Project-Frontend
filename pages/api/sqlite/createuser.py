import sqlite3

conn = sqlite3.connect('IoT.db')

c = conn.cursor()

def onCreateUser(value):
    try:
        c.execute('INSERT INTO users VALUES (?, ?, ?)', value.name, value.email, value.psw)
    except Exception as e:
        print(e.args)


print('successfully inserted into users')

conn.commit()
conn.close()