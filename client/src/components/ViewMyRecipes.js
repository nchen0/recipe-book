import React, { useContext, useEffect } from "react";
import { RecipeContext } from "../contexts/RecipeContext";
import DeleteModal from "./forms/DeleteModal";
import { Link } from "react-router-dom";

const ViewMyRecipes = () => {
  const { myRecipes } = useContext(RecipeContext);
  let id = Number(window.location.pathname.split("/")[2]);
  const myRecipe = myRecipes[id];
  let directionsArr = myRecipe.directions.split(".").filter(direction => direction !== "");
  let ingredientsArr = myRecipe.ingredients.split(",");

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  //   console.log("myRecipes: ", myRecipes);
  // }, []);
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

        <button class="btn btn-danger delete-button" data-toggle="modal" data-target="#deleteModal">
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
};

export default ViewMyRecipes;
