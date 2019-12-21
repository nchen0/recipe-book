import React, { useEffect, useContext } from "react";
import axios from "axios";
import { RecipeContext } from "../contexts/RecipeContext";
import Recipe from "./Recipe";
import { Link } from "react-router-dom";

const Recipes = () => {
  const { recipes, setRecipes, search } = useContext(RecipeContext);
  useEffect(() => {
    if (!recipes.length) {
      axios
        .get(
          `${process.env.REACT_APP_API}/recipes/random?number=12&apiKey=${process.env.REACT_APP_RECIPESDB_APPKEY}`
        )
        .then(response => {
          setRecipes(response.data.recipes);
        });
    }
  }, []);

  return (
    <div className="cards container">
      {recipes.map((recipe, i) => {
        return (
          <Link style={{ textDecoration: "none" }} to={`/recipe/${i}`}>
            <Recipe recipe={recipe} />
          </Link>
        );
      })}
    </div>
  );
};

export default Recipes;
