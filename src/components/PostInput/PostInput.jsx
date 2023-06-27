import { useContext, useReducer, useState } from "react";
import { toast } from "react-hot-toast";

import { AuthContext } from "../../contexts/AuthContext";
import { DataContext } from "../../contexts/DataContext";
import { postInputReducer } from "../../reducers/postInputReducer";
import {
  createPost,
  uploadImage,
  uploadVideo,
} from "../../utilities/postsUtilities";
import { GifsModal } from "../modals/GifsModal/GifsModal";
import "./PostInput.css";

const initialState = { text: "", images: [], video: null };

export default function PostInput({ modal, setShowCreatePostModal }) {
  const [postInputState, postInputDispatch] = useReducer(
    postInputReducer,
    initialState
  );

  const [showGifsModal, setshowGifsModal] = useState(false);

  const { user } = useContext(AuthContext);
  const { dataDispatch } = useContext(DataContext);

  const avatar = user.avatar;

  const { text, images, video } = postInputState;

  const handleImageFileInput = (e) => {
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

  const handleVideoFileInput = (e) => {
    if (e.target.files[0].size > 7000000) {
      toast.error("Video size should be less than 7MB");
    } else {
      postInputDispatch({ type: "add-video", payload: e.target.files[0] });
    }
  };

  const handleBtnRemoveImage = (imageToRemove) => {
    postInputDispatch({ type: "remove-image", payload: imageToRemove });
  };

  const isEmpty = () => images.length === 0 && text.length < 1 && !video;

  const handleBtnTweet = async (e) => {
    // clear content

    const textDiv = document.getElementById("user-input-text");
    textDiv.innerText = "";
    postInputDispatch({ type: "clear-all" });

    modal && setShowCreatePostModal(false);

    toast.success("Tweeted");
    e.preventDefault();

    // uploading assets and updating posts

    let imgArr = [];
    let videoUrl = "";
    if (images.length === 1) {
      try {
        const res = await uploadImage(images[0]);
        imgArr.push(res.secure_url);
        createPost(user, text, imgArr, videoUrl, dataDispatch);
      } catch (e) {
        console.error(e.message);
      }
    } else if (images.length === 2) {
      try {
        const resA = await uploadImage(images[0]);
        imgArr.push(resA.secure_url);
        const resB = await uploadImage(images[1]);
        imgArr.push(resB.secure_url);
        createPost(user, text, imgArr, videoUrl, dataDispatch);
      } catch (e) {
        console.error(e.message);
      }
    } else if (video) {
      try {
        const res = await uploadVideo(video);
        videoUrl = res.secure_url;
        createPost(user, text, imgArr, videoUrl, dataDispatch);
      } catch (e) {
        console.error(e.message);
      }
    } else {
      createPost(user, text, imgArr, videoUrl, dataDispatch);
    }
  };

  return (
    <form className="post-input-container" onSubmit={handleBtnTweet}>
      {modal && (
        <span
          onClick={() => setShowCreatePostModal(false)}
          className="btn-modal-close pointer"
        >
          ✖
        </span>
      )}
      <div>
        <img
          src={avatar}
          alt="user-image"
          className="user-avatar"
          height="45px"
          width="45px"
        />
      </div>

      <div
        className={
          isEmpty() ? "post-input-content" : "post-input-content pad-top-2rem"
        }
      >
        {!isEmpty() && (
          <div className="post-input-audience">
            Everyone <i className="fa-solid fa-chevron-down"></i>
          </div>
        )}

        <div
          onInput={(e) =>
            postInputDispatch({
              type: "set-text",
              payload: e.target.innerText,
            })
          }
          id="user-input-text"
          className={
            modal ? "post-input-text post-input-text-modal" : "post-input-text"
          }
          style={{ whiteSpace: "pre-line" }}
          contentEditable="true"
          placeholder="What is happening?!"
        ></div>
        <div className="post-input-images-container">
          {images.length > 0 &&
            images.map((image) => (
              <div className={`relative post-input-image-${images.length}`}>
                <button
                  className="image-btn-remove"
                  onClick={() => handleBtnRemoveImage(image)}
                >
                  ✖
                </button>
                <img
                  className="object-fit-cover"
                  src={URL.createObjectURL(image)}
                  alt="post"
                  height={"100%"}
                  width={"100%"}
                />
              </div>
            ))}
        </div>
        {video && (
          <div className="relative video-container">
            <button
              className="image-btn-remove"
              onClick={() => postInputDispatch({ type: "remove-video" })}
            >
              ✖
            </button>
            <video
              className="post-input-video"
              src={URL.createObjectURL(video)}
              controls
              autoPlay
              height={"100%"}
              width={"100%"}
            />
          </div>
        )}
        {!isEmpty() && (
          <div className="post-input-reply-info">
            <i className="fa-solid fa-earth-americas"></i> Everyone can reply
          </div>
        )}

        <div className="post-input-icons ">
          <label
            className="pointer"
            disable={video || images.length > 1 ? "true" : ""}
            htmlFor="file-image"
          >
            <i className="fa-regular fa-image "></i>
          </label>
          <input
            disabled={video || images.length > 1 ? true : false}
            accept="image/*"
            type="file"
            name="file-image"
            id="file-image"
            onChange={handleImageFileInput}
          />
          <label
            disable={video || images.length > 0 ? "true" : ""}
            className="pointer"
            htmlFor="file-video"
          >
            <i className="fa-solid fa-video "></i>
          </label>
          <input
            disabled={images.length > 0 || video ? true : false}
            accept="video/*"
            type="file"
            name="file-video"
            id="file-video"
            onChange={handleVideoFileInput}
          />
          <span
            className="gif-icon pointer"
            disable={video || images.length > 0 ? "true" : ""}
            onClick={() => {
              !video &&
                images.length === 0 &&
                setshowGifsModal((prev) => !prev);
            }}
          >
            GIF
          </span>
          <i className="fa-regular fa-face-smile pointer"></i>
          <button
            type="submit"
            disabled={
              (!video && images.length === 0 && text.length < 1) ||
              text === "\n"
                ? true
                : false
            }
            className="post-input-btn-tweet pointer"
          >
            Tweet
          </button>
        </div>
      </div>

      {showGifsModal && <GifsModal setshowGifsModal={setshowGifsModal} />}
    </form>
  );
}
