import React, { useContext, useEffect } from "react";
import LoginModal from "./forms/LoginModal";
import { AuthContext } from "../contexts/AuthContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { loginData, setLogin } = useContext(AuthContext);

  const logout = () => {
    setLogin({ loggedIn: false });
    localStorage.removeItem("username");
  };

  useEffect(() => {
    if (localStorage.getItem("username")) {
      setLogin({ loggedIn: true });
    }
  }, []);

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <Link class="navbar-brand" to={"/"}>
        Recipe Book
      </Link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <Link class="nav-link" to={"/"}>
              Home <span class="sr-only">(current)</span>
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to={"/my-recipes"}>
              My Recipes
            </Link>
          </li>
          <li class="nav-item">
            {loginData.loggedIn ? (
              <Link class="nav-link" to={"#"} onClick={logout}>
                Logout
              </Link>
            ) : (
              <Link class="nav-link" to={"#"} data-toggle="modal" data-target="#exampleModal">
                Login/Register
              </Link>
            )}
          </li>
          <li class="nav-item">
            <Link class="nav-link" to={"/add"}>
              Add
            </Link>
          </li>
        </ul>

        <form class="form-inline my-2 my-lg-0">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
        <LoginModal />
      </div>
    </nav>
  );
};

export default Navbar;
