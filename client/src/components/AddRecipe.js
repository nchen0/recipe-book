import React, { useContext } from "react";
import { RecipeContext } from "../contexts/RecipeContext";

const AddRecipe = () => {
  return (
    <div class="container add">
      <div class="picture"></div>
      <div class="words">
        <div class="addTitle">
          <p>Recipe Title</p>
          <input />
        </div>
        <div class="addDescription">
          <p>Description</p>
          <input />
        </div>
        <div class="addIngredients">
          <p>Ingredients</p>
          <input placeholder="Put each ingredient on its own line." />
        </div>
        <div class="addDirections">
          <p>Directions</p>
          <input placeholder="Put each step on its own line." />
          <div class="radios">
            <input type="radio" value="public" /> Private Recipe
            <input type="radio" value="private" /> Public Recipe
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddRecipe;
