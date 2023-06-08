import { useContext, useEffect } from "react";
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

export default function PostCard({ post }) {
  const { dataState, dataDispatch } = useContext(DataContext);
  const { _id, content, firstName, lastName, username, likes } = post;
  // const userData = JSON.parse(localStorage.getItem("userData"));

  const { likeCount, likedBy, dislikedBy } = likes;

  const isLiked = () =>
    likedBy.some(({ username }) => username === "faheemk237");

  const isBookmarked = (postId) =>
    dataState.bookmarks.some((_id) => _id === postId);

  return (
    <article className="post-card">
      <h2>
        {firstName} {lastName}
      </h2>
      <h3>@{username}</h3>
      <p>{content}</p>
      <div>Likes :{likeCount}</div>
      <div>Dislikes : {dislikedBy.length}</div>
      {isLiked() ? (
        <button onClick={() => dislikePost(_id, dataDispatch)}>Dislike</button>
      ) : (
        <button onClick={() => likePost(_id, dataDispatch)}>Like</button>
      )}

      <button>Comment</button>
      {isBookmarked(_id) ? (
        <button onClick={() => removeFromBookmark(_id, dataDispatch)}>
          Remove from bookmark
        </button>
      ) : (
        <button onClick={() => addToBookmark(_id, dataDispatch)}>
          Add to Bookmark
        </button>
      )}
      {"faheemk237" === username && (
        <div>
          <button>Edit</button>
          <button onClick={() => deletePost(_id, dataDispatch)}>Delete</button>
        </div>
      )}
    </article>
  );
}
