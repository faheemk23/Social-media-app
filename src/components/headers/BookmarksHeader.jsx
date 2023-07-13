import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";

import "./Headers.css";

export function BookmarksHeader() {
  const [showEllipsisContent, setShowEllipsisContent] = useState(false);

  const { user, mode } = useContext(AuthContext);

  return (
    <div
      className={
        mode === "dark"
          ? "header-container small-header relative black-header-container"
          : "header-container small-header relative "
      }
    >
      <div className="header-heading">
        Bookmarks
        <div className="bookmarks-header-username">@{user?.username}</div>
      </div>

      {!showEllipsisContent && (
        <i className="fa-solid fa-ellipsis bookmarks-header-ellipse"></i>
      )}
    </div>
  );
}
