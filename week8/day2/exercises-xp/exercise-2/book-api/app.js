require('dotenv').config();  

// const db = require('./config/db');

const express = require('express');
const app = express();

app.use(express.json()); // Middleware to parse JSON bodies

const booksRouter = require('./routes/books');
app.use('/api/books', booksRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});





