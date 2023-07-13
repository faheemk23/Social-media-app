import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { DataContext } from "../../contexts/DataContext";
import { ProfileSmall } from "../ProfileSmall/ProfileSmall";
import "./SearchBar.css";

export function SearchBar() {
  const [searchInput, setSearchInput] = useState("");
  const {
    dataState: { users },
  } = useContext(DataContext);

  const { mode } = useContext(AuthContext);

  const isMatch = (string, search) => {
    const wordsInString = string.split(" ");
    const matching = wordsInString.some((word) => word.startsWith(search));
    return matching;
  };

  const handleSearch = (users, searchInput) => {
    const filteredUsers = users.filter(
      ({ username, name }) =>
        isMatch(username.toLowerCase(), searchInput.toLowerCase()) ||
        isMatch(name.toLowerCase(), searchInput.toLowerCase())
    );
    return filteredUsers;
  };

  const filteredUsers = handleSearch(users, searchInput);

  return (
    <div
      className={
        mode === "dark"
          ? "search-bar-container relative bg-light-black light-black"
          : "search-bar-container relative"
      }
    >
      <i className="fa-solid fa-magnifying-glass search-bar-icon"></i>
      <input
        type="search"
        className={
          mode === "dark"
            ? "search-bar bg-light-black light-black"
            : "search-bar"
        }
        placeholder="Search Twitter"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      {searchInput !== "" && (
        <div
          className={
            mode === "dark"
              ? "search-result black-search-result"
              : "search-result"
          }
        >
          {filteredUsers.length === 0 ? (
            <div className="padding-1rem">Sorry no users match! 🥺</div>
          ) : (
            <>
              {filteredUsers.map((user) => (
                <div
                  className={
                    mode === "dark"
                      ? "search-result-item pointer black-search-result-item"
                      : "search-result-item pointer"
                  }
                >
                  <ProfileSmall
                    avatar={user.avatar}
                    name={user.name}
                    username={user.username}
                    inSearch
                    setSearchInput={setSearchInput}
                    isVerified={user.isVerified}
                  />
                </div>
              ))}
            </>
          )}

          {}
        </div>
      )}
    </div>
  );
}
