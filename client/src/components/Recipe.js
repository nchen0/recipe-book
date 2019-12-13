import React, { useContext } from "react";
import { Route } from "react-router-dom";
import { RecipeContext } from "../contexts/RecipeContext";

const Recipe = ({ recipe }) => {
  console.log("props is: ,", recipe);
  return (
    <div className="card">
      <img src={recipe.recipe.image} height="225px" width="400px" class="recipeImage" />
      <div>{recipe.recipe.label}</div>
    </div>
  );
};

export default Recipe;
