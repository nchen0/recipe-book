import React, { useContext, useEffect, useState } from "react";
import { RecipeContext } from "../contexts/RecipeContext";
import axios from "axios";

const ViewRecipe = () => {
  let recipe;
  const { recipes, setRecipes, search } = useContext(RecipeContext);
  const [individualRecipe, setIndividualRecipe] = useState("");
  const [random, setRandom] = useState(Math.random());
  const reRender = () => setRandom(Math.random());

  // Take care of refreshing the page.
  useEffect(() => {
    console.log("hello");
    if (!recipes.length) {
      axios
        .get(
          `${process.env.REACT_APP_API}/recipes/random?number=10&apiKey=${process.env.REACT_APP_RECIPESDB_APPKEY}`
        )
        .then(response => {
          setRecipes(response.data.recipes);
        });
    } else if (search) {
      let recipeId = recipes[Number(window.location.pathname.split("/")[2])].id;
      axios.get(`${process.env.REACT_APP_API}/recipes/${recipeId}/information?includeNutrition=false&apiKey=${process.env.REACT_APP_RECIPESDB_APPKEY}`).then(response => {
        setIndividualRecipe(response.data);
        console.log('individualRecipe: ', individualRecipe);
      })
    }
    // } else if (search) {
    //   axios
    //     .get(
    //       `${process.env.REACT_APP_API}/recipes/${recipe.id}/information?includeNutrition=false&apiKey=${process.env.REACT_APP_RECIPESDB_APPKEY}`
    //     )
    //     .then(response => {
    //       console.log("response2 here is: ", response);
    //       setIndividualRecipe(response.data);
    //     });
    // }
  }, []);

  let id = Number(window.location.pathname.split("/")[2]);
  recipe = recipes[id];
  // if (search) {
  //   axios
  //     .get(
  //       `${process.env.REACT_APP_API}/recipes/${recipe.id}/information?includeNutrition=false&apiKey=${process.env.REACT_APP_RECIPESDB_APPKEY}`
  //     )
  //     .then(response => {
  //       console.log("response33 here is: ", response);
  //       setIndividualRecipe(response.data);
  //       // reRender();
  //     });
  // }
  console.log("individual is: ", individualRecipe);
  if (search) {
    recipe = "";
  }
  if (individualRecipe) {
    console.log("individualRecipe");
    recipe = individualRecipe;
  }
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
      hello
    </div>
  );
};

export default ViewRecipe;
