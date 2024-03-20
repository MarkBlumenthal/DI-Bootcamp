import requests
import psycopg2
import random

# Function to fetch random countries from the REST Countries API
def fetch_random_countries():
    url = 'https://restcountries.com/v3.1/all'
    response = requests.get(url)
    countries = response.json()
    return random.sample(countries, 10)

# Function to connect to PostgreSQL database
def connect_to_database():
    conn = psycopg2.connect(
        dbname="day4dailychallenge",
        user="postgres",
        password="arsenal_1",
        host="localhost"
    )
    return conn

# Function to create table if not exists
def create_table_if_not_exists(conn):
    cur = conn.cursor()
    cur.execute("""
        CREATE TABLE IF NOT EXISTS countries (
            id SERIAL PRIMARY KEY,
            name VARCHAR(100),
            capital VARCHAR(100),
            flag VARCHAR(200),
            subregion VARCHAR(100),
            population INTEGER
        )
    """)
    conn.commit()
    cur.close()

# Function to insert data into the database
def insert_countries_into_db(conn, countries):
    cur = conn.cursor()
    for country in countries:
        cur.execute("""
            INSERT INTO countries (name, capital, flag, subregion, population)
            VALUES (%s, %s, %s, %s, %s)
        """, (
            country.get('name', {}).get('common', ''),  # Extracting 'common' name from nested dictionary
            country.get('capital', [''])[0],           # Capital could be a list, so taking the first element
            country.get('flags', {}).get('svg', ''),   # Extracting 'svg' flag URL
            country.get('subregion', ''),              # Extracting subregion
            country.get('population', 0)               # Extracting population
        ))
    conn.commit()
    cur.close()

# Main function
def main():
    conn = connect_to_database()
    create_table_if_not_exists(conn)
    countries = fetch_random_countries()
    insert_countries_into_db(conn, countries)
    conn.close()
    print("Data inserted successfully!")

if __name__ == "__main__":
    main()

