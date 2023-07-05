import { useContext, useState } from "react";
import { PostCard } from "../../components/cards/PostCard/PostCard";
import { DataContext } from "../../contexts/DataContext";

import PostInput from "../../components/PostInput/PostInput";
import { HomeHeader } from "../../components/headers/HomeHeader";
import "./Home.css";

export function Home() {
  const [filter, setFilter] = useState("");
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

  let filteredPosts = homePosts;

  // filtering posts

  if (filter === "trending") {
    filteredPosts = filteredPosts.sort(
      (a, b) => b.likes.likeCount - a.likes.likeCount
    );
  } else if (filter === "latest") {
    filteredPosts = filteredPosts.sort((a, b) => {
      const dateA = new Date(a.createdAt);
      const dateB = new Date(b.createdAt);
      return dateB - dateA;
    });
  }

  return (
    <section>
      <HomeHeader filter={filter} setFilter={setFilter} />
      <div className="flex-column-reverse">
        <div>
          {filteredPosts?.map((post) => (
            <PostCard key={post._id} post={post} />
          ))}
        </div>

        <PostInput />
      </div>
    </section>
  );
}
