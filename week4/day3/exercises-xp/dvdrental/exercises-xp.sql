-- Exercise 1

-- #1
-- SELECT name FROM language;


-- #2
-- SELECT
--     film.title,
--     film.description,
--     language.name AS language_name
-- FROM
--     film
-- INNER JOIN language ON film.language_id = language.language_id;




-- #3
-- SELECT
--     language.name AS language_name,
--     film.title,
--     film.description
-- FROM
--     language
-- LEFT JOIN film ON language.language_id = film.language_id;





-- #4
-- CREATE TABLE new_film (
--     id SERIAL PRIMARY KEY,
--     name VARCHAR(255));
	
-- 	INSERT INTO new_film (name) VALUES
-- ('Star Wars'),
-- ('Indiana Jones'),
-- ('Back To The Future');

-- SELECT * FROM new_film;





-- #5
-- CREATE TABLE customer_review (
--     review_id SERIAL PRIMARY KEY,
--     film_id INT NOT NULL REFERENCES new_film(id) ON DELETE CASCADE,
--     language_id INT REFERENCES language(id),
--     title VARCHAR(255),
--     score INT CHECK (score BETWEEN 1 AND 10),
--     review_text TEXT,
--     last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP);


-- #6
-- Inserting a movie review for film with id 1 in English
-- INSERT INTO customer_review (film_id, language_id, title, score, review_text)
-- VALUES (12, 1, 'Great Movie!', 9, 'This movie was excellent. Highly recommended.');

-- -- Inserting a movie review for film with id 2 in English
-- INSERT INTO customer_review (film_id, language_id, title, score, review_text)
-- VALUES (10, 1, 'Incredible', 8, 'A must see film.');

-- select * from customer_review;



-- #7
-- DELETE FROM new_film WHERE id = 12;
-- select * from customer_review

-- # moview and review was deleted





-- #exercise 2

-- #1
-- UPDATE film
-- SET language_id = (
--     SELECT language_id
--     FROM language
--     WHERE language_id = 1 -- Specify the language ID you want to set
-- )

-- SELECT *
-- FROM film
-- WHERE language_id = 1; -- Specify the language ID you set in the UPDATE statement







-- #2
-- SELECT
--     tc.constraint_name,
--     tc.table_name AS source_table,
--     kcu.column_name AS source_column,
--     ccu.table_name AS referenced_table,
--     ccu.column_name AS referenced_column
-- FROM
--     information_schema.table_constraints AS tc
-- JOIN information_schema.key_column_usage AS kcu
--     ON tc.constraint_name = kcu.constraint_name
-- JOIN information_schema.constraint_column_usage AS ccu
--     ON ccu.constraint_name = tc.constraint_name
-- WHERE
--     tc.constraint_type = 'FOREIGN KEY'
--     AND ccu.table_name = 'customer';



-- #3
-- DROP TABLE IF EXISTS customer_review;
-- #this will drop the table and all its contents. make sure there is no info you want to keep.



-- #4
-- SELECT COUNT(*) AS outstanding_rentals
-- FROM rental
-- WHERE return_date IS NULL;




-- #5 calculates the rental fee based on the rental duration
-- SELECT f.title AS movie_title, 
--        SUM(DATE_PART('day', CURRENT_DATE - r.rental_date) * f.rental_rate) AS total_rental_fee
-- FROM rental r
-- JOIN inventory i ON r.inventory_id = i.inventory_id
-- JOIN film f ON i.film_id = f.film_id
-- WHERE r.return_date IS NULL
-- GROUP BY f.title
-- LIMIT 10;



-- #6

-- #1
-- SELECT title 
-- FROM film 
-- WHERE description ILIKE '%sumo wrestler%' 
--   AND title IN (SELECT film.title 
--                 FROM film 
--                 JOIN film_actor ON film.film_id = film_actor.film_id 
--                 JOIN actor ON film_actor.actor_id = actor.actor_id 
--                 WHERE actor.first_name = 'Penelope' AND actor.last_name = 'Monroe');


-- #2
-- SELECT title 
-- FROM film 
-- WHERE length < 60 -- Assuming the length is in minutes
--   AND rating = 'R';




-- #3
-- SELECT title 
-- FROM film 
-- WHERE film_id IN (SELECT inventory.film_id 
--                   FROM inventory 
--                   JOIN rental ON inventory.inventory_id = rental.inventory_id 
--                   WHERE rental_date BETWEEN '2005-07-28' AND '2005-08-01' 
--                     AND rental_rate > 4.00 
--                     AND customer_id IN (SELECT customer_id 
--                                          FROM customer 
--                                          WHERE first_name = 'Matthew' AND last_name = 'Mahan'));




-- #4
-- SELECT title 
-- FROM film 
-- WHERE (title ILIKE '%boat%' OR description ILIKE '%boat%') 
--   AND film_id IN (SELECT inventory.film_id 
--                   FROM inventory 
--                   JOIN rental ON inventory.inventory_id = rental.inventory_id 
--                   WHERE customer_id IN (SELECT customer_id 
--                                         FROM customer 
--                                         WHERE first_name = 'Matthew' AND last_name = 'Mahan') 
--                     AND replacement_cost > 50.00);









