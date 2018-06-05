import React, { Component } from 'react';
import {BrowserRouter as Router, NavLink} from 'react-router-dom';
import SwitchDemo from './SwitchDemo.jsx';
import './App.css';

class App extends Component {
  render() {
    const  active = {textDecoration: "none", coursor:"default", color:"grey"};
    const defaultStyle = {
      margin: "5px"
    }
    return (
      <Router>
        <div className="App">
          <NavLink exact style={defaultStyle} activeStyle={active} to="/" >
            HOME
          </NavLink>
          <NavLink exact style={defaultStyle} activeStyle={active} to="/about" >
            ABOUT
          </NavLink>
          <div style={{fontSize: "3em", margin:"25px"}}>
            <SwitchDemo/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
