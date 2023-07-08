import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";
import { loginHandler } from "../../utilities/authUtilities";
import "./ProfileSmall.css";

export function ProfileSmall({
  avatar,
  name,
  username,
  password,
  setUserDetail,
  setShowGuestUsers,
  inGuestUsers,
  inSearch,
  setSearchInput,
}) {
  const { setUser, setLoggedIn } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleBtnGuestLogin = (username, password) => {
    const guestUser = { username, password };
    setShowGuestUsers(false);
    setUserDetail(guestUser);
    loginHandler(guestUser, setUser, navigate, setLoggedIn);
  };

  return (
    <div
      onClick={() => {
        if (inGuestUsers) {
          handleBtnGuestLogin(username, password);
        }
        if (inSearch) {
          navigate(`/profile/${username}`);
          setSearchInput("");
        }
      }}
      className={inGuestUsers ? "flex guest-user pointer" : "flex"}
    >
      <img
        className="user-avatar"
        src={avatar}
        alt="user"
        height={inSearch ? "60px" : "40px"}
        width={inSearch ? "60px" : "40px"}
      />
      <div>
        <div className="bolder black">{name}</div>
        <div className="profile-small-username">@{username}</div>
      </div>
    </div>
  );
}
