-- Database: bootcamp

-- DROP DATABASE IF EXISTS bootcamp;

-- CREATE DATABASE bootcamp
--     WITH
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'English_South Africa.1252'
--     LC_CTYPE = 'English_South Africa.1252'
--     LOCALE_PROVIDER = 'libc'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1
--     IS_TEMPLATE = False;

-- CREATE TABLE students (
--     id SERIAL PRIMARY KEY,
--     last_name VARCHAR(255),
--     first_name VARCHAR(255),
--     birth_date DATE
-- );

-- INSERT INTO students (first_name, last_name, birth_date) VALUES
-- ('Marc', 'Benichou', '1998-02-11'),
-- ('Yoan', 'Cohen', '2010-03-12'),
-- ('Lea', 'Benichou', '1987-07-27'),
-- ('Amelia', 'Dux', '1996-04-07'),
-- ('David', 'Grez', '2003-06-14'),
-- ('Omer', 'Simpson', '1980-10-03');

-- INSERT INTO students (first_name, last_name, birth_date) 
-- VALUES ('Mark', 'Blumenthal', '1988-12-29');

-- SELECT * FROM students;
-- SELECT first_name, last_name FROM students;
-- SELECT first_name, last_name FROM students WHERE id = 2;
-- SELECT first_name, last_name FROM students WHERE last_name = 'Benichou' AND first_name = 'Marc';
-- SELECT first_name, last_name FROM students WHERE last_name = 'Benichou' OR first_name = 'Marc';
-- SELECT first_name, last_name FROM students WHERE first_name LIKE '%a%';
-- SELECT first_name, last_name FROM students WHERE first_name LIKE 'A%';
-- SELECT first_name, last_name FROM students WHERE first_name LIKE '%a';
-- SELECT first_name, last_name FROM students WHERE first_name LIKE '%a_';
-- SELECT first_name, last_name FROM students WHERE id = 1 OR id = 3;
-- SELECT * FROM students WHERE birth_date >= '2000-01-01';









