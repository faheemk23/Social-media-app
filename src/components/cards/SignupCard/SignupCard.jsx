import { useContext, useState } from "react";
import "./SignupCard.css";
import { Link, useNavigate } from "react-router-dom";
import { signupHandler } from "../../../utilities/authUtilities";
import { AuthContext } from "../../../contexts/AuthContext";

export default function SignupCard() {
  const [userDetail, setUserDetail] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { setUser, setLoggedIn } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");
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
    return res;
  };

  const handleBtnSignup = () => {
    if (valiateDetails(userDetail, setErrorMessage)) {
      signupHandler(userDetail, navigate, setLoggedIn, setUser);
    }
  };

  return (
    <article className="signup-card-container">
      <header>
        <h1>Signup</h1>
      </header>
      {errorMessage && <p>{errorMessage}</p>}
      <section className="signup-card-content">
        <label htmlFor="name">Full Name </label>
        <input type="text" id="name" onChange={signupFieldChangeHandler} />
        <label htmlFor="username">Username</label>
        {/* check if already present */}
        <input type="text" id="username" onChange={signupFieldChangeHandler} />
        <label htmlFor="email">Email Address </label>
        <input type="text" id="email" onChange={signupFieldChangeHandler} />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          onChange={signupFieldChangeHandler}
        />
        <button>Hide/Show</button>
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          onChange={signupFieldChangeHandler}
        />
        <div>
          <input type="checkbox" id="t&c" />
          <label htmlFor="t&c">I accept all terms & Conditions</label>
        </div>
        <button onClick={handleBtnSignup}>Create New Account</button>
        <Link to="#">Already have an account</Link>
      </section>
    </article>
  );
}
