import React from "react";

const MyRecipe = props => {
  console.log("props: ", props.recipe.pictureURL);
  return (
    <div className="card">
      <img
        src={props.recipe.pictureURL}
        height="250px"
        width="425px"
        class="recipeImage"
        alt="placeholder"
      />
      <div class="card-title">{props.recipe.name}</div>
      {/* <div>{props.recipe.ingredients}</div> */}
    </div>
  );
};

export default MyRecipe;
