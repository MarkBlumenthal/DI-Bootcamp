import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectBooks } from '../features/books/booksSlice';
import { selectHorrorBooks, selectFantasyBooks, selectScienceFictionBooks, selectRomanceBooks, selectMysteryBooks, selectNonFictionBooks } from '../features/books/selectors';
import './BookList.css';

const BookList = () => {
  const [genre, setGenre] = useState('All');
  const books = useSelector(selectBooks);
  const horrorBooks = useSelector(selectHorrorBooks);
  const fantasyBooks = useSelector(selectFantasyBooks);
  const scienceFictionBooks = useSelector(selectScienceFictionBooks);
  const romanceBooks = useSelector(selectRomanceBooks);
  const mysteryBooks = useSelector(selectMysteryBooks);
  const nonFictionBooks = useSelector(selectNonFictionBooks);

  const getBooksByGenre = () => {
    switch (genre) {
      case 'Horror':
        return horrorBooks;
      case 'Fantasy':
        return fantasyBooks;
      case 'Science Fiction':
        return scienceFictionBooks;
      case 'Romance':
        return romanceBooks;
      case 'Mystery':
        return mysteryBooks;
      case 'Non-Fiction':
        return nonFictionBooks;
      default:
        return books;
    }
  };

  return (
    <div className="book-list-container">
      <h1>Book Inventory</h1>
      <select onChange={(e) => setGenre(e.target.value)} value={genre}>
        <option value="All">All</option>
        <option value="Horror">Horror</option>
        <option value="Fantasy">Fantasy</option>
        <option value="Science Fiction">Science Fiction</option>
        <option value="Romance">Romance</option>
        <option value="Mystery">Mystery</option>
        <option value="Non-Fiction">Non-Fiction</option>
      </select>
      <ul>
        {getBooksByGenre().map((book) => (
          <li key={book.id}>
            {book.title} by {book.author} ({book.genre})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;



