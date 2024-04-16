const express = require('express');
const router = express.Router();

const booksController = require('../server/controllers/booksController');


router.get('/', booksController.getAllBooks); 
router.get('/:bookId', booksController.getBookById); 
router.post('/', booksController.createBook); 

module.exports = router;


