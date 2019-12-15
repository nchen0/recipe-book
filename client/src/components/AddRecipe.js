import React, { useState } from "react";
import Uploader from "./Uploader";
import { Link } from "react-router-dom";

const AddRecipe = () => {
  const [useLink, setLink] = useState(false);

  const setUseLink = () => {
    setLink(true);
  };

  return (
    <div class="container add">
      <div class="picture">
        {useLink ? (
          <div class="addPictureLink">
            <p class="addPictureLabel">URL</p>
            <input class="addPictureInput" placeholder="Add Picture URL" />
          </div>
        ) : (
          <div class="useImage">
            <Uploader />
            <p>
              or use a{" "}
              <span onClick={setUseLink} class="useLink">
                link instead
              </span>
              .
            </p>
          </div>
        )}
      </div>
      <div class="words">
        <div class="addTitle">
          <p class="titleLabel label">Recipe Title</p>
          <input class="titleInput" />
        </div>
        <div class="addDescription">
          <p class="descriptionLabel label">Description</p>
          <input class="descriptionInput" />
        </div>
        <div class="addIngredients">
          <p class="label">Ingredients</p>
          <textarea class="ingredientsInput" placeholder="Put each ingredient on its own line." />
        </div>
        <div class="addDirections">
          <p class="label">Directions</p>
          <textarea class="directionsInput" placeholder="Put each step on its own line." />
        </div>

        <div class="radios">
          <input type="radio" value="public" name="publicprivate" /> Private Recipe
          <input type="radio" value="private" name="publicprivate" /> Public Recipe
        </div>
        <div class="buttons">
          <button class="btn btn-success">Save</button>
          <Link class="btn btn-secondary" to={"/"}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AddRecipe;
