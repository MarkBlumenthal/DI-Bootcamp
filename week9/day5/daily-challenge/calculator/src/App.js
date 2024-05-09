import React, { useState } from 'react';
import './App.css';

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operation, setOperation] = useState('add');
  const [result, setResult] = useState(null);

  const handleNum1Change = (e) => setNum1(e.target.value);
  const handleNum2Change = (e) => setNum2(e.target.value);
  const handleOperationChange = (e) => setOperation(e.target.value);

  const calculateResult = () => {
    let n1 = parseFloat(num1);
    let n2 = parseFloat(num2);
    let res;

    switch (operation) {
      case 'add':
        res = n1 + n2;
        break;
      case 'subtract':
        res = n1 - n2;
        break;
      case 'multiply':
        res = n1 * n2;
        break;
      case 'divide':
        res = n1 / n2;
        break;
      default:
        res = 'Invalid operation';
    }
    setResult(res);
  };


  const resetCalculator = () => {
    setNum1('');
    setNum2('');
    setOperation('add');
    setResult(null);
  };

  return (
    <div className="App">
      <h1>Calculator</h1>
      <h3>Lets do Math!</h3>
      <div>
        <input
          type="number"
          placeholder="First number"
          value={num1}
          onChange={handleNum1Change}
        />
        <input
          type="number"
          placeholder="Second number"
          value={num2}
          onChange={handleNum2Change}
        />
        <select value={operation} onChange={handleOperationChange}>
          <option value="add">Add</option>
          <option value="subtract">Subtract</option>
          <option value="multiply">Multiply</option>
          <option value="divide">Divide</option>
        </select>
        <button onClick={calculateResult}>Calculate!</button>
        <button onClick={resetCalculator}>Reset</button>
      </div>
      {result !== null && <h2>{result}</h2>}
    </div>
  );
}

export default App;


