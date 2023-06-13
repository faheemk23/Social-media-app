import { useContext, useEffect } from "react";
import "./Bookmarks.css";
import { getAllBookmarks } from "../../utilities/bookmarkUtilities";
import { DataContext } from "../../contexts/DataContext";
import PostCard from "../../components/cards/PostCard/PostCard";
import { PrivateDataContext } from "../../contexts/PrivateDataContext";
import BookmarksHeader from "../../components/headers/BookmarksHeader";

export function Bookmarks() {
  const { dataState, dataDispatch } = useContext(DataContext);
  const { privateDataState, privateDataDispatch } =
    useContext(PrivateDataContext);

  useEffect(() => {
    getAllBookmarks(privateDataDispatch);
  }, []);

  const getBookmarkPost = (postId) =>
    dataState.posts.find(({ _id }) => _id === postId);

  return (
    <div>
      <BookmarksHeader />
      {privateDataState.bookmarks.map((postId) => (
        <PostCard key={postId} post={getBookmarkPost(postId)} inBookmark />
      ))}
    </div>
  );
}
