import React from "react";

const MyRecipe = props => {
  return (
    <div className="card">
      <img
        src="https://images.unsplash.com/photo-1527976746453-f363eac4d889?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0d4eede870171d16f53977eddcc49d8d&auto=format&fit=crop&w=889&q=80"
        height="225px"
        width="400px"
        class="recipeImage"
        alt="placeholder"
      />
      <div>{props.recipe.name}</div>
      <div>{props.recipe.ingredients}</div>
    </div>
  );
};

export default MyRecipe;
