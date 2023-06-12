import { useContext, useEffect } from "react";
import "./Home.css";
import { getAllPosts, likePost } from "../../utilities/postsUtilities";
import { DataContext } from "../../contexts/DataContext";
import PostCard from "../../components/cards/PostCard/PostCard";
import { addToBookmark } from "../../utilities/bookmarkUtilities";
import { AuthContext } from "../../contexts/AuthContext";
import { NavLink } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";

export function Home() {
  const { dataState } = useContext(DataContext);

  const getUser = localStorage.getItem("userData");

  const user = getUser ? JSON.parse(getUser) : {};

  const currentUser = dataState.users.find(
    ({ username }) => username === user.username
  );

  const postsOfFollowed = dataState.posts.filter(
    ({ username: checkUserName }) =>
      currentUser?.following.some(({ username }) => username === checkUserName)
  );

  return (
    <section>
      Home
      <h1>User</h1>
      <div>Name: {user.name}</div>
      <h1>Posts</h1>
      {postsOfFollowed.map((post) => (
        <PostCard key={post._id} post={post} />
      ))}
    </section>
  );
}
