import React, { useContext } from "react";
import { Route } from "react-router-dom";
import { RecipeContext } from "../contexts/RecipeContext";

const Recipe = ({ recipe }) => {
  return (
    <div className="card">
      <img src={recipe.image} height="225px" width="300px" class="recipeImage" />
      <div>{recipe.title}</div>
    </div>
  );
};

export default Recipe;
