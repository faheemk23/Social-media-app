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
      <div
        className={
          mode === "dark"
            ? "suggest-auth relative bg-black"
            : "suggest-auth relative"
        }
      >
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
        <div
          className={
            mode === "dark"
              ? "suggest-auth-heading white"
              : "suggest-auth-heading"
          }
        >
          Don't miss what's happeninng
        </div>
        <div
          className={
            mode === "dark"
              ? "suggest-auth-text light-black"
              : "suggest-auth-text "
          }
        >
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
