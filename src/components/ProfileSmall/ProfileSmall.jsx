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
  isVerified,
  setUserDetail,
  setShowGuestUsers,
  inGuestUsers,
  inSearch,
  setSearchInput,
}) {
  const { setUser, setLoggedIn, mode } = useContext(AuthContext);

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
      className={
        inGuestUsers
          ? mode === "dark"
            ? "flex guest-user pointer black-hover"
            : "flex guest-user pointer"
          : "flex"
      }
    >
      <img
        className="user-avatar"
        src={avatar}
        alt="user"
        height={inSearch ? "60px" : "40px"}
        width={inSearch ? "60px" : "40px"}
      />
      <div>
        <div className="profile-small-name bolder">
          {name}{" "}
          {isVerified && (
            <img
              src="https://ik.imagekit.io/faheem/Social-media/verify.png?updatedAt=1688800693531"
              alt="verified"
              height="15px"
              width="15px"
            />
          )}
        </div>
        <div className="profile-small-username black-profile-small-username">
          @{username}
        </div>
      </div>
    </div>
  );
}
