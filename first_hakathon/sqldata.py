import psycopg2
from datetime import datetime

# Connect to the PostgreSQL database
conn = psycopg2.connect(
    dbname="Demon Slayer",
    user="postgres",
    password="arsenal_1",
    host="localhost"
)
cur = conn.cursor()

# Insert player data into the database
def insert_player_data(player_name, character_name):
    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    sql = "INSERT INTO player_data (player_name, character_name, play_time) VALUES (%s, %s, %s)"
    data = (player_name, character_name, timestamp)
    cur.execute(sql, data)
    conn.commit()

# Close the database connection
def close_connection():
    cur.close()
    conn.close()

# Example usage
player_name = ""
character_name = ""
insert_player_data(player_name, character_name)
close_connection()
