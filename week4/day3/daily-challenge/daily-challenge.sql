-- Database: day3dailychallenge

-- DROP DATABASE IF EXISTS day3dailychallenge;

-- CREATE DATABASE day3dailychallenge
--     WITH
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'English_South Africa.1252'
--     LC_CTYPE = 'English_South Africa.1252'
--     LOCALE_PROVIDER = 'libc'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1
--     IS_TEMPLATE = False;


-- #part one
-- A

-- Create Customer table
-- CREATE TABLE Customer (
--     id SERIAL PRIMARY KEY,
--     first_name VARCHAR(50) NOT NULL,
--     last_name VARCHAR(50) NOT NULL
-- );

-- -- Create Customer Profile table
-- CREATE TABLE Customer_Profile (
--     id SERIAL PRIMARY KEY,
--     isLoggedIn BOOLEAN DEFAULT false,
--     customer_id INTEGER UNIQUE REFERENCES Customer(id)
-- );


-- B
-- Inserting customers into the Customer table
-- INSERT INTO Customer (first_name, last_name) VALUES ('John', 'Doe');
-- INSERT INTO Customer (first_name, last_name) VALUES ('Jerome', 'Lalu');
-- INSERT INTO Customer (first_name, last_name) VALUES ('Lea', 'Rive');


-- C
-- Inserting customer profiles using subqueries
-- John is loggedIn
-- INSERT INTO Customer_Profile (isLoggedIn, customer_id) 
-- VALUES (true, (SELECT id FROM Customer WHERE first_name = 'John' AND last_name = 'Doe'));

-- -- Jerome is not logged in
-- INSERT INTO Customer_Profile (isLoggedIn, customer_id) 
-- VALUES (false, (SELECT id FROM Customer WHERE first_name = 'Jerome' AND last_name = 'Lalu'));


-- D
-- SELECT c.first_name
-- FROM Customer c
-- JOIN Customer_Profile cp ON c.id = cp.customer_id
-- WHERE cp.isLoggedIn = true;


-- SELECT c.first_name, COALESCE(cp.isLoggedIn, false) AS isLoggedIn
-- FROM Customer c
-- LEFT JOIN Customer_Profile cp ON c.id = cp.customer_id;


-- SELECT COUNT(*) AS num_customers_not_logged_in
-- FROM Customer c
-- LEFT JOIN Customer_Profile cp ON c.id = cp.customer_id
-- WHERE cp.isLoggedIn IS NULL OR cp.isLoggedIn = false;






-- #Part Two
-- 1
-- CREATE TABLE Book (
--     book_id SERIAL PRIMARY KEY,
--     title VARCHAR(255) NOT NULL,
--     author VARCHAR(255) NOT NULL
-- );



-- 2
-- INSERT INTO Book (title, author) VALUES ('Alice In Wonderland', 'Lewis Carroll');
-- INSERT INTO Book (title, author) VALUES ('Harry Potter', 'J.K. Rowling');
-- INSERT INTO Book (title, author) VALUES ('To Kill a Mockingbird', 'Harper Lee');




-- 3
-- CREATE TABLE Student (
--     student_id SERIAL PRIMARY KEY,
--     name VARCHAR(255) NOT NULL UNIQUE,
--     age INTEGER CHECK (age <= 15)
-- );



-- 4
-- INSERT INTO Student (name, age) VALUES ('John', 12);
-- INSERT INTO Student (name, age) VALUES ('Lera', 11);
-- INSERT INTO Student (name, age) VALUES ('Patrick', 10);
-- INSERT INTO Student (name, age) VALUES ('Bob', 14);



-- 5
-- CREATE TABLE Library (
--     book_fk_id INTEGER,
--     student_fk_id INTEGER,
--     borrowed_date DATE,
--     PRIMARY KEY (book_fk_id, student_fk_id),
--     FOREIGN KEY (book_fk_id) REFERENCES Book (book_id) ON DELETE CASCADE ON UPDATE CASCADE,
--     FOREIGN KEY (student_fk_id) REFERENCES Student (student_id) ON DELETE CASCADE ON UPDATE CASCADE
-- );




-- 6
-- Add records to the Library table using subqueries
-- INSERT INTO Library (book_fk_id, student_fk_id, borrowed_date)
-- VALUES (
--     (SELECT book_id FROM Book WHERE title = 'Alice In Wonderland'),
--     (SELECT student_id FROM Student WHERE name = 'John'),
--     '2022-02-15'
-- );

-- INSERT INTO Library (book_fk_id, student_fk_id, borrowed_date)
-- VALUES (
--     (SELECT book_id FROM Book WHERE title = 'To Kill a Mockingbird'),
--     (SELECT student_id FROM Student WHERE name = 'Bob'),
--     '2021-03-03'
-- );

-- INSERT INTO Library (book_fk_id, student_fk_id, borrowed_date)
-- VALUES (
--     (SELECT book_id FROM Book WHERE title = 'Alice In Wonderland'),
--     (SELECT student_id FROM Student WHERE name = 'Lera'),
--     '2021-05-23'
-- );

-- INSERT INTO Library (book_fk_id, student_fk_id, borrowed_date)
-- VALUES (
--     (SELECT book_id FROM Book WHERE title = 'Harry Potter'),
--     (SELECT student_id FROM Student WHERE name = 'Bob'),
--     '2021-08-12'
-- );




-- 7
-- SELECT * FROM Library;

-- SELECT s.name AS student_name, b.title AS book_title
-- FROM Library l
-- JOIN Student s ON l.student_fk_id = s.student_id
-- JOIN Book b ON l.book_fk_id = b.book_id;


-- SELECT AVG(s.age) AS average_age
-- FROM Library l
-- JOIN Student s ON l.student_fk_id = s.student_id
-- JOIN Book b ON l.book_fk_id = b.book_id
-- WHERE b.title = 'Alice In Wonderland';


-- DELETE FROM Student WHERE name = 'John';
-- SELECT * FROM Library;





