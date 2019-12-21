import React, { useContext } from "react";
import { RecipeContext } from "../contexts/RecipeContext";

const Recipe = ({ recipe }) => {
  const { search } = useContext(RecipeContext);
  const imageUrl = `https://spoonacular.com/recipeImages/${recipe.image}`;
  console.log("recipe: ", recipe);
  return (
    <div className="card">
      {search ? (
        <img src={imageUrl} height="225px" width="300px" class="recipeImage" alt="placeholder" />
      ) : (
        <img
          src={recipe.image}
          height="250px"
          width="400px"
          class="recipeImage"
          alt="placeholder"
        />
      )}
      <div class="card-title">{recipe.title}</div>
    </div>
  );
};

export default Recipe;
