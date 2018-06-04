import React, { Component } from 'react';
import './RecipeApp.css';
import NavBar from './NavBar.jsx';
import RecipeList from './RecipeList.jsx';
import RecinpeInput from './RecipeInput.jsx';



class RecipeApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: [
          {
            id: 1,
            title: "Spaghetti",
            instructions: "Open jar of Spaghetti souce.",
            ingredients: ["pasta", "8 cups water", "1 box spaghetti", "tablespoon oil", "2 cups tomato sauce", "1 medium onion, peeled and diced", "3 cloves garlic, peeled and minced", "1 bell pepper, seeded, cored and chopped", "1 pound ground beef"],
            img:"spaghetti.jpeg"
        },
        {
            id: 2,
            title: "Milkshake",
            instructions: "Combine ice cram and milk.",
            ingredients: ["4 cups quality vanilla ice cream", "2 teaspoons vanilla extract", "8 tablespoons sugar", "2 cups milk, less for thicker milkshakes"],
            img:"milkshake.jpeg"   
        },
        {
            id: 3,
            title: "Avocado Toast",
            instructions: "Toast bread. Slice avocado and sprice.",
            ingredients: ["2 slices of bread", "1 avocado", "Sea salt", "Red pepper flakes", "Extra-virgin olive oil, for drizzling"],
            img:"AvocadoToast.jpg"
        }
      ],
      nextRecipeId: 3,
    }
  }
  render() {
    return (
      <div className="App">
        <NavBar />
        <RecinpeInput />
        <RecipeList recipes={this.state.recipe}/>
      </div>
    );
  }
}

export default RecipeApp;