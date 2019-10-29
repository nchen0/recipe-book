import React, { useEffect, useContext } from "react";
import axios from "axios";
import { RecipeContext } from "../contexts/RecipeContext";
import Recipe from "./Recipe";
import { Link } from "react-router-dom";

const Recipes = () => {
  const { recipes, setRecipes } = useContext(RecipeContext);
  useEffect(() => {
    axios.get("http://localhost:8000/recipes").then(result => {
      setRecipes(result.data);
    });
  }, []);
  return (
    <div>
      {recipes.map((recipe, i) => {
        return (
          <Link to={`/recipe/${i}`}>
            <div>{recipe.name}</div>
          </Link>

          // <Link to={`/recipe/${recipe.name}`}>
          //   <Recipe recipe={recipe} />
          // </Link>
        );
      })}
    </div>
  );
};

export default Recipes;
