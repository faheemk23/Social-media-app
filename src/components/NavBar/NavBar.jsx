import { NavLink } from "react-router-dom";
import "./NavBar.css";

export default function NavBar({ inBottom }) {
  const getActiveStyle = ({ isActive }) =>
    isActive ? { fontWeight: "bold", color: "red" } : {};
  return (
    <nav className={inBottom ? "nav nav-bottom" : "nav nav-left"}>
      <NavLink className="navlink" style={getActiveStyle} to="/home">
        <i className="fa-solid fa-house"></i>
        <span className="navlink-text">Home</span>
      </NavLink>
      <NavLink className="navlink" style={getActiveStyle} to="/explore">
        <i className="fa-solid fa-magnifying-glass"></i>
        <span className="navlink-text">Explore</span>
      </NavLink>
      <NavLink className="navlink" style={getActiveStyle} to="/bookmarks">
        <i className="fa-regular fa-bookmark"></i>
        <span className="navlink-text">Bookmarks</span>
      </NavLink>
      <NavLink className="navlink" style={getActiveStyle} to="/profile/1">
        <i className="fa-regular fa-user"></i>
        <span className="navlink-text">Profile</span>
      </NavLink>
      <button>Tweet</button>
    </nav>
  );
}
