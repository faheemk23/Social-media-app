import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import PostInput from "../../PostInput/PostInput";

export function CreatePostModal({ setShowCreatePostModal, post, inEditPost }) {
  const { mode } = useContext(AuthContext);
  return (
    <div
      className={
        mode === "dark"
          ? "modal-container black-modal-container"
          : "modal-container "
      }
    >
      <PostInput
        modal
        setShowCreatePostModal={setShowCreatePostModal}
        post={post}
        inEditPost={inEditPost}
      />
    </div>
  );
}
