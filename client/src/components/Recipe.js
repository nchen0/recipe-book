import React, { useContext } from "react";
import { Route } from "react-router-dom";
import { RecipeContext } from "../contexts/RecipeContext";

const Recipe = props => {
  return (
    <div className="card">
      <img
        src="https://images.unsplash.com/photo-1527976746453-f363eac4d889?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0d4eede870171d16f53977eddcc49d8d&auto=format&fit=crop&w=889&q=80"
        height="225px"
        width="400px"
        class="recipeImage"
      />
      <div>{props.recipe.name}</div>
      <div>{props.recipe.ingredients}</div>
    </div>
  );
};

export default Recipe;
