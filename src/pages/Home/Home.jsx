import { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";
import PostCard from "../../components/cards/PostCard/PostCard";

import "./Home.css";
import HomeHeader from "../../components/headers/HomeHeader";
import PostInput from "../../components/PostInput/PostInput";

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
  const userPosts = dataState.posts.filter(
    ({ username }) => username === currentUser?.username
  );

  const homePosts = [...postsOfFollowed, ...userPosts];
  return (
    <section>
      <HomeHeader />
      <PostInput />
      {homePosts?.map((post) => (
        <PostCard key={post._id} post={post} />
      ))}
    </section>
  );
}
