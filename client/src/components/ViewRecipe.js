import React, { useContext } from "react";
import { RecipeContext } from "../contexts/RecipeContext";

const ViewRecipe = () => {
  const { recipes } = useContext(RecipeContext);
  let id = Number(window.location.pathname.split("/")[2]);
  const recipe = recipes[id];
  return (
    <div>
      <div>{recipe.name}</div>
      <div>{recipe.ingredients}</div>
    </div>
  );
};

export default ViewRecipe;
