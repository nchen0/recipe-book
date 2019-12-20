import React, { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../contexts/AuthContext";
import { auth, provider } from "../OAuth/firebase";

const LoginModal = () => {
  let closeModalButton = document.querySelector(".close");
  const { clickRegister, setClickRegister } = useContext(AuthContext);
  const { loginData, setLogin } = useContext(AuthContext);
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

  const googleLogin = e => {
    e.preventDefault();
    auth.signInWithPopup(provider).then(result => {
      localStorage.setItem("username", result.user.email);
      closeModalButton.click();
    });
  };

  const submitAccount = () => {
    const user = input;
    delete user.verifyPassword;
    if (clickRegister) {
      // Creating new account, so will hit the register api:
      axios.post(`${process.env.REACT_APP_DB}/auth/register`, user).then(() => {
        setLogin({ ...loginData, loggedIn: true });
        closeModalButton.click();
        localStorage.setItem("username", user.username);
      });
    } else {
      axios
        .post(`${process.env.REACT_APP_DB}/auth/login`, user)
        .then(response => {
          setLogin({ ...loginData, loggedIn: true });
          closeModalButton.click();
          localStorage.setItem("username", user.username);
        })
        .catch(err => {
          console.log("error is: ", err);
        });
    }
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
                  type="password"
                  placeholder="Password"
                />
                <input
                  class="form-control registrationInput"
                  type="password"
                  onChange={inputValue}
                  placeholder="Verify Password"
                  name="verifyPassword"
                />

                <button class="btn btn-success registerButton" onClick={submitAccount}>
                  Create Account
                </button>
                <p class="registrationToggleText">Or sign up with</p>
                <button class="googleButton" onClick={googleLogin}>
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
                <input
                  class="form-control loginInput"
                  type="text"
                  onChange={inputValue}
                  name="username"
                  placeholder="Email"
                />
                <input
                  class="form-control loginInput"
                  type="password"
                  onChange={inputValue}
                  name="password"
                  placeholder="Password"
                />
                <button class="btn btn-success loginButton" onClick={submitAccount}>
                  Login
                </button>
                <p class="loginToggleText">Or login with</p>

                <button class="googleButton" onClick={googleLogin}>
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
