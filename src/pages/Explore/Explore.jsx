import { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";
import "./Explore.css";
import PostCard from "../../components/cards/PostCard/PostCard";
import ExploreHeader from "../../components/headers/ExploreHeader";

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
