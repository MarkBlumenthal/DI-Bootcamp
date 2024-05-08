import React, { Component } from 'react';

class Example1 extends Component {
  constructor() {
    super();
    this.state = { socialMedias: [] };
  }

  componentDidMount() {
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => this.setState({ socialMedias: data.SocialMedias }))
      .catch((error) => console.error('Error fetching data:', error));
  }

  render() {
    return (
      <div>
        <h3>Social Media Links</h3>
        <ul>
          {this.state.socialMedias.map((link, index) => (
            <li key={index}>
              <a href={link} target="_blank" rel="noopener noreferrer">{link}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Example1;
