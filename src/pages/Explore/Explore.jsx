import { useContext } from "react";

import { PostCard } from "../../components/cards/PostCard/PostCard";
import { ExploreHeader } from "../../components/headers/ExploreHeader";
import { DataContext } from "../../contexts/DataContext";
import { sortByLatest } from "../../utilities/postsUtilities";
import "./Explore.css";

export function Explore() {
  const { dataState } = useContext(DataContext);

  const latestPosts = sortByLatest(dataState.posts);

  return (
    <div className="pages-padding-bottom">
      <ExploreHeader />
      {latestPosts.map((post) => (
        <PostCard key={post._id} post={post} />
      ))}
    </div>
  );
}
