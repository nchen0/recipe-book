import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import RecipeContextProvider from "./contexts/RecipeContext";
import Recipes from "./components/Recipes";
import Recipe from "./components/Recipe";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <RecipeContextProvider>
        <Navbar />
        <Route exact path="/" component={Recipes} />
      </RecipeContextProvider>
      <Route exact path="/recipe/:id" component={Recipe} />
    </div>
  );
}

export default App;
