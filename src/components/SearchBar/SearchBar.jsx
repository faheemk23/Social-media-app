import "./SearchBar.css";

export default function SearchBar() {
  return (
    <div className="search-bar-container">
      <i className="fa-solid fa-magnifying-glass search-bar-icon"></i>
      <input type="text" className="search-bar" placeholder="Search Twitter" />
    </div>
  );
}
