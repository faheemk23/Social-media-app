import { useNavigate } from "react-router-dom";
import "./Headers.css";

export function ProfileHeader({ name, numberOfPosts }) {
  const navigate = useNavigate();
  return (
    <div className="header-container small-header">
      <div className="pointer" onClick={() => navigate(-1)}>
        <i className="fa-solid fa-arrow-left icon"></i>
      </div>
      <div>
        <div className="profile-header-name">{name}</div>
        <div className="profile-header-tweets-number">
          {numberOfPosts} {numberOfPosts <= 1 ? "tweet" : "tweets"}
        </div>
      </div>
    </div>
  );
}
