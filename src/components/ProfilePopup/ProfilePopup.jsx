import { useContext } from "react";

import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import "./ProfilePopup.css";

export default function ProfilePopup() {
  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  return (
    <div className="profile-popup">
      <div
        className="profile-popup-item pointer top-border-light-black"
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
