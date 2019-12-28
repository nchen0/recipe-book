import React, { useContext, useEffect, useState } from "react";
import { RecipeContext } from "../contexts/RecipeContext";
import axios from "axios";
import "../styles/css/ViewRecipe.css";

const ViewRecipe = () => {
  let recipe;
  const { recipes, setRecipes, search } = useContext(RecipeContext);
  const [individualRecipe, setIndividualRecipe] = useState("");
  let loggedIn = localStorage.getItem("username");

  // Take care of refreshing the page.
  useEffect(() => {
    window.scrollTo(0, 0);
    if (!recipes.length) {
      axios
        .get(
          `${process.env.REACT_APP_API}/recipes/random?number=12&apiKey=${process.env.REACT_APP_RECIPESDB_APPKEY}`
        )
        .then(response => {
          setRecipes(response.data.recipes);
        });
    } else if (search) {
      let recipeId = recipes[Number(window.location.pathname.split("/")[2])].id;
      axios
        .get(
          `${process.env.REACT_APP_API}/recipes/${recipeId}/information?includeNutrition=false&apiKey=${process.env.REACT_APP_RECIPESDB_APPKEY}`
        )
        .then(response => {
          setIndividualRecipe(response.data);
        });
    }
  }, []);

  let id = Number(window.location.pathname.split("/")[2]);
  recipe = recipes[id];
  if (search) {
    recipe = "";
  }
  if (individualRecipe) {
    recipe = individualRecipe;
  }
  let instructions = "";
  if (recipe) {
    instructions = recipe.instructions.split(".");
  }

  const saveRecipe = e => {
    e.preventDefault();
    let DB = process.env.REACT_APP_DB || "http://localhost:8000";
    let ingredients = "";
    recipe.extendedIngredients.forEach(ingredient => {
      ingredients += `${ingredient.name}.`;
    });
    let directions = "";
    recipe.analyzedInstructions[0].steps.forEach(direction => {
      directions += `${direction.step}.`;
    });
    let newRecipe = {
      name: recipe.title,
      sourceURL: recipe.sourceUrl,
      ingredients,
      pictureURL: recipe.image,
      directions,
      owner: localStorage.getItem("username")
    };

    axios.post(`${DB}/recipes/add`, newRecipe).then(response => {
      console.log("response: ", response);
    });
  };
  console.log("recipe: ", recipe);
  return (
    <div class="container view-recipe">
      {recipe ? (
        <div>
          <img
            src={recipe.image}
            height="450px"
            width="800px"
            class="recipeImage"
            alt={recipe.name}
          />
          <div class="recipe-text">
            <h1 class="recipe-title">{recipe.title}</h1>
            <li>Serves: {recipe.servings}</li>
            <li>Dish Type: {recipe.dishTypes[0]}</li>
            <li>
              <a href={recipe.sourceUrl}>Source</a>
            </li>
            <hr />
            <h4 class="ingredients-title">Ingredients</h4>
            {recipe.extendedIngredients.map(ingredient => {
              return <p>{ingredient.original}</p>;
            })}
            <h4 class="directions-title">Directions</h4>
            {recipe.analyzedInstructions[0].steps.map(instruction => {
              return (
                <div class="specific-instruction">
                  <span>{instruction.number}. </span>
                  <span>{instruction.step}</span>
                </div>
              );
            })}
            {loggedIn ? (
              <button class="btn btn-success" onClick={saveRecipe}>
                Save Recipe
              </button>
            ) : null}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ViewRecipe;
