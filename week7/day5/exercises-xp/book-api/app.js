// #Exercise-2


// const express = require('express');
// const app = express();

// app.use(express.json()); 

// let books = [
//     { id: 1, title: '1870', author: 'Verne', publishedYear: 1949 },
//     { id: 2, title: 'The Lord of the Rings', author: 'Tolkien', publishedYear: 1925 }
// ];



// app.get('/api/books', (req, res) => {
//     res.json(books);
// });


// app.get('/api/books/:bookId', (req, res) => {
//     const book = books.find(b => b.id === parseInt(req.params.bookId));
//     if (!book) return res.status(404).send('Book not found');
//     res.json(book);
// });


// app.post('/api/books', (req, res) => {
//     const { title, author, publishedYear } = req.body;
//     const newBook = {
//         id: books.length + 1,
//         title,
//         author,
//         publishedYear
//     };
//     books.push(newBook);
//     res.status(201).json(newBook);
// });


// const PORT = 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
