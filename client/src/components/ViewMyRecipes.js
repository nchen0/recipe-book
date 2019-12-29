import React, { useContext } from "react";
import { RecipeContext } from "../contexts/RecipeContext";
import DeleteModal from "./forms/DeleteModal";
import { Link } from "react-router-dom";

const ViewMyRecipes = () => {
  const { myRecipes } = useContext(RecipeContext);
  let id = Number(window.location.pathname.split("/")[2]);
  const myRecipe = myRecipes[id];
  console.log("myRecipe is: ", myRecipe);
  let directionsArr = myRecipe.directions.split(".").filter(direction => direction !== "");
  let ingredientsArr = myRecipe.ingredients.split(",");
  console.log("directionsArr is: ", directionsArr);
  return (
    <div>
      <img
        src={myRecipe.pictureURL}
        height="225px"
        width="400px"
        class="recipeImage"
        alt="placeholder"
      />
      <div class="recipe-text">
        <h1 class="recipe-title">{myRecipe.name}</h1>
        <li>Serves: {myRecipe.servings}</li>
        {/* <li>Dish Type: {myRecipe.dishTypes[0]}</li> */}
        <li>
          <a href={myRecipe.sourceUrl}>Source</a>
        </li>
        <button class="btn btn-secondary">
          <Link class="btn btn-secondary" to={"/edit"}>
            Edit
          </Link>
        </button>
        <button class="btn btn-danger" data-toggle="modal" data-target="#deleteModal">
          Delete
        </button>
        <hr />
        <h4 class="ingredients-title">Ingredients</h4>
      </div>
      <ul>
        {ingredientsArr.map(ingredient => {
          return <li>{ingredient}</li>;
        })}
      </ul>
      {/* <div>{myRecipe.ingredients}</div> */}
      <h4 class="directions-title">Directions</h4>
      {directionsArr.map((direction, i) => {
        return (
          <div>
            {i + 1}. {direction}
          </div>
        );
      })}
      {/* <div>{myRecipe.directions}</div> */}
      {/* Delete Modal goes below */}
      <DeleteModal myRecipe={myRecipe} />
    </div>
  );
};

export default ViewMyRecipes;
