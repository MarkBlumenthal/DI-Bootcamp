import React, { Component } from 'react';

class Example2 extends Component {
  constructor() {
    super();
    this.state = { skills: [] };
  }

  componentDidMount() {
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => this.setState({ skills: data.Skills }))
      .catch((error) => console.error('Error fetching data:', error));
  }

  render() {
    return (
      <div>
        {this.state.skills.map((area, index) => (
          <div key={index}>
            <h4>{area.Area}</h4>
            <ul>
              {area.SkillSet.map((skill, skillIndex) => (
                <li key={skillIndex}>{skill.Name}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }
}

export default Example2;
