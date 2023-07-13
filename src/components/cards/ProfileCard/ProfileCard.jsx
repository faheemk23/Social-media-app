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

  const { user: currentUser, mode } = useContext(AuthContext);
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
    isVerified,
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
    <div className="relative ">
      <img
        className="profile-cover"
        src={cover}
        alt="cover"
        height="200px"
        width="100%"
      />
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
            className={
              mode === "dark"
                ? "btn btn-secondary top-right black-btn-edit-profile"
                : "btn btn-secondary top-right"
            }
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
        <div className="profile-card-name">
          {name}
          {isVerified && (
            <img
              src="https://ik.imagekit.io/faheem/Social-media/verify.png?updatedAt=1688800693531"
              alt="verifed"
              height="20px"
              width="20px"
            />
          )}
        </div>
        <div
          className={
            mode === "dark"
              ? "profile-card-username black-profile-light-black"
              : "profile-card-username"
          }
        >
          @{username}
        </div>
        <p className="profile-card-bio">{bio}</p>
        <div
          className={
            mode === "dark"
              ? "profile-card-info black-profile-light-black"
              : "profile-card-info"
          }
        >
          {location && (
            <div>
              <i className="fa-solid fa-location-dot"></i> {location}{" "}
            </div>
          )}
          {website && (
            <div>
              <i className="fa-solid fa-link"></i>{" "}
              <Link className="link" to={websiteLink} target="_blank">
                {website}
              </Link>{" "}
            </div>
          )}
          <div>
            <i className="fa-solid fa-calendar-days"></i> Joined {formattedDate}
          </div>
        </div>

        <div
          className={
            mode === "dark"
              ? "profile-card-follow-info black-profile-light-black"
              : "profile-card-follow-info"
          }
        >
          <div>
            <span
              className={
                mode === "dark"
                  ? "profile-card-follow-info-number black-profile-card-follow-info-number"
                  : "profile-card-follow-info-number "
              }
            >
              {following?.length}
            </span>{" "}
            Following{" "}
          </div>
          <div>
            <span
              className={
                mode === "dark"
                  ? "profile-card-follow-info-number black-profile-card-follow-info-number"
                  : "profile-card-follow-info-number "
              }
            >
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
            className={
              mode === "dark"
                ? "filter-item-container pointer black-hover"
                : "filter-item-container pointer"
            }
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
            className={
              mode === "dark"
                ? "filter-item-container pointer black-hover"
                : "filter-item-container pointer"
            }
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
        <div className="profile-posts">
          {postToShow.map((post) => (
            <PostCard id={post._id} post={post} />
          ))}
        </div>
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
