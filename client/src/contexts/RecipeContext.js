import React, { createContext, useState } from "react";

export const RecipeContext = createContext();

const RecipeContextProvider = props => {
  const [myRecipes, setMyRecipes] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState(false);

  return (
    <RecipeContext.Provider
      value={{ recipes, setRecipes, myRecipes, setMyRecipes, search, setSearch }}
    >
      {props.children}
    </RecipeContext.Provider>
  );
};

export default RecipeContextProvider;
