import React, { useState } from 'react';
import Stack from './Stack';

const App: React.FC = () => {
  const numberStack = new Stack<number>();
  const [topItem, setTopItem] = useState<number | undefined>(undefined);

  const handlePush = () => {
    const newItem = Math.floor(Math.random() * 100);
    numberStack.push(newItem);
    setTopItem(newItem);
  };

  const handlePop = () => {
    const poppedItem = numberStack.pop();
    setTopItem(poppedItem);
  };

  const handleCheckEmpty = () => {
    alert(numberStack.isEmpty() ? 'Stack is empty' : 'Stack is not empty');
  };

  return (
    <div>
      <h1>Stack</h1>
      <button onClick={handlePush}>Push Random Number</button>
      <button onClick={handlePop}>Pop</button>
      <button onClick={handleCheckEmpty}>Check if Empty</button>
      <p>Top Item: {topItem}</p>
    </div>
  );
};

export default App;

