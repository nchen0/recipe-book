import React, { Component, createContext, useState } from "react";

export const RecipeContext = createContext();

const RecipeContextProvider = props => {
  const [recipes, setRecipes] = useState([]);
  // const addRecipes = recipe => {
  //   setRecipes([...recipes, recipe]);
  // };

  return (
    <RecipeContext.Provider value={{ recipes, setRecipes }}>
      {props.children}
    </RecipeContext.Provider>
  );
};

export default RecipeContextProvider;