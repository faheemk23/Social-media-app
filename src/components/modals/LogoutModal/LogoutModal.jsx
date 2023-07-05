import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import "./LogoutModal.css";

export default function LogoutModal() {
  const { setUser, setLoggedIn } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleBtnLogout = () => {
    setLoggedIn(false);
    setUser({});
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="modal-container bg-opaque">
      <div className="logout-modal">
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
        <h2 className="logout-modal-h2">Log out of Twitter?</h2>
        <div className="logout-modal-text">
          You can always log back in at any time. If you just want to switch
          accounts, you can do that by adding an existing account.
        </div>
        <button
          className="btn btn-primary btn-logout-modal"
          onClick={handleBtnLogout}
        >
          Log out
        </button>
        <button
          className="btn btn-secondary btn-logout-modal"
          onClick={() => navigate(-1)}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
