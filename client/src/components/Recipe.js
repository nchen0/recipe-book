import React, { useContext } from "react";
import { RecipeContext } from "../contexts/RecipeContext";

const Recipe = ({ recipe }) => {
  const getRandomColor = () => {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  const spanStyle = {
    backgroundColor: getRandomColor()
  };
  const colorObj = {
    "side dish": "red",
    Mexican: "blue",
    vegetarian: "green",
    brunch: "rgb(240, 81, 55)",
    "gluten free": "rgb(183, 149, 158)",
    "main course": "rgb(96, 162, 196)",
    European: "rgb(80, 109, 213)",
    Greek: "rgb(240, 81, 55)",
    salad: "light-green",
    "Eastern European": "rgb(75, 96, 107)",
    lunch: "orange",
    Irish: "dark red",
    antipasti: "teal",
    starter: "rgb(214, 167, 145)",
    snack: "rgb(158, 92, 62)",
    appetizer: "rgb(62, 88, 158)",
    antipasto: "rgb(156, 158, 62)",
    "hor d'oeuvre": "rgb(77, 29, 51)",
    dinner: "rgb(143, 31, 83)",
    "main dish": "rgb(132, 37, 161)",
    Chinese: "rgb(175, 132, 67)",
    Asian: "rgb(47, 87, 43)",
    Indian: "rgb(124, 38, 38)"
  };
  const { search } = useContext(RecipeContext);
  const imageUrl = `https://spoonacular.com/recipeImages/${recipe.image}`;
  return (
    <div className="card">
      {search ? (
        <img
          src={recipe.image}
          height="225px"
          width="300px"
          class="recipeImage"
          alt="placeholder"
        />
      ) : (
        <img
          src={recipe.image}
          height="250px"
          width="400px"
          class="recipeImage"
          alt="placeholder"
        />
      )}
      <div class="card-title">{recipe.title}</div>
      <div class="tags">
        {recipe.vegetarian ? <span class="tag">Vegetarian</span> : null}
        {recipe.glutenFree ? <span class="tag">Gluten Free</span> : null}
        {recipe.cuisines.map(cuisine => {
          return (
            <span class="tag" style={{ backgroundColor: colorObj[cuisine] }}>
              {cuisine}
            </span>
          );
        })}
        {recipe.dishTypes.map(dish => {
          return (
            <span class="tag" style={{ backgroundColor: colorObj[dish] }}>
              {dish}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Recipe;
