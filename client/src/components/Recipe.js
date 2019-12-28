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
  const { search } = useContext(RecipeContext);
  const imageUrl = `https://spoonacular.com/recipeImages/${recipe.image}`;
  console.log("recipe: ", recipe);
  return (
    <div className="card">
      {search ? (
        <img src={imageUrl} height="225px" width="300px" class="recipeImage" alt="placeholder" />
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
          return <span class="tag">{cuisine}</span>;
        })}
        {recipe.dishTypes.map(dish => {
          return <span class="tag">{dish}</span>;
        })}
      </div>
    </div>
  );
};

export default Recipe;
