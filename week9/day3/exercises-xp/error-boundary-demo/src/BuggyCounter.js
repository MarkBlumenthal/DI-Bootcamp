import React, { Component } from 'react';

class BuggyCounter extends Component {
  state = { counter: 0 };

  handleClick = () => {
    this.setState(({ counter }) => {
      const newCounter = counter + 1;
      if (newCounter === 5) {
        throw new Error('I crashed!');
      }
      return { counter: newCounter };
    });
  };


  render() {
    return <h1 onClick={this.handleClick}>{this.state.counter}</h1>;
  }
}

export default BuggyCounter;
