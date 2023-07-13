import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import "./LogoutModal.css";

export default function LogoutModal() {
  const { setUser, setLoggedIn, mode } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleBtnLogout = () => {
    setLoggedIn(false);
    setUser({});
    localStorage.clear();
    navigate("/");
  };

  return (
    <div
      className={
        mode === "dark"
          ? "modal-container bg-opaque black-logout-modal-container"
          : "modal-container bg-opaque"
      }
    >
      <div
        className={mode === "dark" ? "logout-modal bg-black" : "logout-modal"}
      >
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
        <div className="logout-modal-heading">Log out of Twitter?</div>
        <div
          className={
            mode === "dark"
              ? "logout-modal-text light-black"
              : "logout-modal-text"
          }
        >
          You can always log back in at any time. If you just want to switch
          accounts, you can do that by adding an existing account.
        </div>
        <button
          className={
            mode === "dark"
              ? "btn btn-secondary btn-logout-modal black-btn-logout"
              : "btn btn-primary btn-logout-modal"
          }
          onClick={handleBtnLogout}
        >
          Log out
        </button>
        <button
          className={
            mode === "dark"
              ? "btn btn-primary btn-logout-modal white-border"
              : "btn btn-secondary btn-logout-modal"
          }
          onClick={() => navigate(-1)}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
