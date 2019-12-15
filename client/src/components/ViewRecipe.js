import React, { useContext, useEffect } from "react";
import { RecipeContext } from "../contexts/RecipeContext";
import axios from "axios";

const ViewRecipe = () => {
  const { recipes, setRecipes } = useContext(RecipeContext);

  // Take care of refreshing the page.
  useEffect(() => {
    if (!recipes.length) {
      axios
        .get(
          `${process.env.REACT_APP_API}/recipes/random?number=10&apiKey=${process.env.REACT_APP_RECIPESDB_APPKEY}`
        )
        .then(response => {
          setRecipes(response.data.recipes);
        });
    }
  }, []);
  let id = Number(window.location.pathname.split("/")[2]);
  const recipe = recipes[id];
  console.log("recipes is: ", recipes);
  let instructions = "";
  if (recipe) {
    instructions = recipe.instructions.split(".");
  }
  return (
    <div>
      {recipe ? (
        <div>
          <img src={recipe.image} height="225px" width="300px" class="recipeImage" />

          <div>{recipe.title}</div>
          <h3>Ingredients</h3>
          {recipe.extendedIngredients.map(ingredient => {
            return <p>{ingredient.original}</p>;
          })}
          <h3>Directions</h3>
          {instructions.map(instruction => {
            return <p>{instruction.trim()}</p>;
          })}
        </div>
      ) : null}
    </div>
  );
};

export default ViewRecipe;
