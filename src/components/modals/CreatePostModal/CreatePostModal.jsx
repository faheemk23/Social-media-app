import PostInput from "../../PostInput/PostInput";

export function CreatePostModal({ setShowCreatePostModal, post, inEditPost }) {
  return (
    <div className="modal-container">
      <PostInput
        modal
        setShowCreatePostModal={setShowCreatePostModal}
        post={post}
        inEditPost={inEditPost}
      />
    </div>
  );
}
