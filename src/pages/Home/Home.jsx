import { useContext, useEffect } from "react";
import "./Home.css";
import { getAllPosts } from "../../utilities/postsUtilities";
import { DataContext } from "../../contexts/DataContext";

export function Home() {
  const { postsState, postsDispatch } = useContext(DataContext);
  const userData = JSON.parse(localStorage.getItem("userData")) ?? {};

  useEffect(() => {
    getAllPosts(postsDispatch);
  }, []);
  console.log(postsState);
  return (
    <div>
      Home
      <h1>User</h1>
      <div>
        Name: {userData.firstName} {userData.lastName}{" "}
      </div>
      <h1>Posts</h1>
      {postsState.posts.map(({ _id, content, username }) => (
        <li key={_id}>
          {username} : {content}
        </li>
      ))}
    </div>
  );
}
