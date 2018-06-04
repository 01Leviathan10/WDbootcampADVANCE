import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Recipe from './Recipe.jsx';
import './RecipeList.css';


class RecipeList extends Component {
    static defaultProps = {
        recipes: [
            {
                title: "Spaghetti",
                instructions: "Open jar of Spaghetti souce.",
                ingredients: ["pasta", "8 cups water", "1 box spaghetti", "tablespoon oil", "2 cups tomato sauce", "1 medium onion, peeled and diced", "3 cloves garlic, peeled and minced", "1 bell pepper, seeded, cored and chopped", "1 pound ground beef"],
                img:"spaghetti.jpeg"
            },
            {
                title: "Milkshake",
                instructions: "Combine ice cram and milk.",
                ingredients: ["4 cups quality vanilla ice cream", "2 teaspoons vanilla extract", "8 tablespoons sugar", "2 cups milk, less for thicker milkshakes"],
                img:"milkshake.jpeg"   
            },
            {
                title: "Avocado Toast",
                instructions: "Toast bread. Slice avocado and sprice.",
                ingredients: ["2 slices of bread", "1 avocado", "Sea salt", "Red pepper flakes", "Extra-virgin olive oil, for drizzling"],
                img:"AvocadoToast.jpg"
            }
        ]
    }

    static propTypes = {
        recipes: PropTypes.arrayOf(PropTypes.object).isRequired
    }


    render() {
        const recipes = this.props.recipes.map((r,index)=> (
            <Recipe key={index} {...r} />
        )
        
    );






        return(
            <div className="recipe-list">{recipes}</div>
        )
    }
}

export default RecipeList;