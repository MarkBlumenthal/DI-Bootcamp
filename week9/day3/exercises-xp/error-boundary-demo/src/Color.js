import React, { Component } from 'react';

class Color extends Component {
  state = { favoriteColor: 'red' };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoriteColor: 'yellow' });
    }, 1000);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.favoriteColor !== 'red';
  }

  changeColor = () => {
    this.setState({ favoriteColor: 'blue' });
  };

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('in getSnapshotBeforeUpdate');
    return null; 
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('after update');
  }

  render() {
    return (
      <div>
        <h1>
          My Favorite Color is <em>{this.state.favoriteColor}</em>
        </h1>
        <button onClick={this.changeColor}>Change to Blue</button>
      </div>
    );
  }
}

export default Color;


