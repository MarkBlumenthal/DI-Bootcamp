import psycopg2

class MenuItem:
    def __init__(self, name, price):
        self.name = name
        self.price = price

    def save(self):
        # Connect to the database
        conn = psycopg2.connect(database="day4exercises-xp", user="postgres", password="arsenal_1", host="localhost", port="5432")
        cur = conn.cursor()

        # Insert the item into the Menu_Items table
        cur.execute("INSERT INTO Menu_Items (item_name, item_price) VALUES (%s, %s)", (self.name, self.price))
        
        # Commit changes and close the connection
        conn.commit()
        conn.close()

    def delete(self):
        # Connect to the database
        conn = psycopg2.connect(database="day4exercises-xp", user="postgres", password="arsenal_1", host="localhost", port="5432")
        cur = conn.cursor()

        # Delete the item from the Menu_Items table
        cur.execute("DELETE FROM Menu_Items WHERE item_name = %s", (self.name,))
        
        # Commit changes and close the connection
        conn.commit()
        conn.close()

    def update(self, new_name, new_price):
        # Connect to the database
        conn = psycopg2.connect(database="day4exercises-xp", user="postgres", password="arsenal_1", host="localhost", port="5432")
        cur = conn.cursor()

        # Update the item in the Menu_Items table
        cur.execute("UPDATE Menu_Items SET item_name = %s, item_price = %s WHERE item_name = %s", (new_name, new_price, self.name))
        
        # Commit changes and close the connection
        conn.commit()
        conn.close()


