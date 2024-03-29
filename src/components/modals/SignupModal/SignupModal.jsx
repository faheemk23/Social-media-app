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
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    dataState: { users },
  } = useContext(DataContext);
  const { setUser, setLoggedIn, mode } = useContext(AuthContext);
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
    <div
      className={
        mode === "dark"
          ? "modal-container black-modal-container"
          : "modal-container "
      }
    >
      <article
        className={
          mode === "dark"
            ? "signup-modal relative bg-black"
            : "signup-modal relative"
        }
      >
        <i
          className="fa-solid fa-xmark login-modal-close-icon pointer"
          onClick={() => navigate("/")}
        ></i>
        <div className="flex-center">
          {" "}
          <img
            className="nav-logo"
            src={
              mode === "dark"
                ? "https://ik.imagekit.io/faheem/Social-media/dark-logo.png?updatedAt=1688983665780"
                : "https://ik.imagekit.io/faheem/Social-media/app-logo?updatedAt=1686601318657"
            }
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
            className={
              mode === "dark"
                ? "signup-modal-input black-signup-modal-input"
                : "signup-modal-input"
            }
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
            className={
              mode === "dark"
                ? "signup-modal-input black-signup-modal-input"
                : "signup-modal-input"
            }
            type="text"
            id="username"
            onChange={signupFieldChangeHandler}
          />
        </div>
        <div className="flex-column">
          {" "}
          <label htmlFor="email">Email Address: </label>
          <input
            className={
              mode === "dark"
                ? "signup-modal-input black-signup-modal-input"
                : "signup-modal-input"
            }
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
              <i className="fa-regular fa-eye"></i>
            ) : (
              <i className="fa-regular fa-eye-slash"></i>
            )}
          </span>
          <label htmlFor="password">Password:</label>
          <input
            className={
              mode === "dark"
                ? "signup-modal-input black-signup-modal-input"
                : "signup-modal-input"
            }
            type={showPassword ? "text" : "password"}
            id="password"
            onChange={signupFieldChangeHandler}
          />
        </div>
        <div className="flex-column relative">
          <span
            className="show-password-icon pointer"
            onClick={() => setShowConfirmPassword((prev) => !prev)}
          >
            {showConfirmPassword ? (
              <i className="fa-regular fa-eye"></i>
            ) : (
              <i className="fa-regular fa-eye-slash"></i>
            )}
          </span>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            className={
              mode === "dark"
                ? "signup-modal-input black-signup-modal-input"
                : "signup-modal-input"
            }
            type={showConfirmPassword ? "text" : "password"}
            id="confirmPassword"
            onChange={signupFieldChangeHandler}
          />
        </div>

        <button
          className={
            mode === "dark" ? "btn btn-primary bg-primary" : "btn btn-primary"
          }
          onClick={handleBtnSignup}
        >
          Create Account
        </button>
        <div
          className={
            mode === "dark"
              ? "login-modal-suggestion light-black"
              : "login-modal-suggestion"
          }
        >
          Have an account already?{" "}
          <Link className="link" to="/login">
            Log in
          </Link>
        </div>
      </article>
    </div>
  );
}
