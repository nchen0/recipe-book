import React, { createContext, useState } from "react";

export const RecipeContext = createContext();

const RecipeContextProvider = props => {
  const [myRecipes, setMyRecipes] = useState([]);
  const [recipes, setRecipes] = useState([]);

  return (
    <RecipeContext.Provider value={{ recipes, setRecipes, myRecipes, setMyRecipes }}>
      {props.children}
    </RecipeContext.Provider>
  );
};

export default RecipeContextProvider;
