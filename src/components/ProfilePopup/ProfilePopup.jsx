import { useContext } from "react";

import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import "./ProfilePopup.css";

export default function ProfilePopup() {
  const { user, mode } = useContext(AuthContext);

  const navigate = useNavigate();

  return (
    <div
      className={
        mode === "dark" ? "profile-popup black-profile-popup" : "profile-popup"
      }
    >
      <div
        className={
          mode === "dark"
            ? " profile-popup-item pointer black-top-border-light-black"
            : "profile-popup-item pointer top-border-light-black"
        }
        onClick={() => navigate("/login")}
      >
        Add an existing account
      </div>
      <div
        className="profile-popup-item pointer"
        onClick={() => navigate("/logout")}
      >
        Log out @{user.username}
      </div>
    </div>
  );
}
