import React, { useContext } from "react";
import { RecipeContext } from "../contexts/RecipeContext";

const ViewRecipe = () => {
  const { recipes } = useContext(RecipeContext);
  let id = Number(window.location.pathname.split("/")[2]);
  const recipe = recipes[id];
  console.log("recipes is: ", recipes);
  return (
    <div>
      <img src={recipe.image} height="225px" width="300px" class="recipeImage" />

      <div>{recipe.title}</div>
      <h3>Ingredients</h3>
      {recipe.extendedIngredients.map(ingredient => {
        return <p>{ingredient.original}</p>;
      })}
    </div>
  );
};

export default ViewRecipe;
