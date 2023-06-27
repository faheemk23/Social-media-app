import PostInput from "../../PostInput/PostInput";

export function CreatePostModal({ setShowCreatePostModal }) {
  return (
    <div className="modal-container">
      <PostInput modal setShowCreatePostModal={setShowCreatePostModal} />
    </div>
  );
}
