import axios from "axios";

export async function getAllPosts(postsDispatch) {
  try {
    const res = await axios.get(`/api/posts`);
    postsDispatch({ type: "set", payload: res.data.posts });
  } catch (e) {
    console.error(e);
  }
}
