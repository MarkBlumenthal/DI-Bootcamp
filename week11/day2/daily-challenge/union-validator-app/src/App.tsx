import React from 'react';
import validateUnionType from './validateUnionType';

const App: React.FC = () => {
  const value1 = 'Hello, World!';
  const value2 = 35;
  const value3 = true;

  const allowedTypes = ['string', 'number'];

  const isValue1Valid = validateUnionType(value1, allowedTypes); // Should be true
  const isValue2Valid = validateUnionType(value2, allowedTypes); // Should be true
  const isValue3Valid = validateUnionType(value3, allowedTypes); // Should be false

  return (
    <div>
      <h1>Union Type Validator</h1>
      <p>Value 1: {value1} (Type: {typeof value1}) - Valid: {isValue1Valid.toString()}</p>
      <p>Value 2: {value2} (Type: {typeof value2}) - Valid: {isValue2Valid.toString()}</p>
      <p>Value 3: {value3.toString()} (Type: {typeof value3}) - Valid: {isValue3Valid.toString()}</p>
    </div>
  );
};

export default App;

