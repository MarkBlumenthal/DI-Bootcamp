import React from 'react';
import combineObjects from './combineObjects';

const App: React.FC = () => {
  const obj1 = { name: 'Mark', age: 35 };
  const obj2 = { address: '65 High St', phone: '1234-1234' };

  const combined = combineObjects(obj1, obj2);

  return (
    <div>
      <h1>Combined Object</h1>
      <p>Name: {combined.name}</p>
      <p>Age: {combined.age}</p>
      <p>Address: {combined.address}</p>
      <p>Phone: {combined.phone}</p>
    </div>
  );
};

export default App;

