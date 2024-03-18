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
-- FROM customer;


-- #3
-- SELECT DISTINCT create_date
-- FROM customer;


-- #4
-- SELECT *FROM customer
-- ORDER BY first_name DESC;


-- #5
-- SELECT film_id, title, description, release_year, rental_rate
-- FROM film
-- ORDER BY rental_rate ASC;


-- #6
-- SELECT a.address, a.phone
-- FROM customer AS c
-- JOIN address AS a ON c.address_id = a.address_id
-- WHERE a.district = 'Texas';


-- #7
-- SELECT *
-- FROM film
-- WHERE film_id IN (15, 150);


-- -- #8
-- SELECT film_id, title, description, length, rental_rate
-- FROM film
-- WHERE title = '';


-- #9
-- SELECT film_id, title, description, length, rental_rate
-- FROM film
-- WHERE title LIKE 'Ba%';


-- #10
-- SELECT film_id, title, description, length, rental_rate
-- FROM film
-- ORDER BY rental_rate ASC
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
-- JOIN country ON city.country_id = country.country_id;



-- #15
-- SELECT c.customer_id, c.first_name, c.last_name, p.amount, p.payment_date, s.staff_id
-- FROM customer c
-- JOIN payment p ON c.customer_id = p.customer_id
-- JOIN rental r ON p.rental_id = r.rental_id
-- JOIN staff s ON r.staff_id = s.staff_id
-- ORDER BY s.staff_id;
















