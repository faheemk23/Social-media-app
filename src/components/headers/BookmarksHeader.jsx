import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";

import "./Headers.css";

export function BookmarksHeader() {
  const [showEllipsisContent, setShowEllipsisContent] = useState(false);

  const { user } = useContext(AuthContext);

  return (
    <div className="header-container">
      <div className="header-heading">Bookmarks</div>
      <div>@{user?.username}</div>
      {!showEllipsisContent && <i className="fa-solid fa-ellipsis"></i>}
    </div>
  );
}
