import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { DataContext } from "../../contexts/DataContext";
import {
  addToBookmark,
  removeFromBookmark,
} from "../../utilities/bookmarkUtilities";
import { dislikePost, likePost } from "../../utilities/postsUtilities";
import "./PostIcons.css";

export default function PostIcons({ _id, likes, comments, inSinglePost }) {
  const {
    dataDispatch,
    dataState: { bookmarks },
  } = useContext(DataContext);
  const { user } = useContext(AuthContext);

  const { likeCount, likedBy } = likes ?? {};

  const isLiked = () =>
    likedBy.some(({ username }) => username === user.username);

  const isBookmarked = (postId) => bookmarks.some((_id) => _id === postId);

  return (
    <div
      className={inSinglePost ? "post-icons single-post-icons" : "post-icons"}
    >
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
      <div>
        <i className="fa-solid fa-arrow-up-from-bracket"></i>
      </div>
    </div>
  );
}
