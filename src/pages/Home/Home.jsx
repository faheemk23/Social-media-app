import { useContext } from "react";
import "./Home.css";
import { DataContext } from "../../contexts/DataContext";
import PostCard from "../../components/cards/PostCard/PostCard";

import HomeHeader from "../../components/headers/HomeHeader";

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
      <HomeHeader />
      {postsOfFollowed.map((post) => (
        <PostCard key={post._id} post={post} />
      ))}
    </section>
  );
}
