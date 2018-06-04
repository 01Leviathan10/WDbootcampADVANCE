import React, {Component} from 'react';

class HobbyList extends Component{
    render() {
      const lifeStyle = {fontSize: '1.5em'};
      const hobbies = ["Sleep", "Eat", "Code", "Train"];
        return (
          <ul>
          {hobbies.map((h, i) => {
            return <li key={i} style={lifeStyle}>{h}</li>
          })}
        </ul>
        );
    }
  }

export default HobbyList;