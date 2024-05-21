import React, { useState } from 'react';
import filterArray from './filterArray';

const App: React.FC = () => {
  const [numbers] = useState<number[]>([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [filteredNumbers, setFilteredNumbers] = useState<number[]>([]);

  const filterEvenNumbers = () => {
    const evenNumbers = filterArray(numbers, (num) => num % 2 === 0);
    setFilteredNumbers(evenNumbers);
  };

  return (
    <div>
      <h1>Filter Generics</h1>
      <button onClick={filterEvenNumbers}>Filter Even Numbers</button>
      <p>Original Numbers: {numbers.join(', ')}</p>
      <p>Filtered Numbers: {filteredNumbers.join(', ')}</p>
    </div>
  );
};

export default App;

