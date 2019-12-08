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
                  Login
                </h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <input class="form-control" type="text" placeholder="Email" />
                <input class="form-control" type="text" placeholder="Password" />
                <button class="btn btn-success">Login</button>
                <p>Or sign up with</p>
                <img
                  src="https://d2k1ftgv7pobq7.cloudfront.net/meta/c/p/res/images/8215f6659adc202403198fef903a447e/sign-in-with-google.svg"
                  alt="googlebutton"
                />
                <span className="google-text"> Google</span>
                <p>
                  Already a member? <span onClick={toggleLogin}>Login Now</span>
                </p>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">
                  Close
                </button>
                <button type="button" class="btn btn-primary">
                  Save changes
                </button>
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
                <input class="form-control" type="text" placeholder="Email" />
                <input class="form-control" type="text" placeholder="Password" />
                <button class="btn btn-success">Login</button>
                <p>Or login with</p>
                <img
                  src="https://d2k1ftgv7pobq7.cloudfront.net/meta/c/p/res/images/8215f6659adc202403198fef903a447e/sign-in-with-google.svg"
                  alt="googlebutton"
                />
                <span className="google-text"> Google</span>
                <p>
                  Not a member? <span onClick={toggleRegister}>Sign up Now</span>
                </p>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">
                  Close
                </button>
                <button type="button" class="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginModal;
