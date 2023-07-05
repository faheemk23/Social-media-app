import dayjs from "dayjs";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../../../contexts/AuthContext";
import { DataContext } from "../../../contexts/DataContext";
import { followUser, unfollowUser } from "../../../utilities/userUtilities";
import EditProfileModal from "../../modals/EditProfileModal/EditProfileModal";
import { PostCard } from "../PostCard/PostCard";
import "./ProfileCard.css";

export function ProfileCard({ user, userPosts, likedPosts }) {
  const [showEditProfileModal, setShowEditProfileModal] = useState(false);
  const [showPosts, setShowPosts] = useState("tweets");

  const { user: currentUser } = useContext(AuthContext);
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

  const postToShow = showPosts === "tweets" ? userPosts : likedPosts;

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

      <div className="relative profile-text">
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
        <div className="profile-card-name">{name}</div>
        <div className="profile-card-username">@{username}</div>
        <p className="profile-card-bio">{bio}</p>
        <div className="profile-card-info">
          {location && (
            <div>
              <i className="fa-solid fa-location-dot"></i> {location}{" "}
            </div>
          )}
          <div>
            <i className="fa-solid fa-link"></i>{" "}
            <Link className="link" to={websiteLink} target="_blank">
              {website}
            </Link>{" "}
          </div>
          <div>
            <i className="fa-solid fa-calendar-days"></i> Joined {formattedDate}
          </div>
        </div>

        <div className="profile-card-follow-info">
          <div>
            <span className="profile-card-follow-info-number">
              {following?.length}
            </span>{" "}
            Following{" "}
          </div>
          <div>
            <span className="profile-card-follow-info-number">
              {followers?.length}
            </span>{" "}
            Followers
          </div>
        </div>
      </div>
      <div>
        <div className="filters">
          <div
            onClick={() => setShowPosts("tweets")}
            className="filter-item-container"
          >
            <div className="filter-item">
              <span>Tweets</span>
              <div
                className={
                  showPosts === "tweets" ? "line-under-active-filter" : ""
                }
              ></div>
            </div>
          </div>
          <div
            onClick={() => setShowPosts("likes")}
            className="filter-item-container"
          >
            <div className="filter-item">
              <span>Likes</span>
              <div
                className={
                  showPosts === "likes" ? "line-under-active-filter" : ""
                }
              ></div>
            </div>
          </div>
        </div>
        {postToShow.map((post) => (
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
