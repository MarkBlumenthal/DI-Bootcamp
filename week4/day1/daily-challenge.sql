-- Database: Hollywood

-- DROP DATABASE IF EXISTS "Hollywood";

-- CREATE DATABASE "Hollywood"
--     WITH
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'English_South Africa.1252'
--     LC_CTYPE = 'English_South Africa.1252'
--     LOCALE_PROVIDER = 'libc'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1
--     IS_TEMPLATE = False;

-- CREATE TABLE actors(
--  actor_id SERIAL PRIMARY KEY,
--  first_name VARCHAR (50) NOT NULL,
--  last_name VARCHAR (100) NOT NULL,
--  age DATE NOT NULL,
--  number_oscars SMALLINT NOT NULL
-- )

-- INSERT INTO actors (first_name, last_name, age, number_oscars)
-- VALUES('Matt','Damon','1970/08/10', 5);

-- INSERT INTO actors (first_name, last_name, age, number_oscars)
-- VALUES('George','Clooney','1961/06/05', 2);

-- insert into actors (first_name, last_name, age, number_oscars)
-- values ('Meryl','Streep','1955/12/02', 4),
-- ('Gal', 'Gadot', '1980/02/15', 0);

-- select * from actors

-- SELECT COUNT(*) FROM actors;

-- INSERT INTO actors (first_name, last_name, age) 
-- VALUES ('Harrison', 'Ford', NULL);



