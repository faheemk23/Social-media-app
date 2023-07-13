import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import "./Headers.css";

export function PostHeader() {
  const { mode } = useContext(AuthContext);

  const navigate = useNavigate();

  return (
    <div
      className={
        mode === "dark"
          ? "header-container small-header black-header-container"
          : "header-container small-header"
      }
    >
      <div className="pointer" onClick={() => navigate(-1)}>
        <i className="fa-solid fa-arrow-left icon"></i>
      </div>
      <h3>Tweet</h3>
    </div>
  );
}
