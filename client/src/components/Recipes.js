import React, { useEffect, useContext } from "react";
import axios from "axios";
import { RecipeContext } from "../contexts/RecipeContext";
import Recipe from "./Recipe";
import { Link } from "react-router-dom";

const Recipes = props => {
  const { recipes, setRecipes } = useContext(RecipeContext);
  useEffect(() => {
    if (!recipes.length) {
      axios
        .get(
          `https://cors-anywhere.herokuapp.com/https://api.spoonacular.com/recipes/random?number=10&apiKey=${process.env.REACT_APP_RECIPESDB_APPKEY}`
        )
        .then(response => {
          console.log("response is: ", response);
          setRecipes(response.data.recipes);
        });
    }
  }, []);

  return (
    <div className="cards">
      {recipes.map((recipe, i) => {
        return (
          <Link to={`/recipe/${i}`}>
            <Recipe recipe={recipe} />
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
