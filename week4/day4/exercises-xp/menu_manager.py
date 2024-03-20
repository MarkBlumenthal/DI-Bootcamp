import psycopg2

class MenuManager:
    @classmethod
    def get_by_name(cls, name):
        # Connect to the database
        conn = psycopg2.connect(database="day4exercises-xp", user="postgres", password="arsenal_1", host="localhost", port="5432")
        cur = conn.cursor()

        # Retrieve the item from the Menu_Items table
        cur.execute("SELECT * FROM Menu_Items WHERE item_name = %s", (name,))
        item = cur.fetchone()
        
        # Close the connection
        conn.close()

        # If item found, return it; otherwise, return None
        if item:
            return item
        else:
            return None

    @classmethod
    def all(cls):
        # Connect to the database
        conn = psycopg2.connect(database="day4exercises-xp", user="postgres", password="arsenal_1", host="localhost", port="5432")
        cur = conn.cursor()

        # Retrieve all items from the Menu_Items table
        cur.execute("SELECT * FROM Menu_Items")
        items = cur.fetchall()
        
        # Close the connection
        conn.close()

        return items







