import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";
import { ProfileSmall } from "../ProfileSmall/ProfileSmall";
import "./NavBar.css";

export default function NavBar({ inBottom, setShowCreatePostModal }) {
  const { user, setUser, loggedIn, setLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const getActiveStyle = ({ isActive }) =>
    isActive ? { fontWeight: "bold" } : {};

  const handleBtnLogout = () => {
    setLoggedIn(false);
    setUser({});
    localStorage.clear();
    navigate("/explore");
  };
  return (
    <nav className={inBottom ? "nav nav-bottom" : "nav nav-left"}>
      {!inBottom && (
        <div
          className="navlink logo"
          onClick={() => (loggedIn ? navigate("/home") : navigate("/explore"))}
        >
          <img
            className="nav-logo"
            src="https://ik.imagekit.io/faheem/Social-media/app-logo?updatedAt=1686601318657"
            alt="app-logo"
            width="40px"
            height="32px"
          />
        </div>
      )}

      {loggedIn && (
        <NavLink className="navlink" style={getActiveStyle} to="/home">
          <i className="fa-solid fa-house navlink-icon"></i>
          <span className="navlink-text">Home</span>
        </NavLink>
      )}
      <NavLink className="navlink" style={getActiveStyle} to="/explore">
        <i className="fa-solid fa-magnifying-glass navlink-icon"></i>
        <span className="navlink-text">Explore</span>
      </NavLink>

      {!loggedIn && (
        <NavLink className="navlink" style={getActiveStyle} to="#">
          <i className="fa-solid fa-gear navlink-icon"></i>
          <span className="navlink-text">Settings</span>
        </NavLink>
      )}
      {loggedIn && (
        <>
          <NavLink className="navlink" style={getActiveStyle} to="/bookmarks">
            <i className="fa-regular fa-bookmark navlink-icon"></i>
            <span className="navlink-text">Bookmarks</span>
          </NavLink>
          <NavLink
            className="navlink"
            style={getActiveStyle}
            to={`/profile/${user.username}`}
          >
            <i className="fa-regular fa-user navlink-icon"></i>
            <span className="navlink-text">Profile</span>
          </NavLink>
          {!inBottom && (
            <button
              className="btn-tweet "
              onClick={() => setShowCreatePostModal(true)}
            >
              <span className="above-1200">Tweet</span>
              <span className="below-1200">
                <sup>+</sup>
                <i className="fa-solid fa-feather"></i>
              </span>
            </button>
          )}
          <div className="navbar-profile hover-light-black-bg">
            <div className="above-1200 flex">
              <ProfileSmall
                avatar={user.avatar}
                name={user.name}
                username={user.username}
              />
              <i className="fa-solid fa-ellipsis navbar-profile-ellipse"></i>
            </div>

            <div className="below-1200">
              <img
                className="user-avatar "
                src={user.avatar}
                alt="user-image"
                height="40px"
                width="40px"
              />
            </div>
          </div>
        </>
      )}

      {loggedIn ? (
        <button onClick={handleBtnLogout}>Logout</button>
      ) : (
        <Link to="/login">login</Link>
      )}
    </nav>
  );
}
