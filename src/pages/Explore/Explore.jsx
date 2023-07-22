import { useContext } from "react";

import { PostCard } from "../../components/cards/PostCard/PostCard";
import { ExploreHeader } from "../../components/headers/ExploreHeader";
import { AuthContext } from "../../contexts/AuthContext";
import { DataContext } from "../../contexts/DataContext";
import "./Explore.css";

export function Explore() {
  const { loggedIn } = useContext(AuthContext);
  const { dataState } = useContext(DataContext);

  const latestPosts = [...dataState.posts].sort((a, b) => {
    const dateA = new Date(a.createdAt);
    const dateB = new Date(b.createdAt);
    return dateB - dateA;
  });

  return (
    <div className="pages-padding-bottom">
      <ExploreHeader />
      {latestPosts.map((post) => (
        <PostCard key={post._id} post={post} />
      ))}
    </div>
  );
}
