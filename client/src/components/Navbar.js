import React, { useContext, useEffect, useState } from "react";
import LoginModal from "./forms/LoginModal";
import { AuthContext } from "../contexts/AuthContext";
import { Link } from "react-router-dom";
import { RecipeContext } from "../contexts/RecipeContext";
import axios from "axios";

const Navbar = () => {
  let loggedIn = localStorage.getItem("username");
  const { loginData, setLogin, clickRegister, setClickRegister } = useContext(AuthContext);
  const { recipes, setRecipes, setSearch } = useContext(RecipeContext);
  const [query, setQuery] = useState("");

  const toggleLogin = () => {
    setClickRegister(false);
  };

  const logout = () => {
    setLogin({ loggedIn: false });
    localStorage.removeItem("username");
  };

  useEffect(() => {
    if (localStorage.getItem("username")) {
      setLogin({ loggedIn: true });
    }
  }, [loginData.loggedIn]);

  const inputQuery = e => {
    setQuery(e.target.value);
  };

  const search = e => {
    e.preventDefault();
    setSearch(true);
    axios
      .get(
        `${process.env.REACT_APP_API}/recipes/search?query=${query}&number=10&apiKey=${process.env.REACT_APP_RECIPESDB_APPKEY}`
      )
      .then(response => {
        setRecipes(response.data.results);
      });
  };
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <Link class="navbar-brand" to={"/"}>
        <img src="../img/logo2.png" height="75px" width="200px" />
      </Link>
      <Link class="navbar-brand center-logo" to={"/"}>
        <img src="../img/center-logo.png" />
      </Link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav navbar2">
          <li class="nav-item active">
            <Link class="nav-link " to={"/"}>
              Home <span class="sr-only">(current)</span>
            </Link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" data-toggle="modal" data-target="#exampleModal">
              Login/Register
            </a>
          </li>
          <li class="nav-item">
            <Link class="nav-link " to={"/my-recipes"}>
              My Recipes
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to={"/add"}>
              Add
            </Link>
          </li>
        </ul>
      </div>
      {/* {loginData.loggedIn ?  */}
      {/* // <div class="dropdown">
        //   <img */}
      {/* //     class="dropdown-toggle"
        //     id="dropdownMenuButton"
        //     data-toggle="dropdown"
        //     aria-haspopup="true"
        //     aria-expanded="false"
        //     src="../img/login.png"
        //   ></img> */}
      {/* //   <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        //     <a class="dropdown-item" href="#" data-toggle="modal" data-target="#exampleModal">
        //       Login
        //     </a>
        //     <a class="dropdown-item" href="#" data-toggle="modal" data-target="#exampleModal">
        //       Register
        //     </a>
        //     <Link class="dropdown-item" to={"/my-recipes"}>
        //       My Recipes
        //     </Link>
        //     <Link class="dropdown-item" to={"/add"}>
        //       Add
        //     </Link>
        //   </div>
        // </div> */}
      <ul class="right-nav">
        <li class="nav-item right-nav-item">
          <Link class="nav-link " to={"/add"}>
            Add
          </Link>
        </li>
        <li class="nav-item right-nav-item">
          <Link class="nav-link " to={"/my-recipes"}>
            My Recipes
          </Link>
        </li>
        <li class="nav-item right-nav-item">
          {loginData.loggedIn ? (
            // <img
            //   src="../img/logout.png"
            //   height="75px"
            //   width="200px"
            //   onClick={logout}
            //   class="dropdown-toggle"
            // />

            <div class="dropdown">
              <img
                class="dropdown-toggle"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                src="../img/logout.png"
              ></img>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">
                  {localStorage.getItem("username")}
                </a>
                <hr />
                <Link class="dropdown-item" onClick={logout} to={"/"}>
                  Logout
                </Link>
              </div>
            </div>
          ) : (
            <img
              class="dropdown-toggle"
              id="dropdownMenuButton"
              aria-haspopup="true"
              aria-expanded="false"
              src="../img/login.png"
              data-toggle="modal"
              data-target="#exampleModal"
            ></img>
          )}
        </li>
      </ul>
      <LoginModal />
    </nav>
  );
};

export default Navbar;
