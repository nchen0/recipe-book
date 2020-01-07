import React, { useContext, useEffect } from "react";
import { RecipeContext } from "../contexts/RecipeContext";
import DeleteModal from "./forms/DeleteModal";
import { Link } from "react-router-dom";
import axios from "axios";

const ViewMyRecipes = () => {
  let DB = process.env.REACT_APP_DB || "http://localhost:8000";
  let directionsArr = [];
  let ingredientsArr = [];
  const { myRecipes, setMyRecipes } = useContext(RecipeContext);
  useEffect(() => {
    axios.get(`${DB}/recipes`).then(result => {
      let user = localStorage.getItem("username");
      let recipes = result.data.filter(recipe => recipe.owner === user);
      setMyRecipes(recipes);
    });
  }, []);
  console.log("myRecipes: ", myRecipes);

  let id = Number(window.location.pathname.split("/")[2]);
  const myRecipe = myRecipes[id];

  if (myRecipe) {
    directionsArr = myRecipe.directions.split(".").filter(direction => direction !== "");
    ingredientsArr = myRecipe.ingredients.split(",");
    return (
      <div class="container view-recipe">
        <img
          src={myRecipe.pictureURL}
          height="450px"
          width="800px"
          class="recipeImage"
          alt="placeholder"
        />
        <div class="recipe-text">
          <h1 class="recipe-title">{myRecipe.name}</h1>
          {myRecipe.servings ? <li>Serves: {myRecipe.servings}</li> : null}
          {/* <li>Dish Type: {myRecipe.dishTypes[0]}</li> */}
          {myRecipe.sourceUrl ? (
            <li>
              <a href={myRecipe.sourceUrl}>Source</a>
            </li>
          ) : null}
          <Link class="btn btn-secondary edit-button" to={{ pathname: "/edit", id }}>
            <button class="btn btn-secondary">Edit</button>
          </Link>

          <button
            class="btn btn-danger delete-button"
            data-toggle="modal"
            data-target="#deleteModal"
          >
            Delete
          </button>
          <hr />
          <h4 class="ingredients-title">Ingredients</h4>
          {ingredientsArr.map(ingredient => {
            return <p>{ingredient}</p>;
          })}
          <h4 class="directions-title">Directions</h4>
          {directionsArr.map((direction, i) => {
            return (
              <div>
                {i + 1}. {direction}
              </div>
            );
          })}
        </div>

        {/* <div>{myRecipe.ingredients}</div> */}

        {/* <div>{myRecipe.directions}</div> */}
        {/* Delete Modal goes below */}
        <DeleteModal myRecipe={myRecipe} />
      </div>
    );
  } else {
    return null;
  }
};

export default ViewMyRecipes;
