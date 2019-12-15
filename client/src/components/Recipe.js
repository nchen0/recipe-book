import React from "react";

const Recipe = ({ recipe }) => {
  return (
    <div className="card">
      <img src={recipe.image} height="225px" width="300px" class="recipeImage" alt="placeholder" />
      <div>{recipe.title}</div>
    </div>
  );
};

export default Recipe;
