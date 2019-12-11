import React, { useContext } from "react";
import { RecipeContext } from "../../contexts/RecipeContext";

const LoginModal = () => {
  const { clickRegister, setClickRegister } = useContext(RecipeContext);
  const toggleRegister = () => {
    setClickRegister(true);
  };

  const toggleLogin = () => {
    setClickRegister(false);
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
                <input class="form-control registrationInput" type="text" placeholder="Email" />
                <input class="form-control registrationInput" type="text" placeholder="Password" />
                <input
                  class="form-control registrationInput"
                  type="text"
                  placeholder="Verify Password"
                />

                <button class="btn btn-success registerButton">Create Account</button>
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
