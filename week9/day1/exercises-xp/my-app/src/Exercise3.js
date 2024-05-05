import React, { Component } from 'react';
import './Exercise.css'; // Make sure this path is correct based on your project structure

class Exercise extends Component {
  render() {
    const style_header = {
      color: "white",
      backgroundColor: "DodgerBlue",
      padding: "10px",
      fontFamily: "Arial"
    };

    return (
      <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
        <h1 style={style_header}>This is a Header</h1>
        <p className="para">This is a Paragraph</p>
        <a href="https://www.example.com" style={{ color: 'blue', textDecoration: 'underline' }}>This is a Link</a>
        <h2>This is a Form:</h2>
        <form>
          <label>
            Enter your name:
            <input type="text" name="name" />
          </label>
          <button type="submit">Submit</button>
        </form>
        <h2>Here is an Image:</h2>
        <img src="my-app/public/logo192.png" alt="React" style={{ margin: '20px' }} />
        <h2>This is a List:</h2>
        <ul style={{ textAlign: 'left', display: 'inline-block', listStyleType: 'circle' }}>
          <li>Coffee</li>
          <li>Tea</li>
          <li>Milk</li>
        </ul>
      </div>
    );
  }
}

export default Exercise;


  
