import React, { useState, useEffect } from 'react';
import quotesData from './data/quotes.json';
import './App.css';

const QuoteBox = () => {
  const getRandomQuote = () => quotesData[Math.floor(Math.random() * quotesData.length)];
  const generateRandomColor = () => '#' + ((1 << 24) * Math.random() | 0).toString(16);

  const [quote, setQuote] = useState(getRandomQuote());
  const [textColor, setTextColor] = useState(generateRandomColor());

  const generateNewQuote = () => {
    let newQuote;
    do {
      newQuote = getRandomQuote();
    } while (newQuote.quote === quote.quote);

    const newColor = generateRandomColor();
    setQuote(newQuote);
    setTextColor(newColor);
  };

  // Update body background color smoothly
  useEffect(() => {
    document.body.style.transition = 'background-color 1s ease';
    document.body.style.backgroundColor = textColor;
  }, [textColor]);

  return (
    <div
      className="quotebox-container"
      style={{ backgroundColor: 'white', borderRadius: '10px', padding: '20px' }}
    >
      <h1 className="quotebox-header" style={{ color: textColor }}>{quote.quote}</h1>
      <p className="quotebox-author" style={{ color: textColor }}>{quote.author}</p>
      <button
        className="quotebox-button"
        onClick={generateNewQuote}
        style={{ backgroundColor: textColor, color: 'white', borderRadius: '5px' }}
      >
        New Quote
      </button>
    </div>
  );
};

export default QuoteBox;



  