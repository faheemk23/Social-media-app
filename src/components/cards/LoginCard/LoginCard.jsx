import { Link, useNavigate } from "react-router-dom";
import "./LoginCard.css";
import { loginHandler } from "../../../utilities/authUtilities";
import { useContext, useState } from "react";
import { AuthContext } from "../../../contexts/AuthContext";

export function LoginCard() {
  const [userDetail, setUserDetail] = useState({
    username: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const { setUser, setLoggedIn } = useContext(AuthContext);

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
      loginHandler(userDetail, setUser, navigate, setLoggedIn);
    }
  };

  const handleBtnGuestLogin = () => {
    const guestUser = { username: "faheemk237", password: "faheemKhan123" };
    setUserDetail(guestUser);
    loginHandler(guestUser, setUser, navigate, setLoggedIn);
  };

  return (
    <div>
      <h1>Login</h1>
      {errorMessage && <p>{errorMessage}</p>}
      <div>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          id="username"
          value={userDetail.username}
          onChange={loginFieldChangeHandler}
        />
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          id="password"
          value={userDetail.password}
          onChange={loginFieldChangeHandler}
        />
      </div>
      <button onClick={handleBtnLogin}>Login</button>
      <button onClick={handleBtnGuestLogin}>Guest Login</button>
      <div>
        Don't have a account? <Link to="/signup">Signup</Link>
      </div>
    </div>
  );
}
