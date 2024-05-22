import React, { useState } from 'react';

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => setCount(prevCount => prevCount + 1);

  const decrement = () => setCount(prevCount => prevCount - 1);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Counter</h1>
      <p>Current Count: {count}</p>
      <button onClick={increment}>ADD</button>
      <button onClick={decrement}>Subtract</button>
    </div>
  );
};

export default Counter;
