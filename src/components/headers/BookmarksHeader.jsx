import { useContext, useState } from "react";
import "./Headers.css";
import { AuthContext } from "../../contexts/AuthContext";

export default function BookmarksHeader() {
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
