import { useContext, useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

import { toast } from "react-hot-toast";
import { AuthContext } from "../../contexts/AuthContext";
import ProfilePopup from "../ProfilePopup/ProfilePopup";
import { ProfileSmall } from "../ProfileSmall/ProfileSmall";
import "./NavBar.css";

export default function NavBar({ inBottom, setShowCreatePostModal }) {
  const [showProfilePopup, setShowProfilePopup] = useState(false);
  const { user, loggedIn, mode, setMode } = useContext(AuthContext);

  const location = useLocation();

  const navigate = useNavigate();

  const getActiveStyle = ({ isActive }) =>
    isActive ? { fontWeight: "bold" } : {};

  const handleToggleModes = (prev) => {
    if (prev === "dark") {
      localStorage.setItem("mode", "light");
      return "light";
    } else {
      localStorage.setItem("mode", "dark");
      return "dark";
    }
  };

  useEffect(() => {
    setShowProfilePopup(false);
  }, [location]);

  return (
    <nav
      className={
        inBottom
          ? mode === "dark"
            ? "nav nav-bottom bg-black"
            : "nav nav-bottom"
          : "nav nav-left"
      }
    >
      {!inBottom && (
        <div
          className={
            mode === "dark" ? "navlink logo dark-logo" : "navlink logo"
          }
          onClick={() => (loggedIn ? navigate("/home") : navigate("/"))}
        >
          <img
            className="nav-logo"
            src={
              mode === "dark"
                ? "https://ik.imagekit.io/faheem/Social-media/dark-logo.png?updatedAt=1688983665780"
                : "https://ik.imagekit.io/faheem/Social-media/app-logo?updatedAt=1686601318657"
            }
            alt="app-logo"
            width="40px"
            height="32px"
          />
        </div>
      )}

      {loggedIn && (
        <NavLink
          className={mode === "dark" ? "navlink black-hover" : "navlink"}
          style={getActiveStyle}
          to="/home"
        >
          <i
            className={
              mode === "dark"
                ? "fa-solid fa-house navlink-icon black-navlink-icon"
                : "fa-solid fa-house navlink-icon "
            }
          ></i>
          <span
            className={
              mode === "dark"
                ? "navlink-text black-navlink-text"
                : "navlink-text"
            }
          >
            Home
          </span>
        </NavLink>
      )}
      <NavLink
        className={mode === "dark" ? "navlink black-hover" : "navlink"}
        style={getActiveStyle}
        to="/"
      >
        <i
          className={
            mode === "dark"
              ? "fa-solid fa-magnifying-glass navlink-icon black-navlink-icon"
              : "fa-solid fa-magnifying-glass navlink-icon"
          }
        ></i>
        <span
          className={
            mode === "dark" ? "navlink-text black-navlink-text" : "navlink-text"
          }
        >
          Explore
        </span>
      </NavLink>

      {!loggedIn && (
        <>
          <NavLink
            className={mode === "dark" ? "navlink black-hover" : "navlink"}
            style={getActiveStyle}
            to="/login"
            onClick={() => toast.error("Custom settings coming soon!")}
          >
            <i
              className={
                mode === "dark"
                  ? "fa-solid fa-gear navlink-icon black-navlink-icon"
                  : "fa-solid fa-gear navlink-icon"
              }
            ></i>
            <span
              className={
                mode === "dark"
                  ? "navlink-text black-navlink-text"
                  : "navlink-text"
              }
            >
              Settings
            </span>
          </NavLink>
          <NavLink
            className={
              mode === "dark"
                ? "navlink nav-mode-toggle black-nav-mode-toggle"
                : "navlink nav-mode-toggle"
            }
            onClick={() => {
              setMode((prev) => handleToggleModes(prev));
            }}
          >
            <i
              className={
                mode === "dark"
                  ? "fa-solid fa-sun navlink-icon black-navlink-icon"
                  : "fa-solid fa-moon navlink-icon "
              }
            ></i>
          </NavLink>
        </>
      )}
      {loggedIn && (
        <>
          <NavLink
            className={mode === "dark" ? "navlink black-hover" : "navlink"}
            style={getActiveStyle}
            to="/bookmarks"
          >
            <i
              className={
                mode === "dark"
                  ? "fa-regular fa-bookmark navlink-icon black-navlink-icon"
                  : "fa-regular fa-bookmark navlink-icon"
              }
            ></i>
            <span
              className={
                mode === "dark"
                  ? "navlink-text black-navlink-text"
                  : "navlink-text"
              }
            >
              Bookmarks
            </span>
          </NavLink>
          {!inBottom && (
            <NavLink
              className={mode === "dark" ? "navlink black-hover" : "navlink"}
              style={getActiveStyle}
              to="/verified"
            >
              <i
                className={
                  mode === "dark"
                    ? "fa-regular fa-circle-check navlink-icon black-navlink-icon"
                    : "fa-regular fa-circle-check navlink-icon"
                }
              ></i>
              <span
                className={
                  mode === "dark"
                    ? "navlink-text black-navlink-text"
                    : "navlink-text"
                }
              >
                Verified
              </span>
            </NavLink>
          )}
          <NavLink
            className={mode === "dark" ? "navlink black-hover" : "navlink"}
            style={getActiveStyle}
            to={`/profile/${user.username}`}
          >
            <i
              className={
                mode === "dark"
                  ? "fa-regular fa-user navlink-icon black-navlink-icon"
                  : "fa-regular fa-user navlink-icon"
              }
            ></i>
            <span
              className={
                mode === "dark"
                  ? "navlink-text black-navlink-text"
                  : "navlink-text"
              }
            >
              Profile
            </span>
          </NavLink>

          {!inBottom && (
            <button
              className="btn-tweet pointer"
              onClick={() => setShowCreatePostModal(true)}
            >
              <span className="above-1200">Tweet</span>
              <span className="below-1200">
                <sup>+</sup>
                <i className="fa-solid fa-feather"></i>
              </span>
            </button>
          )}
          <NavLink
            className={
              mode === "dark"
                ? "navlink nav-mode-toggle black-nav-mode-toggle"
                : "navlink nav-mode-toggle"
            }
            onClick={() => {
              setMode((prev) => handleToggleModes(prev));
            }}
          >
            <i
              className={
                mode === "dark"
                  ? "fa-solid fa-sun navlink-icon black-navlink-icon"
                  : "fa-solid fa-moon navlink-icon "
              }
            ></i>
          </NavLink>

          {showProfilePopup && <ProfilePopup />}
          <div
            className={
              mode === "dark"
                ? "navbar-profile pointer black-hover"
                : "navbar-profile hover-light-black-bg pointer"
            }
            onClick={() => setShowProfilePopup((prev) => !prev)}
          >
            <div className="above-1200 flex">
              <ProfileSmall
                avatar={user.avatar}
                name={user.name}
                username={user.username}
                isVerified={user.isVerified}
              />
              <i className="fa-solid fa-ellipsis navbar-profile-ellipse"></i>
            </div>

            <div className="below-1200">
              <img
                className="user-avatar "
                src={user.avatar}
                alt="user"
                height="40px"
                width="40px"
              />
            </div>
          </div>
        </>
      )}
    </nav>
  );
}
