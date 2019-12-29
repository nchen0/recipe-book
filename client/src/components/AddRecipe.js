import React, { useState } from "react";
import { Link } from "react-router-dom";
import ImageUploader from "react-images-upload";
import firebase from "./OAuth/firebase";
import axios from "axios";

const AddRecipe = () => {
  let DB = process.env.REACT_APP_DB || "http://localhost:8000";
  const ref = firebase.storage().ref();
  const [useLink, setLink] = useState(false);
  const [imageUrl, setUrl] = useState("");
  const [input, setInput] = useState({});

  const setUseLink = () => {
    setLink(true);
  };

  const inputValue = e => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const fileChangedHandler = e => {
    const file = e[0];
    const name = +new Date() + "-" + file.name;
    const metadata = { contentType: file.type };

    const task = ref.child(name).put(file, metadata);
    task.then(snapshot => snapshot.ref.getDownloadURL()).then(url => setUrl(url));
  };

  const saveRecipe = e => {
    e.preventDefault();
    const recipe = input;
    recipe.pictureURL = imageUrl;
    recipe.owner = localStorage.getItem("username");
    axios.post(`${DB}/recipes/add`, recipe).then(response => {
      console.log("response: ", response);
    });
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
            <ImageUploader
              withIcon={true}
              buttonText="Add a Photo"
              onChange={fileChangedHandler}
              imgExtension={[".jpg", ".gif", ".png", ".gif", ".jpeg"]}
              maxFileSize={5242880}
            />
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

          <Link class="cancel-button" to={"/"}>
            <button class="btn btn-secondary">Cancel</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AddRecipe;
