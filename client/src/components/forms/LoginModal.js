import React, { useContext, useState } from "react";
import { RecipeContext } from "../../contexts/RecipeContext";
import axios from "axios";

const LoginModal = () => {
  const { clickRegister, setClickRegister } = useContext(RecipeContext);
  const [input, setInput] = useState({});
  const toggleRegister = () => {
    setClickRegister(true);
  };

  const toggleLogin = () => {
    setClickRegister(false);
  };

  const inputValue = e => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitAccount = () => {
    if (clickRegister) {
      // Creating new account, so will hit the register api:
      const user = input;
      delete user.verifyPassword;
      axios.post(`${process.env.REACT_APP_DB}/auth/register`, user).then(response => {
        console.log("response: ", response);
      });
    } else {
      axios.post(`${process.env.REACT_APP_DB}/auth/login`);
    }
  };

  const toggleRegisterLogin = () => {
    setInput({});
  };

  return (
    <div>
      {clickRegister ? (
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Register
                </h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <input
                  class="form-control registrationInput"
                  onChange={inputValue}
                  type="text"
                  placeholder="Email"
                  name="username"
                />
                <input
                  class="form-control registrationInput"
                  onChange={inputValue}
                  name="password"
                  type="text"
                  placeholder="Password"
                />
                <input
                  class="form-control registrationInput"
                  type="text"
                  onChange={inputValue}
                  placeholder="Verify Password"
                  name="verifyPassword"
                />

                <button class="btn btn-success registerButton" onClick={submitAccount}>
                  Create Account
                </button>
                <p class="registrationToggleText">Or sign up with</p>
                <button class="googleButton">
                  <img
                    src="https://d2k1ftgv7pobq7.cloudfront.net/meta/c/p/res/images/8215f6659adc202403198fef903a447e/sign-in-with-google.svg"
                    alt="googlebutton"
                  />
                  <span className="googleText"> Google</span>
                </button>

                <p class="alreadyToggle">
                  Already a member?{" "}
                  <span class="registerToggle" onClick={toggleLogin}>
                    Login Now
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Login
                </h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <input class="form-control loginInput" type="text" placeholder="Email" />
                <input class="form-control loginInput" type="text" placeholder="Password" />
                <button class="btn btn-success loginButton">Login</button>
                <p class="loginToggleText">Or login with</p>

                <button class="googleButton">
                  <img
                    src="https://d2k1ftgv7pobq7.cloudfront.net/meta/c/p/res/images/8215f6659adc202403198fef903a447e/sign-in-with-google.svg"
                    alt="googlebutton"
                  />
                  <span className="googleText"> Google</span>
                </button>

                <p class="alreadyToggle loginMember">
                  Not a member?{" "}
                  <span class="loginToggle" onClick={toggleRegister}>
                    Sign up Now
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginModal;
