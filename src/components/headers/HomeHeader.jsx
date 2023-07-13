import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import "./Headers.css";

export function HomeHeader({ filter, setFilter }) {
  const { mode } = useContext(AuthContext);
  return (
    <div
      className={
        mode === "dark"
          ? "header-container black-header-container"
          : "header-container "
      }
    >
      <div className="header-heading">Home</div>
      <div className="filters">
        <div
          className={
            mode === "dark"
              ? "filter-item-container pointer black-hover"
              : "filter-item-container pointer"
          }
          onClick={() => setFilter("trending")}
        >
          <div className="filter-item">
            <span>Trending</span>
            {filter === "trending" && (
              <div className="line-under-active-filter"></div>
            )}
          </div>
        </div>
        <div
          className={
            mode === "dark"
              ? "filter-item-container pointer black-hover"
              : "filter-item-container pointer"
          }
          onClick={() => setFilter("latest")}
        >
          <div className="filter-item">
            <span>Latest</span>
            {filter === "latest" && (
              <div className="line-under-active-filter"></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
