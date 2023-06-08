import { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";
import "./Explore.css";
import PostCard from "../../components/cards/PostCard/PostCard";

export function Explore() {
  const { dataState } = useContext(DataContext);

  return (
    <div>
      <h1>Explore</h1>
      {dataState.posts.map((post) => (
        <PostCard key={post._id} post={post} />
      ))}
    </div>
  );
}
