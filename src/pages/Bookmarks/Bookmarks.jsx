import { useContext } from "react";

import { PostCard } from "../../components/cards/PostCard/PostCard";
import { BookmarksHeader } from "../../components/headers/BookmarksHeader";
import { DataContext } from "../../contexts/DataContext";

import "./Bookmarks.css";

export function Bookmarks({}) {
  const { dataState } = useContext(DataContext);

  const getBookmarkPost = (postId) =>
    dataState.posts.find(({ _id }) => _id === postId);

  return (
    <div>
      <BookmarksHeader />
      <div className="bookmarks-posts">
        {dataState.bookmarks.map((postId) => (
          <PostCard key={postId} post={getBookmarkPost(postId)} inBookmark />
        ))}
      </div>
    </div>
  );
}
