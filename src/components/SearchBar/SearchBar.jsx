import { useContext, useState } from "react";
import { DataContext } from "../../contexts/DataContext";
import { ProfileSmall } from "../ProfileSmall/ProfileSmall";
import "./SearchBar.css";

export function SearchBar() {
  const [searchInput, setSearchInput] = useState("");
  const {
    dataState: { users },
  } = useContext(DataContext);

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

  console.log({ users: filteredUsers });
  return (
    <div className="search-bar-container relative">
      <i className="fa-solid fa-magnifying-glass search-bar-icon"></i>
      <input
        type="search"
        className="search-bar"
        placeholder="Search Twitter"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      {searchInput !== "" && (
        <div className="search-result">
          {filteredUsers.length === 0 ? (
            <div className="padding-1rem">Sorry no users match! 🥺</div>
          ) : (
            <>
              {filteredUsers.map((user) => (
                <div className="search-result-item pointer">
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
