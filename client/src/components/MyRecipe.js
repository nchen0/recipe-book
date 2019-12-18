import React from "react";

const MyRecipe = props => {
  console.log("props: ", props.recipe.pictureURL);
  return (
    <div className="card">
      <img
        src={props.recipe.pictureURL}
        height="225px"
        width="400px"
        class="recipeImage"
        alt="placeholder"
      />
      <div>{props.recipe.name}</div>
      <div>{props.recipe.ingredients}</div>
    </div>
  );
};

export default MyRecipe;
