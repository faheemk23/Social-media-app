import axios from "axios";

const encodedToken = localStorage.getItem("token");

export async function getAllBookmarks(dataDispatch) {
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
