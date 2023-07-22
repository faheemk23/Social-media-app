import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { SinglePostCard } from "../../components/cards/SinglePostCard/SinglePostCard";
import { Loader } from "../../components/modals/Loader/Loader";
import { DataContext } from "../../contexts/DataContext";
import { getPost } from "../../utilities/postsUtilities";
import "./Post.css";

export function Post() {
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);

  const {
    dataState: { posts },
  } = useContext(DataContext);

  const { postId } = useParams();

  useEffect(() => {
    getPost(postId, setPost, setLoading);
  }, [posts]);

  return (
    <div className="pages-padding-bottom">
      {loading ? <Loader /> : <SinglePostCard post={post} />}
    </div>
  );
}
