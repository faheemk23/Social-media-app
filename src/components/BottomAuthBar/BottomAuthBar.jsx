import { Link } from "react-router-dom";

import "./BottomAuthBar.css";

export default function BottomAuthBar() {
  return (
    <section className="bottom-auth-bar">
      <section className="bottom-auth-bar-text">
        <div className="larger bolder">Don't miss what's happening</div>
        <div className="smaller">People on Twitter are the first to know.</div>
      </section>
      <section className="bottom-auth-bar-buttons">
        <Link className="btn-bottom-auth btn-login" to="/login">
          Log in
        </Link>
        <Link className="btn-bottom-auth btn-signup" to="/signup">
          Sign up
        </Link>
      </section>
    </section>
  );
}
