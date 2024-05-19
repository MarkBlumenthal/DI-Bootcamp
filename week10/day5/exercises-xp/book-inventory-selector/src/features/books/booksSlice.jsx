import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [
    { id: 1, title: '1984', author: 'George Orwell', genre: 'Science Fiction' },
    { id: 2, title: 'Dune', author: 'Frank Herbert', genre: 'Science Fiction' },
    { id: 3, title: 'The Shining', author: 'Stephen King', genre: 'Horror' },
    { id: 4, title: 'The Hobbit', author: 'J.R.R. Tolkien', genre: 'Fantasy' },
    { id: 5, title: 'Pride and Prejudice', author: 'Jane Austen', genre: 'Romance' },
    { id: 6, title: 'Gone Girl', author: 'Gillian Flynn', genre: 'Mystery' },
    { id: 7, title: 'Sapiens', author: 'Yuval Noah Harari', genre: 'Non-Fiction' },
    { id: 8, title: 'The Road', author: 'Cormac McCarthy', genre: 'Science Fiction' },
    { id: 9, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', genre: 'Romance' },
    { id: 10, title: 'The Da Vinci Code', author: 'Dan Brown', genre: 'Mystery' },
    { id: 11, title: 'Educated', author: 'Tara Westover', genre: 'Non-Fiction' },
    { id: 12, title: 'Brave New World', author: 'Aldous Huxley', genre: 'Science Fiction' },
    { id: 13, title: 'The Catcher in the Rye', author: 'J.D. Salinger', genre: 'Non-Fiction' },
    { id: 14, title: 'The Hound of the Baskervilles', author: 'Arthur Conan Doyle', genre: 'Mystery' },
    { id: 15, title: 'Jane Eyre', author: 'Charlotte Brontë', genre: 'Romance' },
  ],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
});

export const selectBooks = (state) => state.books.books;

export default booksSlice.reducer;


