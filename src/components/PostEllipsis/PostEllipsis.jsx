import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { DataContext } from "../../contexts/DataContext";
import { deletePost } from "../../utilities/postsUtilities";
import { followUser, unfollowUser } from "../../utilities/userUtilities";
import "./PostEllipsis.css";

export default function PostEllipsis({
  _id,
  username,
  inSinglePost,
  setShowCreatePostModal,
}) {
  const {
    dataDispatch,
    dataState: { users },
  } = useContext(DataContext);
  const { user, mode } = useContext(AuthContext);
  const [showEllipsisContent, setShowEllipsisContent] = useState(false);

  const navigate = useNavigate();

  const currentUser = JSON.parse(localStorage.getItem("userData"));

  const postUser = users.find(
    ({ username: currUser }) => currUser === username
  );

  const isFollowed = () =>
    postUser.followers.some(({ username }) => username === user.username);

  const hideEllipsisContentToggle = (e) => {
    e.stopPropagation();
    setShowEllipsisContent(true);
  };

  const handleBtnDelete = () => {
    deletePost(_id, dataDispatch);
    if (inSinglePost) {
      setTimeout(() => navigate(-1), 500);
    }
  };

  useEffect(() => {
    const handleOutsideClick = () => {
      setShowEllipsisContent(false);
    };
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);
  return (
    <div
      className="post-ellipsis-container pointer"
      onClick={hideEllipsisContentToggle}
    >
      {!showEllipsisContent && <i className="fa-solid fa-ellipsis"></i>}
      {showEllipsisContent && (
        <div
          className={
            mode === "dark"
              ? "post-ellipsis-content black-post-ellipsis-content"
              : "post-ellipsis-content"
          }
        >
          {currentUser ? (
            <>
              {currentUser.username === username ? (
                <div className="post-ellipsis-items">
                  <div
                    className={
                      mode === "dark"
                        ? "post-ellipsis-item black-post-ellipsis-item"
                        : "post-ellipsis-item"
                    }
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowCreatePostModal(true);
                    }}
                  >
                    {" "}
                    <i className="fa-regular fa-pen-to-square"></i>{" "}
                    <span>Edit</span>
                  </div>
                  <div
                    className={
                      mode === "dark"
                        ? "post-ellipsis-item black-post-ellipsis-item"
                        : "post-ellipsis-item"
                    }
                    onMouseDown={handleBtnDelete}
                  >
                    <i className="fa-solid fa-trash"></i> <span>Delete</span>
                  </div>
                </div>
              ) : isFollowed() ? (
                <div className="post-ellipsis-items">
                  <div
                    className={
                      mode === "dark"
                        ? "post-ellipsis-item black-post-ellipsis-item"
                        : "post-ellipsis-item"
                    }
                    onMouseDown={() => unfollowUser(postUser._id, dataDispatch)}
                  >
                    <i className="fa-solid fa-user-minus"></i>
                    <span>Unfollow @{postUser.username}</span>
                  </div>
                </div>
              ) : (
                <div className="post-ellipsis-items">
                  <div
                    className={
                      mode === "dark"
                        ? "post-ellipsis-item black-post-ellipsis-item"
                        : "post-ellipsis-item"
                    }
                    onMouseDown={() => followUser(postUser._id, dataDispatch)}
                  >
                    <i className="fa-solid fa-user-plus"></i>
                    <span>Follow @{postUser.username}</span>
                  </div>
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
  );
}
