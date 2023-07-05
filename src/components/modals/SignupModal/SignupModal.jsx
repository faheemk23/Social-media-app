import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { AuthContext } from "../../../contexts/AuthContext";
import { DataContext } from "../../../contexts/DataContext";
import { signupHandler } from "../../../utilities/authUtilities";
import "./SignupModal.css";

export function SignupModal() {
  const [userDetail, setUserDetail] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const {
    dataState: { users },
  } = useContext(DataContext);
  const { setUser, setLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const signupFieldChangeHandler = (e) => {
    const fieldChanged = e.target.id;
    setUserDetail((prev) => ({ ...prev, [fieldChanged]: e.target.value }));
  };

  const valiateDetails = (userDetail, setErrorMessage) => {
    const res = Object.keys(userDetail).every((key) => {
      if (userDetail[key] === "") {
        const field = key === "confirmPassword" ? "confirm password" : key;
        setErrorMessage(`Please fill the ${field} field!`);
        return false;
      } else {
        return true;
      }
    });
    if (res) {
      if (users.some(({ username }) => username === userDetail.username)) {
        setErrorMessage("Username already taken!");
        return false;
      } else if (userDetail.password.length < 6) {
        setErrorMessage("Password should atleast be 6 characters!");
        return false;
      } else if (userDetail.password !== userDetail.confirmPassword) {
        setErrorMessage("Confirm password doesn't match!");
        return false;
      }
    }

    return res;
  };

  const handleBtnSignup = () => {
    if (valiateDetails(userDetail, setErrorMessage)) {
      signupHandler(userDetail, navigate, setLoggedIn, setUser);
    }
  };

  return (
    <div className="modal-container">
      <article className="signup-modal relative">
        <i
          className="fa-solid fa-xmark login-modal-close-icon pointer"
          onClick={() => navigate("/")}
        ></i>
        <div className="flex-center">
          {" "}
          <img
            className="nav-logo"
            src="https://ik.imagekit.io/faheem/Social-media/app-logo?updatedAt=1686601318657"
            alt="app-logo"
            width="40px"
            height="32px"
          />
        </div>
        <header>
          <h1 className="signup-modal-heading">Join Twitter today</h1>
        </header>
        {errorMessage && <p className="pink">{errorMessage}</p>}
        <div className="flex-column">
          <label htmlFor="name">Full Name: </label>
          <input
            className="signup-modal-input"
            type="text"
            id="name"
            onChange={signupFieldChangeHandler}
          />
        </div>

        <div className="flex-column">
          {" "}
          <label htmlFor="username">Username:</label>
          {/* check if already present */}
          <input
            className="signup-modal-input"
            type="text"
            id="username"
            onChange={signupFieldChangeHandler}
          />
        </div>
        <div className="flex-column">
          {" "}
          <label htmlFor="email">Email Address: </label>
          <input
            className="signup-modal-input"
            type="text"
            id="email"
            onChange={signupFieldChangeHandler}
          />
        </div>
        <div className="flex-column relative">
          {" "}
          <span
            className="show-password-icon pointer"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? (
              <i class="fa-regular fa-eye"></i>
            ) : (
              <i class="fa-regular fa-eye-slash"></i>
            )}
          </span>
          <label htmlFor="password">Password:</label>
          <input
            className="signup-modal-input"
            type={showPassword ? "text" : "password"}
            id="password"
            onChange={signupFieldChangeHandler}
          />
        </div>
        <div className="flex-column">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            className="signup-modal-input"
            type="password"
            id="confirmPassword"
            onChange={signupFieldChangeHandler}
          />
        </div>

        <button className="btn btn-primary" onClick={handleBtnSignup}>
          Create Account
        </button>
        <div className="login-modal-suggestion">
          Have an account already?{" "}
          <Link className="link" to="/login">
            Log in
          </Link>
        </div>
      </article>
    </div>
  );
}
