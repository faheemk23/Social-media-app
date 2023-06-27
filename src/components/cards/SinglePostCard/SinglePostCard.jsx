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
import { ProfileSmall } from "../../ProfileSmall/ProfileSmall";
import "./SinglePostCard.css";

export function SinglePostCard({ post }) {
  const [showEllipsisContent, setShowEllipsisContent] = useState(false);

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
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  return (
    <article className="single-post-card ">
      <div
        className="pointer"
        key={_id}
        onClick={() => navigate(`/profile/${username}`)}
      >
        <ProfileSmall
          avatar={avatar}
          name={postUser.name}
          username={username}
        />
      </div>

      <section className="post-text">
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
              onClick={() => dislikePost(_id, dataDispatch)}
            >
              <i className="fa-solid fa-heart "></i>
              <span className="post-icon-text ">{likeCount}</span>
            </div>
          ) : (
            <div
              className="hover-pink"
              onClick={() => likePost(_id, dataDispatch)}
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
            <div onClick={() => removeFromBookmark(_id, dataDispatch)}>
              <i className="fa-solid fa-bookmark primary-color"></i>
            </div>
          ) : (
            <div onClick={() => addToBookmark(_id, dataDispatch)}>
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
                      <div>
                        {" "}
                        <i className="fa-regular fa-pen-to-square"></i> Edit
                      </div>
                      <div
                        onMouseDown={() => {
                          deletePost(_id, dataDispatch);
                          setTimeout(() => {
                            navigate(-1);
                          }, 400);
                        }}
                      >
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
