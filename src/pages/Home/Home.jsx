import { useContext, useEffect } from "react";
import "./Home.css";
import { getAllPosts, likePost } from "../../utilities/postsUtilities";
import { DataContext } from "../../contexts/DataContext";
import PostCard from "../../components/cards/PostCard/PostCard";
import { addToBookmark } from "../../utilities/bookmarkUtilities";
import { AuthContext } from "../../contexts/AuthContext";

export function Home() {
  const { dataState } = useContext(DataContext);
  const { user } = useContext(AuthContext);

  const currentUser = dataState.users.find(
    ({ username }) => username === user.username
  );

  const postsOfFollowed = dataState.posts.filter(
    ({ username: checkUserName }) =>
      currentUser?.following.some(({ username }) => username === checkUserName)
  );

  return (
    <div>
      Home
      <h1>User</h1>
      <div>
        Name: {user.firstName} {user.lastName}{" "}
      </div>
      <h1>Posts</h1>
      {postsOfFollowed.map((post) => (
        <PostCard key={post._id} post={post} />
      ))}
    </div>
  );
}
