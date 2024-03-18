-- Database: SQL Puzzle

-- DROP DATABASE IF EXISTS "SQL Puzzle";

-- CREATE DATABASE "SQL Puzzle"
--     WITH
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'English_South Africa.1252'
--     LC_CTYPE = 'English_South Africa.1252'
--     LOCALE_PROVIDER = 'libc'
--     TABLESPACE = pg_default

-- CREATE TABLE FirstTab (
--      id integer, 
--      name VARCHAR(10)
-- )

-- INSERT INTO FirstTab VALUES
-- (5,'Pawan'),
-- (6,'Sharlee'),
-- (7,'Krish'),
-- (NULL,'Avtaar')

-- SELECT * FROM FirstTab

-- CREATE TABLE SecondTab (
--     id integer 
-- )

-- INSERT INTO SecondTab VALUES
-- (5),
-- (NULL)

-- SELECT * FROM SecondTab

-- Questions

-- outcome= 0
--  SELECT COUNT(*) 
--     FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NULL )

  
  
-- outcome= 2  
--  SELECT COUNT(*) 
--     FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id = 5 )



-- outcome= 0
--  SELECT COUNT(*) 
--     FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab )





-- outcome= 2
--  SELECT COUNT(*) 
--     FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NOT NULL )