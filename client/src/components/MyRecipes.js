import React, { useEffect, useContext } from "react";
import axios from "axios";
import { RecipeContext } from "../contexts/RecipeContext";
import Recipe from "./Recipe";
import { Link } from "react-router-dom";

const MyRecipes = props => {
  const { myRecipes, setMyRecipes, clickRegister } = useContext(RecipeContext);
  console.log("clickRegister is: ", clickRegister);

  useEffect(() => {
    let promises = [];
    promises.push(
      axios.get(`${process.env.REACT_APP_DB}/recipes`).then(result => {
        setMyRecipes(result.data);
      })
    );
    promises.push(
      axios
        .get(
          `https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q=chicken&app_id=${process.env.REACT_APP_RECIPEDB_ID}&app_key=${process.env.REACT_APP_RECIPEDB_APPKEY}`
        )
        .then(response => {
          console.log("response is: ", response);
        })
    );

    axios.all(promises);
    // axios.get(`${process.env.REACT_APP_DB}/recipes`).then(result => {
    //   setRecipes(result.data);
    //   axios
    //     .get(
    //       `https://api.edamam.com/search?q=chicken&app_id=78f37f90&app_key=b409dd5a216b52e6fe1aa065238feb55`
    //     )
    //     .then(response => {
    //       console.log("response is: ", response);
    //     });
    // });
  }, []);
  return (
    <div className="cards">
      {myRecipes.map((recipe, i) => {
        return (
          <Link to={`/recipe/${i}`}>
            <Recipe recipe={recipe} />
          </Link>

          // <Link to={`/recipe/${recipe.name}`}>
          //   <Recipe recipe={recipe} />
          // </Link>
        );
      })}
      {clickRegister ? <div>Hi</div> : null}
    </div>
  );
};

export default MyRecipes;
