import axios from "axios";
import { toast } from "react-hot-toast";

const encodedToken = localStorage.getItem("token");

export async function getAllPosts(dataDispatch) {
  try {
    const res = await axios.get(`/api/posts`);
    dataDispatch({ type: "set-posts", payload: res.data.posts });
  } catch (e) {
    console.error(e.message);
  }
}

export async function deletePost(postId, dataDispatch) {
  try {
    const res = await axios.delete(`/api/posts/${postId}`, {
      headers: { authorization: encodedToken },
    });
    dataDispatch({ type: "set-posts", payload: res.data.posts });
    toast.success("Deleted successfully.");
  } catch (e) {
    console.error(e.message);
  }
}

export async function likePost(postId, dataDispatch) {
  try {
    const res = await axios.post(
      `/api/posts/like/${postId}`,
      {},
      {
        headers: { authorization: encodedToken },
      }
    );
    dataDispatch({ type: "set-posts", payload: res.data.posts });
    toast.success("Liked!");
  } catch (e) {
    console.error(e.message);
  }
}

export async function dislikePost(postId, dataDispatch) {
  try {
    const res = await axios.post(
      `/api/posts/dislike/${postId}`,
      {},
      {
        headers: { authorization: encodedToken },
      }
    );
    dataDispatch({ type: "set-posts", payload: res.data.posts });
    toast.success("Disliked!");
  } catch (e) {
    console.error(e.message);
  }
}
