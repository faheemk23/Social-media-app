import dayjs from "dayjs";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../../../contexts/AuthContext";
import { DataContext } from "../../../contexts/DataContext";
import { followUser, unfollowUser } from "../../../utilities/userUtilities";
import EditProfileModal from "../../modals/EditProfileModal/EditProfileModal";
import { PostCard } from "../PostCard/PostCard";
import "./ProfileCard.css";

export function ProfileCard({ user, userPosts }) {
  const { user: currentUser } = useContext(AuthContext);
  const [showEditProfileModal, setShowEditProfileModal] = useState(false);
  const { dataDispatch } = useContext(DataContext);
  const {
    _id,
    name,
    username,
    avatar,
    cover,
    followers,
    following,
    bio,
    location,
    website,
    createdAt,
  } = user;

  const isFollowed = () =>
    user?.followers.some(({ username }) => username === currentUser.username);

  const formattedDate = `${dayjs(createdAt).format("MMM")} ${dayjs(
    createdAt
  ).format("YYYY")}`;

  const websiteLink = website?.startsWith("http")
    ? website
    : `https://${website}`;

  return (
    <div className="relative">
      <img src={cover} alt="cover" height="200px" width="100%" />
      <img
        src={avatar}
        alt="user-image"
        className="user-avatar profile-avatar"
        height="140px"
        width="140px"
      />

      <div className="relative profile-info">
        {username === currentUser.username ? (
          <button
            className="btn btn-secondary top-right"
            onClick={() => setShowEditProfileModal(true)}
          >
            Edit Profile
          </button>
        ) : isFollowed() ? (
          <button
            className="btn btn-secondary top-right"
            onClick={() => unfollowUser(_id, dataDispatch)}
          >
            Following
          </button>
        ) : (
          <button
            className="btn btn-primary top-right"
            onClick={() => followUser(_id, dataDispatch)}
          >
            Follow
          </button>
        )}
        <h3>{name}</h3>
        <h3>@{username}</h3>
        <p>{bio}</p>
        <div>
          {location && (
            <>
              <i className="fa-solid fa-location-dot"></i>
              {location}{" "}
            </>
          )}
          <i className="fa-solid fa-link"></i>{" "}
          <Link className="link" to={websiteLink} target="_blank">
            {website}
          </Link>{" "}
          <i className="fa-solid fa-calendar-days"></i>
          Joined {formattedDate}
        </div>
        <p>
          <span>{following?.length}</span> Following{" "}
          <span>{followers?.length}</span> Followers
        </p>
      </div>
      <div>
        <div className="filters">
          <div className="filter-item-container">
            <div className="filter-item">
              <span>Tweets</span>
              <div className="line-under-active-filter"></div>
            </div>
          </div>
          <div className="filter-item-container">
            <div className="filter-item">
              <span>Likes</span>
              <div className="line-under-active-filter"></div>
            </div>
          </div>
        </div>
        {userPosts.map((post) => (
          <PostCard id={post._id} post={post} />
        ))}
      </div>
      {showEditProfileModal && (
        <EditProfileModal
          user={user}
          setShowEditProfileModal={setShowEditProfileModal}
        />
      )}
    </div>
  );
}
