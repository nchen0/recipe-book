import React, { useContext } from "react";
import { Route } from "react-router-dom";
import { RecipeContext } from "../contexts/RecipeContext";

const Recipe = props => {
  // const { recipes, setRecipes } = useContext(RecipeContext);
  // let id = window.location.pathname.split("/");
  // id = Number(id[2]);
  // console.log("recipes: ", recipes);
  // console.log(id);
  // console.log("props is: ", recipes);
  //   return <div>{props.recipe.name}</div>;
  return (
    // <Route path={`/recipe/${props.recipe.name}`}>
    //   <div>{props.recipe.name}</div>
    // </Route>
    <div>
      <div>{props.recipe.name}</div>
    </div>
  );
};

export default Recipe;
