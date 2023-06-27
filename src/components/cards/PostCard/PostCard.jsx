import dayjs from "dayjs";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { AuthContext } from "../../../contexts/AuthContext";
import { DataContext } from "../../../contexts/DataContext";
import {
  addToBookmark,
  removeFromBookmark,
} from "../../../utilities/bookmarkUtilities";
import {
  deletePost,
  dislikePost,
  likePost,
} from "../../../utilities/postsUtilities";
import { followUser, unfollowUser } from "../../../utilities/userUtilities";
import PostImages from "../../PostImages/PostImages";
import "./PostCard.css";

export function PostCard({ post }) {
  const [showEllipsisContent, setShowEllipsisContent] = useState(false);
  const [showEditPost, setShowEditPost] = useState(false);

  const { dataState, dataDispatch } = useContext(DataContext);
  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  const {
    _id,
    content,
    name,
    username,
    likes,
    createdAt,
    comments,
    images,
    video,
    links,
  } = post;

  const { bookmarks } = dataState;

  const { users } = dataState;

  const { likeCount, likedBy } = likes ?? {};

  const isLiked = () =>
    likedBy.some(({ username }) => username === user.username);

  const isBookmarked = (postId) => bookmarks.some((_id) => _id === postId);

  const postUser = users.find(
    ({ username: currUser }) => currUser === username
  );

  console.log({ postUser });

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

  const navigateToProfile = (e) => {
    e.stopPropagation();
    navigate(`/profile/${username}`);
  };

  const contentLines = content.split("\n");

  useEffect(() => {
    const handleOutsideClick = () => {
      setShowEllipsisContent(false);
    };
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

  return (
    <article
      className="post-card pointer"
      // onClick={() => setShowEllipsisContent(false)}
      onClick={() => navigate(`/post/${_id}`)}
    >
      <img
        src={avatar}
        alt="user-image"
        className="user-avatar pointer"
        height="40px"
        width="40px"
        onClick={navigateToProfile}
      />
      <section className="post-text">
        <span className="post-name pointer" onClick={navigateToProfile}>
          {postUser.name}
        </span>
        <span className="post-username pointer" onClick={navigateToProfile}>
          @{username}
        </span>
        <span className="post-timestamp"> · {getTimeStamp()}</span>
        <div className="post-content">
          {contentLines.map((line, index) => (
            <div key={index} className={line === "" ? "empty-line" : ""}>
              {line}
            </div>
          ))}
        </div>
        {links &&
          Object?.entries(links)?.map(([label, link]) => (
            <div>
              {label} -
              <Link className="link" to={link}>
                {link}
              </Link>
            </div>
          ))}
        {!video && <PostImages images={images} />}
        {video && (
          <div className="relative ">
            <video
              className="post-video"
              src={video}
              controls
              autoPlay
              height={"100%"}
              width={"100%"}
            />
          </div>
        )}
        <div className="post-icons">
          {isLiked() ? (
            <div
              className="pink"
              onClick={(e) => {
                e.stopPropagation();
                dislikePost(_id, dataDispatch);
              }}
            >
              <i className="fa-solid fa-heart "></i>
              <span className="post-icon-text ">{likeCount}</span>
            </div>
          ) : (
            <div
              className="hover-pink"
              onClick={(e) => {
                e.stopPropagation();
                likePost(_id, dataDispatch);
              }}
            >
              <i className="fa-regular fa-heart "></i>
              <span className="post-icon-text">{likeCount}</span>
            </div>
          )}

          <div>
            <i className="fa-regular fa-comment"></i>
            <span className="post-icon-text">{comments.length}</span>
          </div>

          {isBookmarked(_id) ? (
            <div
              onClick={(e) => {
                e.stopPropagation();
                removeFromBookmark(_id, dataDispatch);
              }}
            >
              <i className="fa-solid fa-bookmark primary-color"></i>
            </div>
          ) : (
            <div
              onClick={(e) => {
                e.stopPropagation();
                addToBookmark(_id, dataDispatch);
              }}
            >
              <i className="fa-regular fa-bookmark hover-primary-color"></i>
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
                      <div onClick={() => setShowEditPost(true)}>
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
