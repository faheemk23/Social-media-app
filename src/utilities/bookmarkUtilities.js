import axios from "axios";

export async function getAllBookmarks(dataDispatch) {
  const encodedToken = localStorage.getItem("token");
  try {
    const res = await axios.get("/api/users/bookmark", {
      headers: { authorization: encodedToken },
    });
    dataDispatch({ type: "set-bookmarks", payload: res.data.bookmarks });
  } catch (e) {
    console.error(e.message);
  }
}

export async function addToBookmark(postId, dataDispatch) {
  const encodedToken = localStorage.getItem("token");
  try {
    const res = await axios.post(
      `/api/users/bookmark/${postId}`,
      {},
      {
        headers: { authorization: encodedToken },
      }
    );
    dataDispatch({ type: "set-bookmarks", payload: res.data.bookmarks });
  } catch (e) {
    console.error(e.message);
  }
}

export async function removeFromBookmark(postId, dataDispatch) {
  const encodedToken = localStorage.getItem("token");
  try {
    const res = await axios.post(
      `/api/users/remove-bookmark/${postId}`,
      {},
      {
        headers: { authorization: encodedToken },
      }
    );
    dataDispatch({ type: "set-bookmarks", payload: res.data.bookmarks });
  } catch (e) {
    console.error(e.message);
  }
}
