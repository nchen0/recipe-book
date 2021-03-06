import React from "react";
import "./App.css";
import "./styles/css/Recipe.css";
import "./styles/css/AddRecipe.css";
import "./styles/css/LoginModal.css";
import "./styles/css/Navbar.css";
import "./styles/css/Navbar2.css";
import "./styles/css/EditRecipe.css";
import "./styles/css/Modal.css";
import Navbar from "./components/Navbar";
import RecipeContextProvider from "./contexts/RecipeContext";
import Recipes from "./components/Recipes";
import MyRecipes from "./components/MyRecipes";
import { Route } from "react-router-dom";
import AddRecipe from "./components/AddRecipe";
import AuthContextProvider from "./contexts/AuthContext";
import ViewMyRecipes from "./components/ViewMyRecipes";
import ViewRecipe from "./components/ViewRecipe";
import EditRecipe from "./components/EditRecipe";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <RecipeContextProvider>
          <Navbar />
          <Route exact path="/" component={Recipes} />
          <Route exact path="/recipe/:id" component={ViewRecipe} />
          <Route exact path="/my-recipes" component={MyRecipes} />
          <Route exact path="/my-recipe/:id" component={ViewMyRecipes} />
          <Route exact path="/edit" component={EditRecipe} />
        </RecipeContextProvider>
      </AuthContextProvider>
      <Route exact path="/add" component={AddRecipe} />
    </div>
  );
}

export default App;
