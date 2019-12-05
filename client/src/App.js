import React from "react";
import "./App.css";
import "./styles/css/Recipe.css";
import Navbar from "./components/Navbar";
import RecipeContextProvider from "./contexts/RecipeContext";
import Recipes from "./components/Recipes";
import Recipe from "./components/Recipe";
import { Route } from "react-router-dom";
import ViewRecipe from "./components/ViewRecipe";
import AddRecipe from "./components/AddRecipe";

function App() {
  return (
    <div className="App">
      <RecipeContextProvider>
        <Navbar />
        <Route exact path="/" component={Recipes} />
        <Route exact path="/recipe/:id" component={ViewRecipe} />
      </RecipeContextProvider>
      <Route exact path="/add" component={AddRecipe} />
    </div>
  );
}

export default App;
