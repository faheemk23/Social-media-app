import { useContext, useEffect, useState } from "react";
import "./WhoToFollow.css";
import { DataContext } from "../../contexts/DataContext";
import { useLocation } from "react-router-dom";
import { followUser, unfollowUser } from "../../utilities/userUtilities";
import { AuthContext } from "../../contexts/AuthContext";

export default function WhoToFollow() {
  const [whoToFollow, setWhoToFollow] = useState([]);
  const { user } = useContext(AuthContext);
  const { dataState, dataDispatch } = useContext(DataContext);

  const location = useLocation();

  const getWhoToFollowArray = () => {
    const usersNotFollowedByCurrent = dataState.users.filter(
      ({ username, followers }) => {
        if (username === user?.username) {
          return false;
        } else if (followers.length === 0) {
          return true;
        } else {
          return followers.some(({ username }) => username !== user?.username);
        }
      }
    );
    if (usersNotFollowedByCurrent.length > 4) {
      return usersNotFollowedByCurrent.slice(0, 4);
    } else {
      return usersNotFollowedByCurrent;
    }
  };

  useEffect(() => {
    console.log(getWhoToFollowArray());
    setTimeout(() => setWhoToFollow(() => getWhoToFollowArray()), 1000);
  }, [location]);

  const isFollowed = (givenUsername) =>
    dataState.users
      .find(({ username }) => username === givenUsername)
      .followers.some(({ username }) => username === user?.username);

  return (
    <div className="who-to-follow">
      <h1>Who to follow </h1>
      {whoToFollow.map((user) => {
        const { _id, avatar, name, username } = user;
        return (
          <div className="who-to-follow-item" key={_id}>
            <div className="flex">
              <img
                className="user-avatar"
                src={avatar}
                alt="user-image"
                height="40px"
                width="40px"
              />
              <div>
                <div className="bolder">{name}</div>
                <div className="who-to-follow-username">@{username}</div>
              </div>
            </div>

            {isFollowed(username) ? (
              <button
                className="btn-who-to-follow btn-following pointer"
                onClick={() => unfollowUser(_id, dataDispatch)}
              >
                Following
              </button>
            ) : (
              <button
                className="btn-who-to-follow pointer"
                onClick={() => followUser(_id, dataDispatch)}
              >
                Follow
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
}
