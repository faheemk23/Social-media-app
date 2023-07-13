import { Link } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import "./SuggestedSignup.css";

export default function SuggestedSignup() {
  const { mode } = useContext(AuthContext);
  return (
    <section
      className={
        mode === "dark" ? "suggested-signup bg-light-black" : "suggested-signup"
      }
    >
      <h1 className="suggested-signup-heading">New to Twitter? </h1>
      <p
        className={
          mode === "dark"
            ? "suggested-signup-text light-black"
            : "suggested-signup-text"
        }
      >
        Sign up now to get your own personalized timeline!
      </p>
      <Link
        className={
          mode === "dark"
            ? "create-account-btn black-create-account-btn "
            : "create-account-btn"
        }
        to="/signup"
      >
        <i className="fa-solid fa-user-plus"></i> Create account
      </Link>
      <p
        className={
          mode === "dark"
            ? "suggested-signup-text light-black"
            : "suggested-signup-text"
        }
      >
        By signing up, you agree to the{" "}
        <Link className="link">Terms of service</Link> and{" "}
        <Link className="link">Privacy Policy</Link>, including{" "}
        <Link className="link">Cookie use</Link>.
      </p>
    </section>
  );
}
