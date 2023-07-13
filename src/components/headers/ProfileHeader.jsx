import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import "./Headers.css";

export function ProfileHeader({ name, numberOfPosts }) {
  const navigate = useNavigate();

  const { mode } = useContext(AuthContext);
  return (
    <div
      className={
        mode === "dark"
          ? "header-container small-header black-header-container"
          : "header-container small-header "
      }
    >
      <div className="pointer" onClick={() => navigate(-1)}>
        <i className="fa-solid fa-arrow-left icon"></i>
      </div>
      <div>
        <div className="profile-header-name">{name}</div>
        <div
          className={
            mode === "dark"
              ? "profile-header-tweets-number light-black"
              : "profile-header-tweets-number"
          }
        >
          {numberOfPosts} {numberOfPosts <= 1 ? "tweet" : "tweets"}
        </div>
      </div>
    </div>
  );
}
