import React from 'react';

function FormComponent({ formData, handleChange, handleSubmit }) {
  return (
    <form className="inputForm" onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        placeholder="First Name"
        className="text"
      />
      <br />
      <input
        type="text"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        placeholder="Last Name"
        className="text"
      />
      <br />
      <input
        type="number"
        name="age"
        value={formData.age}
        onChange={handleChange}
        placeholder="Age"
        className="text"
      />
      <br />
      <label>
        Male
        <input
          type="radio"
          name="gender"
          value="male"
          checked={formData.gender === 'male'}
          onChange={handleChange}
          className="radiobutton"
        />
      </label>
      <label>
        Female
        <input
          type="radio"
          name="gender"
          value="female"
          checked={formData.gender === 'female'}
          onChange={handleChange}
          className="radiobutton"
        />
      </label>
      <br />
      <h3 className="destination-header">Select your Destination</h3>
      <select
        name="destination"
        value={formData.destination}
        onChange={handleChange}
        className="destination-input"
      >
        <option value="Japan">Japan</option>
        <option value="Thailand">Thailand</option>
        <option value="Brazil">Brazil</option>
      </select>
      <br />
      <h3 className="restrictions-title">Dietary restrictions:</h3>
      <div className="restrictions">
        <div className="dietary-restriction">
          <input
            type="checkbox"
            name="lactoseFree"
            checked={formData.lactoseFree}
            onChange={handleChange}
          />
          <label>Lactose Free</label>
        </div>
        <div className="dietary-restriction">
          <input
            type="checkbox"
            name="nutsFree"
            checked={formData.nutsFree}
            onChange={handleChange}
          />
          <label>Nuts Free</label>
        </div>
        <div className="dietary-restriction">
          <input
            type="checkbox"
            name="vegan"
            checked={formData.vegan}
            onChange={handleChange}
          />
          <label>Vegan</label>
        </div>
      </div>
      <br />
      <button type="submit" className="submit">Submit</button>
    </form>
  );
}

export default FormComponent;
