import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";

import "./Headers.css";

export function BookmarksHeader() {
  const [showEllipsisContent, setShowEllipsisContent] = useState(false);

  const { user } = useContext(AuthContext);

  return (
    <div className="header-container small-header relative header-border-bottom">
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
