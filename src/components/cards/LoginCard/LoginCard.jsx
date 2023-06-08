import { Link, useNavigate } from "react-router-dom";
import "./LoginCard.css";
import { loginHandler } from "../../../utilities/authUtilities";

export function LoginCard() {
  const navigate = useNavigate();
  const handleBtnGuestLogin = () => {
    loginHandler(
      { username: "faheemk237", password: "faheemKhan123" },
      navigate
    );
  };

  return (
    <div>
      <h1>Login</h1>
      <div>
        <label htmlFor="username">Username: </label>
        <input type="text" id="username" />
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <input type="text" id="password" />
      </div>
      <button>Login</button>
      <button onClick={handleBtnGuestLogin}>Guest Login</button>
      <div>
        Don't have a account? <Link to="/signup">Signup</Link>
      </div>
    </div>
  );
}
