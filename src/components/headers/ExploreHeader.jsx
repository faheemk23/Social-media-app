import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import "./Headers.css";

export function ExploreHeader() {
  const { mode } = useContext(AuthContext);
  return (
    <div
      className={
        mode === "dark"
          ? "header-container black-header-container"
          : "header-container "
      }
    >
      <div className="header-heading">Explore</div>
    </div>
  );
}
