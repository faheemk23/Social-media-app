import { useNavigate } from "react-router-dom";
import "./Headers.css";

export function ProfileHeader({ name, numberOfPosts }) {
  const navigate = useNavigate();
  return (
    <div className="header-container">
      <div className="pointer" onClick={() => navigate(-1)}>
        <i className="fa-solid fa-arrow-left"></i>
      </div>

      <div className="header-heading">{name}</div>
      <div>{numberOfPosts} tweets</div>
    </div>
  );
}
