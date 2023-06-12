import { useContext } from "react";
import { followUser, unfollowUser } from "../../../utilities/userUtilities";
import "./ProfileCard.css";
import { DataContext } from "../../../contexts/DataContext";
import { AuthContext } from "../../../contexts/AuthContext";

export default function ProfileCard({ user }) {
  const { user: currentUser } = useContext(AuthContext);
  const { dataDispatch } = useContext(DataContext);
  const { _id, name, username, followers, following } = user;

  const isFollowed = () =>
    user.followers.some(({ username }) => username === currentUser.username);

  return (
    <div>
      <h3>{name}</h3>
      <h3>@{username}</h3>
      <p>Followers: {followers.length}</p>
      <p>Following : {following.length}</p>
      {username !== "faheemk237" &&
        (isFollowed() ? (
          <button onClick={() => unfollowUser(_id, dataDispatch)}>
            Unfollow
          </button>
        ) : (
          <button onClick={() => followUser(_id, dataDispatch)}>Follow</button>
        ))}
    </div>
  );
}
