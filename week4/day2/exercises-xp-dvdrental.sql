-- Database: dvdrental

-- DROP DATABASE IF EXISTS dvdrental;

-- CREATE DATABASE dvdrental
--     WITH
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'English_South Africa.1252'
--     LC_CTYPE = 'English_South Africa.1252'
--     LOCALE_PROVIDER = 'libc'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1
--     IS_TEMPLATE = False;


-- #1
-- SELECT * FROM customer;


-- #2
-- SELECT CONCAT(first_name, ' ', last_name) AS full_name
-- FROM customer;   #concat function combines first and last names The AS full_name part renames the result of this concatenation to full_name                  


-- #3
-- SELECT DISTINCT create_date         #Distinct makes sure their are no duplicate values
-- FROM customer;                 


-- #4
-- SELECT *FROM customer
-- ORDER BY first_name DESC;         #Desc=descending


-- #5
-- SELECT film_id, title, description, release_year, rental_rate
-- FROM film
-- ORDER BY rental_rate ASC;        #ASC=ascending


-- #6
-- SELECT a.address, a.phone                       #'a'is used to join address
-- FROM customer AS c
-- JOIN address AS a ON c.address_id = a.address_id   #'c'allows join to be easily readible
-- WHERE a.district = 'Texas';


-- #7
-- SELECT * FROM film
-- WHERE film_id IN (15, 150);    #In used to specify exactly which items to retrieve


-- -- #8
-- SELECT film_id, title, description, length, rental_rate
-- FROM film
-- WHERE title = 'Star Wars';


-- #9 # '%' matches zero or mor characters 
-- SELECT film_id, title, description, length, rental_rate
-- FROM film                    
-- WHERE title LIKE 'St%';             


-- #10
-- SELECT film_id, title, description, length, rental_rate
-- FROM film
-- ORDER BY rental_rate 
-- LIMIT 10;


-- #11
-- SELECT film_id, title, description, length, rental_rate
-- FROM film
-- WHERE rental_rate > (
--     SELECT rental_rate
--     FROM film
--     ORDER BY rental_rate ASC
--     OFFSET 10
--     LIMIT 1
-- )
-- ORDER BY rental_rate ASC
-- FETCH FIRST 10 ROWS ONLY;



-- #12
-- SELECT c.first_name, c.last_name, p.amount, p.payment_date
-- FROM customer c
-- JOIN payment p ON c.customer_id = p.customer_id
-- ORDER BY p.payment_id;


-- #13
-- SELECT film_id, title, description
-- FROM film
-- WHERE film_id NOT IN (
--     SELECT DISTINCT film_id
--     FROM inventory);



-- #14
-- SELECT city.city, country.country
-- FROM city
-- JOIN country ON city.country_id = country.country_id;  #pefroms an inner join



-- #15  #used inner joins
-- SELECT c.customer_id, c.first_name, c.last_name, p.amount, p.payment_date, s.staff_id
-- FROM customer c
-- JOIN payment p ON c.customer_id = p.customer_id
-- JOIN rental r ON p.rental_id = r.rental_id
-- JOIN staff s ON r.staff_id = s.staff_id
-- ORDER BY s.staff_id;
















