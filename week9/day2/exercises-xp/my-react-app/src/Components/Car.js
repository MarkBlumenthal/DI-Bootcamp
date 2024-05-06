import React, { useState } from 'react';
import Garage from './Garage';

function Car({ carInfo }) {
  const [color, setColor] = useState('green');

  return (
    <div>
      <h1>This car is a {color} {carInfo.model}</h1>
      <Garage size="tiny" />
    </div>
  );
}

export default Car;
