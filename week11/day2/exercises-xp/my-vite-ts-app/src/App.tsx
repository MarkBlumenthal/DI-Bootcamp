import React from 'react';
import Person from './Person';

const App: React.FC = () => {
  const person = new Person('Mark', 'B', 35, '37 High St');

  return (
    <div>
      <h1>Person Information</h1>
      <p>Full Name: {person.getFullName()}</p>
      <p>Age: {person.age}</p>
    </div>
  );
};

export default App;

