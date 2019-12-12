import React, { useEffect, useContext } from "react";
import axios from "axios";
import { RecipeContext } from "../contexts/RecipeContext";
import Recipe from "./Recipe";
import { Link } from "react-router-dom";

const Recipes = props => {
  const { recipes, setRecipes, clickRegister } = useContext(RecipeContext);
  console.log("clickRegister is: ", clickRegister);

  useEffect(() => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q=chicken&app_id=${process.env.REACT_APP_RECIPEDB_ID}&app_key=${process.env.REACT_APP_RECIPEDB_APPKEY}`
      )
      .then(response => {
        console.log("response is: ", response);
      });
  }, []);
  return (
    <div className="cards">
      {/* {recipes.map((recipe, i) => {
        return (
          <Link to={`/recipe/${i}`}>
            <Recipe recipe={recipe} />
          </Link>

          // <Link to={`/recipe/${recipe.name}`}>
          //   <Recipe recipe={recipe} />
          // </Link>
        );
      })} */}
      {clickRegister ? <div>Hi</div> : null}
    </div>
  );
};

export default Recipes;
