import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

import { useNavigate } from "react-router-dom";
import "./Headers.css";

export function MiscHeader({ inBookmark, inError }) {
  const { user, mode } = useContext(AuthContext);

  const navigate = useNavigate();

  return (
    <div
      className={
        mode === "dark"
          ? "header-container small-header relative black-header-container"
          : "header-container small-header relative "
      }
    >
      {inError && (
        <div className="pointer" onClick={() => navigate("/")}>
          <i className="fa-solid fa-arrow-left icon"></i>
        </div>
      )}
      {inBookmark && (
        <div className="header-heading">
          Bookmarks
          <div className="bookmarks-header-username">@{user?.username}</div>
        </div>
      )}
    </div>
  );
}
