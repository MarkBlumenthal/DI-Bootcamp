import React, { useState } from 'react';
import FormComponent from './FormComponent';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    gender: 'male',
    destination: 'Japan',
    lactoseFree: false,
    nutsFree: false,
    vegan: false
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === 'checkbox' ? checked : value;

    setFormData(prevData => ({
      ...prevData,
      [name]: newValue
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const queryString = new URLSearchParams(formData).toString();
    window.location.href = `http://localhost:3000/?${queryString}`;
  };

  const fullName = `${formData.firstName} ${formData.lastName}`.trim();

  return (
    <div>
      <h1>Sample form</h1>
      <FormComponent
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <div className="entered-info">
        <h2>Entered information:</h2>
        <p>Your Name: {fullName ? fullName : "N/A"}</p>
        <p>Your Age: {formData.age}</p>
        <p>Your Gender: {formData.gender}</p>
        <p>Your Destination: {formData.destination}</p>
        <p>Your dietary restrictions:</p>
        <p>Lactose Free: {formData.lactoseFree ? "Yes" : "No"}</p>
        <p>Nuts Free: {formData.nutsFree ? "Yes" : "No"}</p>
        <p>Vegan: {formData.vegan ? "Yes" : "No"}</p>
      </div>
    </div>
  );
}

export default App;
