import React from 'react';
import Sedan from './Sedan';

const App: React.FC = () => {
  const sedan = new Sedan('Toyota', 'Camry', 4);

  return (
    <div>
      <h1>Vehicle Information</h1>
      <p>Make: {sedan.make}</p>
      <p>Model: {sedan.model}</p>
      <p>Number of Doors: {sedan.numberOfDoors}</p>
      <p>{sedan.start()}</p>
    </div>
  );
};

export default App;



