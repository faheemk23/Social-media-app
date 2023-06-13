import { useContext, useEffect, useState } from "react";
import "./PostCard.css";
import {
  deletePost,
  dislikePost,
  likePost,
} from "../../../utilities/postsUtilities";
import { DataContext } from "../../../contexts/DataContext";
import {
  addToBookmark,
  removeFromBookmark,
} from "../../../utilities/bookmarkUtilities";
import dayjs from "dayjs";
import { followUser, unfollowUser } from "../../../utilities/userUtilities";
import { PrivateDataContext } from "../../../contexts/PrivateDataContext";
import { useNavigate } from "react-router-dom";

export default function PostCard({ post }) {
  const [showEllipsisContent, setShowEllipsisContent] = useState(false);

  const { dataState, dataDispatch } = useContext(DataContext);
  const { privateDataState, privateDataDispatch } =
    useContext(PrivateDataContext);

  const navigate = useNavigate();

  const { _id, content, name, username, likes, createdAt, comments } = post;

  const { bookmarks } = privateDataState;

  const { users } = dataState;

  const { likeCount, likedBy } = likes;

  const isLiked = () =>
    likedBy.some(({ username }) => username === "faheemk237");

  const isBookmarked = (postId) => bookmarks.some((_id) => _id === postId);

  const postUser = users.find(
    ({ username: currUser }) => currUser === username
  );

  const currentUser = JSON.parse(localStorage.getItem("userData"));

  const { avatar } = postUser ?? {};

  const getTimeStamp = () => {
    const currentTime = dayjs();
    const difference = currentTime.diff(createdAt, "hours");
    return difference >= 24
      ? dayjs(createdAt).format("D MMM")
      : dayjs(createdAt).fromNow();
  };

  const hideEllipsisContentToggle = (e) => {
    e.stopPropagation();
    setShowEllipsisContent(true);
  };
  const isFollowed = () =>
    postUser.followers.some(
      ({ username }) => username === currentUser.username
    );

  useEffect(() => {
    document.addEventListener(
      "mousedown",
      () => {
        setShowEllipsisContent(false);
      },
      []
    );
  });

  return (
    <article
      className="post-card"
      onClick={() => setShowEllipsisContent(false)}
    >
      <img
        src={avatar}
        alt="user-image"
        className="user-avatar"
        height="40px"
        width="40px"
      />
      <section className="post-text">
        <span className="post-name">{name}</span>
        <span className="post-username">@{username}</span>
        <span className="post-timestamp"> · {getTimeStamp()}</span>
        <p className="post-content">{content}</p>
        <div className="post-icons">
          {isLiked() ? (
            <div onClick={() => dislikePost(_id, dataDispatch)}>
              <i className="fa-solid fa-heart"></i>
              <span className="post-icon-text">{likeCount}</span>
            </div>
          ) : (
            <div onClick={() => likePost(_id, dataDispatch)}>
              <i className="fa-regular fa-heart"></i>
              <span className="post-icon-text">{likeCount}</span>
            </div>
          )}

          <div>
            <i className="fa-regular fa-comment"></i>
            <span className="post-icon-text">{comments.length}</span>
          </div>

          {isBookmarked(_id) ? (
            <div onClick={() => removeFromBookmark(_id, privateDataDispatch)}>
              <i className="fa-solid fa-bookmark"></i>
            </div>
          ) : (
            <div onClick={() => addToBookmark(_id, privateDataDispatch)}>
              <i className="fa-regular fa-bookmark"></i>
            </div>
          )}
        </div>
        <div
          className="post-ellipsis-container pointer"
          onClick={hideEllipsisContentToggle}
        >
          {!showEllipsisContent && <i className="fa-solid fa-ellipsis"></i>}
          {showEllipsisContent && (
            <div className="post-ellipsis-content">
              {currentUser ? (
                <>
                  {currentUser.username === username ? (
                    <div>
                      <div>
                        {" "}
                        <i className="fa-regular fa-pen-to-square"></i> Edit
                      </div>
                      <div onMouseDown={() => deletePost(_id, dataDispatch)}>
                        <i className="fa-solid fa-trash"></i> Delete
                      </div>
                    </div>
                  ) : isFollowed() ? (
                    <div
                      onMouseDown={() =>
                        unfollowUser(postUser._id, dataDispatch)
                      }
                    >
                      <i className="fa-solid fa-user-minus"></i> Unfollow{" "}
                      <span>@{postUser.username}</span>
                    </div>
                  ) : (
                    <div
                      onMouseDown={() => followUser(postUser._id, dataDispatch)}
                    >
                      <i className="fa-solid fa-user-plus"></i> Follow{" "}
                      <span>@{postUser.username}</span>
                    </div>
                  )}
                </>
              ) : (
                <div onMouseDown={() => navigate("/login")}>
                  Login for more options
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </article>
  );
}
