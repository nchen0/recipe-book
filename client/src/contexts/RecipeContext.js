import React, { Component, createContext, useState } from "react";

export const RecipeContext = createContext();

const RecipeContextProvider = props => {
  const [myRecipes, setMyRecipes] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [clickRegister, setClickRegister] = useState(false);

  return (
    <RecipeContext.Provider
      value={{ recipes, setRecipes, myRecipes, setMyRecipes, clickRegister, setClickRegister }}
    >
      {props.children}
    </RecipeContext.Provider>
  );
};

export default RecipeContextProvider;
