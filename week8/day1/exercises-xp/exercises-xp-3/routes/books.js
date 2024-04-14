// const express = require('express');
// const router = express.Router();

// let books = [];  // In-memory "database"

// // Get all books
// router.get('/', (req, res) => {
//   res.json(books);
// });

// // Add a new book
// router.post('/', (req, res) => {
//   const { title, author } = req.body;
//   const newBook = { id: books.length + 1, title, author };
//   books.push(newBook);
//   res.status(201).json(newBook);
// });

// // Update a book by ID
// router.put('/:id', (req, res) => {
//   const { id } = req.params;
//   const { title, author } = req.body;
//   const book = books.find(b => b.id == id);

//   if (book) {
//     book.title = title;
//     book.author = author;
//     res.json(book);
//   } else {
//     res.status(404).json({ message: 'Book not found' });
//   }
// });

// // Delete a book by ID
// router.delete('/:id', (req, res) => {
//   const { id } = req.params;
//   books = books.filter(b => b.id != id);
//   res.status(204).send();
// });

// module.exports = router;
