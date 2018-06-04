import React, { Component } from 'react';
import './RecipeApp.css';
import NavBar from './NavBar.jsx';
import RecipeList from './RecipeList.jsx'



class RecipeApp extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <RecipeList />
      </div>
    );
  }
}

export default RecipeApp;