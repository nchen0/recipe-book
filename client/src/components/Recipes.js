import React, { useEffect, useContext, useState } from "react";
import axios from "axios";
import { RecipeContext } from "../contexts/RecipeContext";
import Recipe from "./Recipe";
import { Link } from "react-router-dom";
import { LoadingOverlay, Loader } from "react-overlay-loader";

const Recipes = () => {
  const { recipes, setRecipes, setSearch } = useContext(RecipeContext);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

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

  const inputQuery = e => {
    setQuery(e.target.value);
  };

  const search = e => {
    e.preventDefault();
    setLoading(true);
    setSearch(true);
    axios
      .get(
        `${process.env.REACT_APP_API}/recipes/random?number=12&tags=${query}&number=12&apiKey=${process.env.REACT_APP_RECIPESDB_APPKEY}`
      )
      .then(response => {
        setRecipes(response.data.recipes);
        setLoading(false);
      });
  };

  return (
    <div class="my-container">
      <img class="landingpage-pic" src="../img/main-image.jpeg" />
      <div class="centered">
        <p>Need a Recipe?</p>
        <form onSubmit={search}>
          <input onChange={inputQuery}></input>
        </form>
      </div>

      <div className="cards container">
        {recipes.map((recipe, i) => {
          return (
            <Link style={{ textDecoration: "none" }} to={`/recipe/${i}`}>
              <Recipe recipe={recipe} />
            </Link>
          );
        })}
      </div>

      <Loader loading={loading} />
    </div>
  );
};

export default Recipes;
