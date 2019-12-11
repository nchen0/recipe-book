import React from "react";
import "./App.css";
import "./styles/css/Recipe.css";
import "./styles/css/AddRecipe.css";
import "./styles/css/LoginModal.css";
import Navbar from "./components/Navbar";
import RecipeContextProvider from "./contexts/RecipeContext";
import Recipes from "./components/Recipes";
import Recipe from "./components/Recipe";
import { Route } from "react-router-dom";
import ViewRecipe from "./components/ViewRecipe";
import AddRecipe from "./components/AddRecipe";
import AuthContextProvider from "./contexts/AuthContext";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <RecipeContextProvider>
          <Navbar />
          <Route exact path="/" component={Recipes} />
          <Route exact path="/recipe/:id" component={ViewRecipe} />
        </RecipeContextProvider>
      </AuthContextProvider>
      <Route exact path="/add" component={AddRecipe} />
    </div>
  );
}

export default App;
