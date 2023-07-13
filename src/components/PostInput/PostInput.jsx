import { useContext, useEffect, useReducer, useState } from "react";

import { AuthContext } from "../../contexts/AuthContext";
import { DataContext } from "../../contexts/DataContext";
import { postInputReducer } from "../../reducers/postInputReducer";
import {
  handleBtnTweet,
  handlePostInputImageInput,
  handlePostInputVideoInput,
} from "../../utilities/postsUtilities";

import { toast } from "react-hot-toast";
import { GifsModal } from "../modals/GifsModal/GifsModal";
import "./PostInput.css";

export default function PostInput({
  modal,
  setShowCreatePostModal,
  post,
  inEditPost,
  inReply,
  comments,
}) {
  const initialState = inEditPost
    ? {
        text: post.content,
        images: post.images ?? [],
        video: post.video,
      }
    : { text: "", images: [], video: null };

  const [postInputState, postInputDispatch] = useReducer(
    postInputReducer,
    initialState
  );

  const [showGifsModal, setshowGifsModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const { user, mode } = useContext(AuthContext);
  const { dataDispatch } = useContext(DataContext);

  const avatar = user?.avatar;

  const { text, images, video } = { ...postInputState };

  const handleBtnRemoveImage = (imageToRemove) => {
    postInputDispatch({ type: "remove-image", payload: imageToRemove });
  };

  const isEmpty = () => images.length === 0 && text.length < 1 && !video;

  useEffect(() => {
    const textDiv = document.querySelector(".post-input-text-modal");
    if (textDiv) {
      textDiv.innerText = text;
    }
  }, []);

  useEffect(() => {
    if (text.length > 380) {
      setErrorMessage("Max 380 characters allowed!");
    } else {
      setErrorMessage("");
    }
  }, [text]);

  return (
    <form
      className={
        inEditPost
          ? mode === "dark"
            ? "post-input-container edit-post black-post-input-container"
            : "post-input-container edit-post "
          : mode === "dark"
          ? "post-input-container black-post-input-container"
          : "post-input-container "
      }
      onSubmit={(e) =>
        handleBtnTweet(
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
          post?._id
        )
      }
    >
      {modal && (
        <span
          onClick={() => setShowCreatePostModal(false)}
          className={
            mode === "dark"
              ? "btn-modal-close pointer black-btn-modal-close"
              : "btn-modal-close pointer"
          }
        >
          ✖
        </span>
      )}
      <div>
        <img
          src={avatar}
          alt="user"
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
        {errorMessage && <span className="pink">{errorMessage}</span>}
        <div
          onInput={(e) =>
            postInputDispatch({
              type: "set-text",
              payload: e.target.innerText,
            })
          }
          id="user-input-text"
          className={
            modal
              ? mode === "dark"
                ? "post-input-text post-input-text-modal black-post-input-text"
                : "post-input-text post-input-text-modal "
              : mode === "dark"
              ? "post-input-text black-post-input-text"
              : "post-input-text "
          }
          style={{ whiteSpace: "pre-line" }}
          contentEditable="true"
          placeholder={inReply ? "Tweet your reply!" : "What is happening?!"}
        ></div>
        <div className="post-input-images-container">
          {images.length > 0 &&
            images.map((image) => (
              <div
                className={`relative post-input-image-${images.length}`}
                key={image}
              >
                <button
                  className="image-btn-remove"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleBtnRemoveImage(image);
                  }}
                >
                  ✖
                </button>
                <img
                  className="object-fit-contain"
                  src={
                    typeof image === "string"
                      ? image
                      : URL.createObjectURL(image)
                  }
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
              className="image-btn-remove pointer"
              onClick={(e) => {
                e.stopPropagation();
                postInputDispatch({ type: "remove-video" });
              }}
            >
              ✖
            </button>
            <video
              className="post-input-video"
              src={
                typeof video === "string" ? video : URL.createObjectURL(video)
              }
              controls
              autoPlay
              height={"100%"}
              width={"100%"}
            />
          </div>
        )}
        {!isEmpty() && !inReply && (
          <div className="post-input-reply-info">
            <i className="fa-solid fa-earth-americas"></i> Everyone can reply
          </div>
        )}

        <div
          className={
            mode === "dark"
              ? "post-input-icons black-post-input-icons"
              : "post-input-icons "
          }
        >
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
            onChange={(e) =>
              handlePostInputImageInput(e, images, postInputDispatch)
            }
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
            onChange={(e) => handlePostInputVideoInput(e, postInputDispatch)}
          />
          <span
            className="gif-icon pointer"
            disable={video || images.length > 0 ? "true" : ""}
            onClick={() => {
              !video &&
                images.length === 0 &&
                // setshowGifsModal((prev) => !prev);
                toast.error("Feature coming soon!");
            }}
          >
            GIF
          </span>
          <i
            onClick={() => toast.error("Feature coming soon!")}
            className="fa-regular fa-face-smile pointer"
          ></i>

          <button
            type="submit"
            disabled={
              (!video && images.length === 0 && text.length < 1) ||
              text === "\n" ||
              text.length > 380
                ? true
                : false
            }
            className="post-input-btn-tweet pointer"
          >
            {inReply ? "Reply" : inEditPost ? "Save" : "Tweet"}
          </button>
        </div>
      </div>

      {showGifsModal && <GifsModal setshowGifsModal={setshowGifsModal} />}
    </form>
  );
}
