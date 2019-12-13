import React, { useContext } from "react";
import { RecipeContext } from "../contexts/RecipeContext";

const ViewMyRecipes = () => {
  const { myRecipes } = useContext(RecipeContext);
  let id = Number(window.location.pathname.split("/")[2]);
  const myRecipe = myRecipes[id];
  return (
    <div>
      <div>{myRecipe.name}</div>
      <div>{myRecipe.ingredients}</div>
    </div>
  );
};

export default ViewMyRecipes;
