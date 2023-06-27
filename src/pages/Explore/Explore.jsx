import { useContext } from "react";

import { PostCard } from "../../components/cards/PostCard/PostCard";
import { ExploreHeader } from "../../components/headers/ExploreHeader";
import { DataContext } from "../../contexts/DataContext";
import "./Explore.css";

export function Explore() {
  const { dataState } = useContext(DataContext);

  return (
    <div>
      <ExploreHeader />
      {dataState.posts.map((post) => (
        <PostCard key={post._id} post={post} />
      ))}
    </div>
  );
}
