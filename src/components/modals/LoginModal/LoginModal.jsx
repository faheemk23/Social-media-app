import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { AuthContext } from "../../../contexts/AuthContext";
import { loginHandler } from "../../../utilities/authUtilities";
import GuestLoginUsers from "../../GuestLoginUsers/GuestLoginUsers";
import "./LoginModal.css";

export function LoginModal() {
  const [userDetail, setUserDetail] = useState({
    username: "",
    password: "",
  });

  const [showGuestUsers, setShowGuestUsers] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const { setUser, setLoggedIn, mode } = useContext(AuthContext);

  const navigate = useNavigate();

  const loginFieldChangeHandler = (e) => {
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
    return res;
  };

  const handleBtnLogin = () => {
    if (valiateDetails(userDetail, setErrorMessage)) {
      loginHandler(userDetail, setUser, navigate, setLoggedIn, setErrorMessage);
    }
  };

  return (
    <div
      className={
        mode === "dark"
          ? "modal-container black-modal-container "
          : "modal-container "
      }
    >
      <div
        className={
          mode === "dark"
            ? "login-modal relative bg-black"
            : "login-modal relative"
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
        <h1 className="login-modal-heading">Sign in to Twitter</h1>
        {errorMessage && <p className="pink error-message">{errorMessage}</p>}

        <div className="flex-column">
          <label htmlFor="username">Username </label>
          <input
            className={
              mode === "dark"
                ? "login-modal-input black-login-modal-input"
                : "login-modal-input"
            }
            type="text"
            id="username"
            value={userDetail.username}
            onChange={loginFieldChangeHandler}
          />
        </div>

        <div className="flex-column relative">
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
          <label htmlFor="password">Password </label>
          <input
            className={
              mode === "dark"
                ? "login-modal-input black-login-modal-input"
                : "login-modal-input"
            }
            type={showPassword ? "text" : "password"}
            id="password"
            value={userDetail.password}
            onChange={loginFieldChangeHandler}
          />
        </div>

        <button
          className={
            mode === "dark" ? "btn btn-primary bg-primary" : "btn btn-primary"
          }
          onClick={handleBtnLogin}
        >
          Login
        </button>
        {showGuestUsers && (
          <GuestLoginUsers
            setUserDetail={setUserDetail}
            setShowGuestUsers={setShowGuestUsers}
          />
        )}
        <button
          className={
            mode === "dark"
              ? "btn btn-secondary black-btn-guest-login"
              : "btn btn-secondary"
          }
          onClick={() => setShowGuestUsers(true)}
        >
          Guest Login
        </button>
        <div
          className={
            mode === "dark"
              ? "login-modal-suggestion black-login-modal-light-black"
              : "login-modal-suggestion"
          }
        >
          Don't have a account?{" "}
          <Link className="link" to="/signup">
            Signup
          </Link>
        </div>
      </div>
    </div>
  );
}
