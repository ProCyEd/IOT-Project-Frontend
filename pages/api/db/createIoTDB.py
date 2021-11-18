import sqlite3

conn = sqlite3.connect('IoT.db')

c = conn.cursor()

c.execute("""
    CREATE TABLE users(
        name text,
        email text,
        psw text
    )
""")

print('successfully created db')

conn.commit()
conn.close()