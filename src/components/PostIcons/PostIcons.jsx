import { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../contexts/AuthContext";
import { DataContext } from "../../contexts/DataContext";
import {
  addToBookmark,
  removeFromBookmark,
} from "../../utilities/bookmarkUtilities";
import { UnlikePost, likePost } from "../../utilities/postsUtilities";
import { SuggestAuth } from "../modals/SuggestAuth/SuggestAuth";
import "./PostIcons.css";

export default function PostIcons({ _id, likes, comments, inSinglePost }) {
  const [showSuggestAuth, setShowSuggestAuth] = useState(false);

  const {
    dataDispatch,
    dataState: { bookmarks },
  } = useContext(DataContext);
  const { user, loggedIn, mode } = useContext(AuthContext);

  const { likeCount, likedBy } = likes ?? {};

  const isLiked = () =>
    likedBy.some(({ username }) => username === user.username);

  const isBookmarked = (postId) => bookmarks.some((_id) => _id === postId);

  return (
    <div
      className={
        inSinglePost
          ? mode === "dark"
            ? "post-icons single-post-icons black-single-post-icons"
            : "post-icons single-post-icons"
          : mode === "dark"
          ? "post-icons black-icons"
          : "post-icons"
      }
    >
      {isLiked() ? (
        <div
          className="pink post-icon"
          onClick={(e) => {
            e.stopPropagation();
            if (!loggedIn) {
              setShowSuggestAuth(true);
              return;
            }
            UnlikePost(_id, dataDispatch);
          }}
        >
          <i className="fa-solid fa-heart"></i>
          <span className="post-icon-text ">{likeCount}</span>
        </div>
      ) : (
        <div
          className="hover-pink post-icon"
          onClick={(e) => {
            e.stopPropagation();
            if (!loggedIn) {
              setShowSuggestAuth(true);
              return;
            }
            likePost(_id, dataDispatch);
          }}
        >
          <i className="fa-regular fa-heart "></i>
          <span className="post-icon-text">{likeCount}</span>
        </div>
      )}

      <div className="post-icon">
        <i className="fa-regular fa-comment"></i>
        <span className="post-icon-text">{comments.length}</span>
      </div>

      {isBookmarked(_id) ? (
        <div
          className="post-icon"
          onClick={(e) => {
            e.stopPropagation();
            if (!loggedIn) {
              setShowSuggestAuth(true);
              return;
            }
            removeFromBookmark(_id, dataDispatch);
          }}
        >
          <i className="fa-solid fa-bookmark primary-color"></i>
        </div>
      ) : (
        <div
          className="post-icon"
          onClick={(e) => {
            e.stopPropagation();
            if (!loggedIn) {
              setShowSuggestAuth(true);
              return;
            }
            addToBookmark(_id, dataDispatch);
          }}
        >
          <i className="fa-regular fa-bookmark hover-primary-color"></i>
        </div>
      )}
      <div
        className="post-icon"
        onClick={(e) => {
          e.stopPropagation();
          navigator.clipboard.writeText(
            `https://social-media-app-gilt.vercel.app/post/${_id}`
          );
          toast.success("Copied to clipboard!");
        }}
      >
        <i className="fa-solid fa-arrow-up-from-bracket"></i>
      </div>
      {showSuggestAuth && (
        <SuggestAuth setShowSuggestAuth={setShowSuggestAuth} />
      )}
    </div>
  );
}
