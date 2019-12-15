import React, { useEffect, useContext } from "react";
import axios from "axios";
import { RecipeContext } from "../contexts/RecipeContext";
import { Link } from "react-router-dom";
import MyRecipe from "./MyRecipe";

const MyRecipes = props => {
  const { myRecipes, setMyRecipes } = useContext(RecipeContext);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_DB}/recipes`).then(result => {
      setMyRecipes(result.data);
    });
  }, []);
  return (
    <div className="cards">
      {myRecipes.map((recipe, i) => {
        return (
          <Link to={`/my-recipe/${i}`}>
            <MyRecipe recipe={recipe} />
          </Link>
        );
      })}
    </div>
  );
};

export default MyRecipes;
