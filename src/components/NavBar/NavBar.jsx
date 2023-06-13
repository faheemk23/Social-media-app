import { Link, NavLink, useNavigate } from "react-router-dom";
import "./NavBar.css";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export default function NavBar({ inBottom }) {
  const { setUser, loggedIn, setLoggedIn } = useContext(AuthContext);
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
          <NavLink className="navlink" style={getActiveStyle} to="/profile/1">
            <i className="fa-regular fa-user navlink-icon"></i>
            <span className="navlink-text">Profile</span>
          </NavLink>
          {!inBottom && <button>Tweet</button>}
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
