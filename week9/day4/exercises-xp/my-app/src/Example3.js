import React, { Component } from 'react';

class Example3 extends Component {
  constructor() {
    super();
    this.state = { experiences: [] };
  }

  componentDidMount() {
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => this.setState({ experiences: data.Experiences }))
      .catch((error) => console.error('Error fetching data:', error));
  }

  render() {
    return (
      <div>
        {this.state.experiences.map((experience, index) => (
          <div key={index}>
            <h3>{experience.companyName}</h3>
            <a href={experience.url} target="_blank" rel="noopener noreferrer">
              <img src={experience.logo} alt={`${experience.companyName} logo`} width="100" />
            </a>
            {experience.roles.map((role, roleIndex) => (
              <div key={roleIndex}>
                <h4>{role.title}</h4>
                <p>{role.description}</p>
                <p>{role.startDate} - {role.endDate}</p>
                <p>{role.location}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default Example3;
