import { Link } from "react-router-dom";
import "./SuggestedSignup.css";

export default function SuggestedSignup() {
  return (
    <section className="suggested-signup">
      <h1 className="suggested-signup-heading">New to Twitter? </h1>
      <p className="suggested-signup-text">
        Sign up now to get your own personalized timeline!
      </p>
      <Link className="btn btn-create-account" to="/signup">
        <i className="fa-solid fa-user-plus"></i> Create account
      </Link>
      <p className="suggested-signup-text">
        By signing up, you agree to the{" "}
        <Link className="suggested-signup-link">Terms of service</Link> and{" "}
        <Link className="suggested-signup-link">Privacy Policy</Link>, including{" "}
        <Link className="suggested-signup-link">Cookie use</Link>.
      </p>
    </section>
  );
}
