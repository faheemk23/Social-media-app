import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import "./SuggestAuth.css";

export function SuggestAuth({ setShowSuggestAuth }) {
  const { mode } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div
      className={
        mode === "dark"
          ? "modal-container black-modal-container"
          : "modal-container "
      }
    >
      <div className="suggest-auth relative">
        <i
          className="fa-solid fa-xmark login-modal-close-icon pointer"
          onClick={(e) => {
            e.stopPropagation();
            setShowSuggestAuth(false);
          }}
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
        <div className="suggest-auth-heading">Don't miss what's happeninng</div>
        <div className="suggest-auth-text">
          People on twitter are the first to know.
        </div>
        <button
          className="btn btn-primary btn-suggest-auth "
          onClick={(e) => {
            e.stopPropagation();
            navigate("/login");
          }}
        >
          Log in
        </button>
        <button
          className="btn btn-suggest-auth btn-suggest-auth-signup"
          onClick={(e) => {
            e.stopPropagation();
            navigate("/signup");
          }}
        >
          Signup
        </button>
      </div>
    </div>
  );
}
