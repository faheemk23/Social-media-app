import "./PostVideo.css";

export function PostVideo({ video }) {
  return (
    <div className="relative ">
      <video
        className="post-video"
        src={video}
        controls
        autoPlay
        height={"100%"}
        width={"100%"}
      />
    </div>
  );
}
