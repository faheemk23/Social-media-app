import "./Headers.css";

export function HomeHeader({ filter, setFilter }) {
  return (
    <div className="header-container ">
      <div className="header-heading">Home</div>
      <div className="filters">
        <div
          className="filter-item-container pointer"
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
          className="filter-item-container pointer"
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
