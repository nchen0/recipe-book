import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

const EditRecipe = () => {
  const saveRecipe = () => {};

  const inputValue = () => {};
  return (
    <div class="words">
      <div class="addTitle">
        <p class="titleLabel label">Recipe Title</p>
        <input
          class="titleInput"
          type="text"
          name="name"
          placeholder="Add a title"
          onChange={inputValue}
        />
      </div>
      <div class="addIngredients">
        <p class="label">Ingredients</p>
        <textarea
          class="ingredientsInput"
          placeholder="Put each ingredient on its own line."
          name="ingredients"
          onChange={inputValue}
          type="text"
        />
      </div>
      <div class="addDirections">
        <p class="label">Directions</p>
        <textarea
          class="directionsInput"
          placeholder="Put each step on its own line."
          onChange={inputValue}
          name="directions"
        />
      </div>
      <div class="buttons">
        <button class="btn btn-success" onClick={saveRecipe}>
          Save
        </button>
        <Link class="btn btn-secondary" to={"/my-recipes"}>
          Cancel
        </Link>
      </div>
    </div>
  );
};

export default EditRecipe;
