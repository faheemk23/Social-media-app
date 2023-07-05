import { useNavigate } from "react-router-dom";
import "./Headers.css";

export function PostHeader() {
  const navigate = useNavigate();
  return (
    <div className="header-container small-header">
      <div className="pointer" onClick={() => navigate(-1)}>
        <i className="fa-solid fa-arrow-left icon"></i>
      </div>
      <h3>Tweet</h3>
    </div>
  );
}
