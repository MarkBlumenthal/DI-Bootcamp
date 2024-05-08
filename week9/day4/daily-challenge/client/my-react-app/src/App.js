// src/App.js
import React, { Component } from 'react';

class App extends Component {
  state = {
    message: '',
    responseMessage: '',
    inputValue: '',
  };

  // Fetch the greeting message when the component mounts
  async componentDidMount() {
    try {
      const response = await fetch('http://localhost:5000/api/hello');
      const data = await response.json();
      this.setState({ message: data.message });
    } catch (error) {
      console.error('Error fetching message:', error);
    }
  }

  // Update the input value state
  handleChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  // Submit the form, sending the input value to the server
  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/world', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: this.state.inputValue }),
      });
      const data = await response.json();
      this.setState({ responseMessage: data.message });
    } catch (error) {
      console.error('Error posting message:', error);
    }
  };

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.inputValue}
            onChange={this.handleChange}
          />
          <button type="submit">Send</button>
        </form>
        <p>{this.state.responseMessage}</p>
      </div>
    );
  }
}

export default App;


