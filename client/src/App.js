import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import RecipeContextProvider from "./contexts/RecipeContext";
import Recipes from "./components/Recipes";

function App() {
  return (
    <div className="App">
      <Navbar />
      <RecipeContextProvider>
        <Recipes />
      </RecipeContextProvider>
    </div>
  );
}

export default App;
