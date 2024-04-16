const db = require('../config/db');

const getAllBooks = async (req, res) => {
  try {
    const { rows } = await db.query('SELECT * FROM books');
    res.json(rows);
  } catch (error) {
    res.status(500).send("Error fetching books: " + error.message);
  }
};

const getBookById = async (req, res) => {
  const { bookId } = req.params;
  try {
    const { rows } = await db.query('SELECT * FROM books WHERE id = $1', [bookId]);
    if (rows.length === 0) {
      res.status(404).json({ message: 'Book not found' });
    } else {
      res.status(200).json(rows[0]);
    }
  } catch (error) {
    res.status(500).send("Error retrieving book: " + error.message);
  }
};

const createBook = async (req, res) => {
  const { title, author, publishedYear } = req.body;
  try {
    const { rows } = await db.query(
      'INSERT INTO books (title, author, published_year) VALUES ($1, $2, $3) RETURNING *',
      [title, author, publishedYear]
    );
    res.status(201).json(rows[0]);
  } catch (error) {
    res.status(500).send("Error adding new book: " + error.message);
  }
};

module.exports = { getAllBooks, getBookById, createBook };



