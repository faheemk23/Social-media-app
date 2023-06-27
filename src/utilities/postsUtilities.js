import axios from "axios";
import { toast } from "react-hot-toast";
import { v4 as uuid } from "uuid";

import { formatDate } from "../backend/utils/authUtils";

export async function getAllPosts(dataDispatch) {
  try {
    const res = await axios.get(`/api/posts`);
    dataDispatch({ type: "set-posts", payload: res.data.posts });
  } catch (e) {
    console.error(e.message);
  }
}

export async function getPost(postId, setPost, setLoading) {
  try {
    const res = await axios.get(`/api/posts/${postId}`);
    setPost(res.data.post);
  } catch (e) {
    console.error(e.message);
  } finally {
    setLoading(false);
  }
}

export async function getUserPosts(username, setUserPosts) {
  try {
    const res = await axios.get(`/api/posts/user/${username}`);
    setUserPosts(res.data.posts);
  } catch (e) {
    console.error(e.message);
  }
}

export async function deletePost(postId, dataDispatch) {
  const encodedToken = localStorage.getItem("token");
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

export async function createPost(user, text, imgArr, videoUrl, dataDispatch) {
  const encodedToken = localStorage.getItem("token");
  const postData = {
    _id: uuid(),
    content: text,
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    images: imgArr,
    video: videoUrl,
    username: user.username,
    name: user.name,
    createdAt: formatDate(),
    updatedAt: formatDate(),
  };
  try {
    const res = await axios.post(
      `/api/posts`,
      {
        postData,
      },
      {
        headers: { authorization: encodedToken },
      }
    );
    dataDispatch({ type: "set-posts", payload: res.data.posts });
    toast.success("Feed Updated!");
  } catch (e) {
    console.error(e.message);
  }
}

export async function likePost(postId, dataDispatch) {
  const encodedToken = localStorage.getItem("token");
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
  const encodedToken = localStorage.getItem("token");
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

// Uploading assets on Cloudinary

export async function uploadImage(image) {
  const CLOUDINARY_URL =
    "https://api.cloudinary.com/v1_1/dlzwbrjjs/image/upload";

  const CLOUDINARY_UPLOAD_PRESET = "s6n0g1p0";

  const file = image;
  const formData = new FormData();

  formData.append("file", file);
  formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
  formData.append("folder", "sapphire");
  console.log("add preset");

  return fetch(CLOUDINARY_URL, {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => console.error(err));
}

export async function uploadVideo(video) {
  const CLOUDINARY_URL =
    "https://api.cloudinary.com/v1_1/dlzwbrjjs/video/upload";
  const CLOUDINARY_UPLOAD_PRESET = "z9yev2y2";
  const file = video;
  const formData = new FormData();

  formData.append("file", file);
  formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
  console.log("add preset");

  return fetch(CLOUDINARY_URL, {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => console.error(err));
}

// export const keyValidation = (keyPressed) => {
//   if (
//     keyPressed.length === 1 &&
//     keyPressed.charCodeAt(0) >= 32 &&
//     keyPressed.charCodeAt(0) <= 127
//   ) {
//     return true;
//   } else {
//     return false;
//   }
// };

// export const handleStringInputWithAddedNewLine = (prevString, keyPressed) => {
//   if (keyPressed === "Enter") {
//     return prevString.concat("\n");
//   } else if (keyPressed === "Backspace") {
//     return prevString.slice(0, -1);
//   } else {
//     if (!keyValidation(keyPressed)) {
//       return prevString;
//     } else {
//       return prevString.concat(keyPressed);
//     }
//   }
// };
