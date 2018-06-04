import React, {Component} from 'react';
import './Pet.css';
import HobbyList from './HobbysList';





class Pet extends Component { 
    render() {
      return (
        <div className="card">
          <h2 className="name">OCTO</h2>
          <img src="https://octodex.github.com/images/steroidtocat.png" alt="octo cat" />
          <h5 style={{fontSize: "2em", margin: "2px" }}>Hobbies:</h5>
          <HobbyList />
          </div>
    ) } } 



    export default Pet;