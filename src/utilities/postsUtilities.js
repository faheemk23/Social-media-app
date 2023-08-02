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

export async function UnlikePost(postId, dataDispatch) {
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
    toast.success("Unliked!");
  } catch (e) {
    console.error(e.message);
  }
}

export async function editPost(postId, text, imgArr, videoUrl, dataDispatch) {
  const encodedToken = localStorage.getItem("token");

  const postData = {
    content: text,
    images: imgArr,
    video: videoUrl,
    updatedAt: formatDate(),
  };
  try {
    const res = await axios.post(
      `/api/posts/edit/${postId}`,
      { postData },
      {
        headers: { authorization: encodedToken },
      }
    );
    dataDispatch({ type: "set-posts", payload: res.data.posts });
    toast.success("Post edited!");
  } catch (e) {
    console.error(e.message);
  }
}

export async function addReply(
  postId,
  text,
  imgArr,
  videoUrl,
  previousComments,
  dataDispatch
) {
  const encodedToken = localStorage.getItem("token");
  const userData = JSON.parse(localStorage.getItem("userData")) ?? {};

  const commentData = {
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
    username: userData.username,
    name: userData.name,
    createdAt: formatDate(),
    updatedAt: formatDate(),
  };

  const postData = {
    comments: [...previousComments, commentData],
    updatedAt: formatDate(),
  };
  try {
    const res = await axios.post(
      `/api/posts/edit/${postId}`,
      { postData },
      {
        headers: { authorization: encodedToken },
      }
    );
    dataDispatch({ type: "set-posts", payload: res.data.posts });
    toast.success("Commented!");
  } catch (e) {
    console.error(e);
  }
}

// post input file inputs

export const handlePostInputImageInput = (e, images, postInputDispatch) => {
  if (images.length === 2) {
    toast.error("Max 2 images allowed!");
    return;
  } else {
    if (e.target.files[0].size > 1000000) {
      toast.error("Image size should be less than 1MB");
    } else {
      postInputDispatch({ type: "add-image", payload: e.target.files[0] });
    }
  }
};

export const handlePostInputVideoInput = (e, postInputDispatch) => {
  if (e.target.files[0].size > 7000000) {
    toast.error("Video size should be less than 7MB");
  } else {
    postInputDispatch({ type: "add-video", payload: e.target.files[0] });
  }
};

// tweet btn in create post

export const handleBtnTweet = async (
  e,
  postInputDispatch,
  modal,
  inEditPost,
  inReply,
  comments,
  setShowCreatePostModal,
  images,
  video,
  user,
  text,
  dataDispatch,
  postId
) => {
  postInputDispatch({ type: "clear-all" });

  const textDiv = document.querySelector(".post-input-text");
  textDiv.innerText = "";

  if (modal || inEditPost) {
    setShowCreatePostModal(false);
  }

  !inReply && !inEditPost && toast.success("Tweeted");

  e.preventDefault();

  // uploading assets and updating posts

  let imgArr = [];
  let videoUrl = "";
  if (images.length === 1) {
    try {
      if (typeof images[0] === "string") {
        imgArr.push(images[0]);
      } else {
        const res = await uploadImage(images[0]);
        imgArr.push(res.secure_url);
      }

      if (inEditPost) {
        editPost(postId, text, imgArr, videoUrl, dataDispatch);
      } else if (inReply) {
        addReply(postId, text, imgArr, videoUrl, comments, dataDispatch);
      } else {
        createPost(user, text, imgArr, videoUrl, dataDispatch);
      }
    } catch (e) {
      console.error(e.message);
    }
  } else if (images.length === 2) {
    try {
      if (typeof images[0] === "string") {
        imgArr.push(images[0]);
      } else {
        const resA = await uploadImage(images[0]);
        imgArr.push(resA.secure_url);
      }
      if (typeof images[1] === "string") {
        imgArr.push(images[1]);
      } else {
        const resB = await uploadImage(images[1]);
        imgArr.push(resB.secure_url);
      }

      if (inEditPost) {
        editPost(postId, text, imgArr, videoUrl, dataDispatch);
      } else {
        createPost(user, text, imgArr, videoUrl, dataDispatch);
      }
    } catch (e) {
      console.error(e.message);
    }
  } else if (video) {
    try {
      if (typeof video === "string") {
        videoUrl = video;
      } else {
        const res = await uploadVideo(video);
        videoUrl = res.secure_url;
      }

      if (inEditPost) {
        editPost(postId, text, imgArr, videoUrl, dataDispatch);
      } else {
        createPost(user, text, imgArr, videoUrl, dataDispatch);
      }
    } catch (e) {
      console.error(e.message);
    }
  } else {
    if (inEditPost) {
      editPost(postId, text, imgArr, videoUrl, dataDispatch);
    } else if (inReply) {
      console.log("ullu");
      addReply(postId, text, imgArr, videoUrl, comments, dataDispatch);
    } else {
      createPost(user, text, imgArr, videoUrl, dataDispatch);
    }
  }
};

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
