import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";
import { DataContext } from "../../contexts/DataContext";
import { followUser, unfollowUser } from "../../utilities/userUtilities";
import { ProfileSmall } from "../ProfileSmall/ProfileSmall";
import "./WhoToFollow.css";

export default function WhoToFollow() {
  const [whoToFollow, setWhoToFollow] = useState([]);
  const { user } = useContext(AuthContext);
  const { dataState, dataDispatch } = useContext(DataContext);

  const location = useLocation();

  const navigate = useNavigate();

  const getWhoToFollowArray = () => {
    const usersNotFollowedByCurrent = dataState.users.filter(
      ({ username, followers }) => {
        if (username === user?.username) {
          return false;
        } else if (followers.length === 0) {
          return true;
        } else {
          return !followers.some(({ username }) => username === user?.username);
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
    setTimeout(() => setWhoToFollow(() => getWhoToFollowArray()), 1500);
  }, [location]);

  const isFollowed = (givenUsername) =>
    dataState.users
      .find(({ username }) => username === givenUsername)
      .followers.some(({ username }) => username === user?.username);

  if (whoToFollow.length === 0) {
    return;
  }

  return (
    <div className="who-to-follow">
      <h1 className="who-to-follow-heading">Who to follow </h1>
      {whoToFollow.map((user) => {
        const { _id, avatar, name, username, isVerified } = user;
        return (
          <div
            className="who-to-follow-item pointer"
            key={_id}
            onClick={() => navigate(`/profile/${username}`)}
          >
            <ProfileSmall
              avatar={avatar}
              name={name}
              username={username}
              isVerified={isVerified}
            />

            {isFollowed(username) ? (
              <button
                className="btn-who-to-follow btn-following pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  unfollowUser(_id, dataDispatch);
                }}
              >
                Following
              </button>
            ) : (
              <button
                className="btn-who-to-follow pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  followUser(_id, dataDispatch);
                }}
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
