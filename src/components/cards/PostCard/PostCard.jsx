import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { DataContext } from "../../../contexts/DataContext";
import { getTimeStamp } from "../../../utilities/miscUtilities";
import PostEllipsis from "../../PostEllipsis/PostEllipsis";
import PostIcons from "../../PostIcons/PostIcons";
import PostImages from "../../PostImages/PostImages";
import { PostVideo } from "../../PostVideo/PostVideo";
import { CreatePostModal } from "../../modals/CreatePostModal/CreatePostModal";
import "./PostCard.css";

export function PostCard({ post, inReply, inBookmark }) {
  const [showCreatePostModal, setShowCreatePostModal] = useState(false);

  const {
    dataState: { users },
  } = useContext(DataContext);

  const navigate = useNavigate();

  const {
    _id,
    content,
    username,
    likes,
    createdAt,
    comments,
    images,
    video,
    links,
  } = post;

  const postUser = users.find(
    ({ username: currUser }) => currUser === username
  );

  const { avatar, isVerified } = postUser ?? {};

  const navigateToProfile = (e) => {
    e.stopPropagation();
    navigate(`/profile/${username}`);
  };

  const contentLines = content.split("\n");

  return (
    <>
      <article
        className="post-card pointer"
        onClick={() => navigate(`/post/${_id}`)}
      >
        <img
          src={avatar}
          alt="user-image"
          className="user-avatar pointer"
          height="40px"
          width="40px"
          onClick={navigateToProfile}
        />
        <section className="post-text">
          <div className="flex">
            {" "}
            <span className="post-name pointer" onClick={navigateToProfile}>
              {postUser?.name}
              {isVerified && (
                <img
                  src="https://ik.imagekit.io/faheem/Social-media/verify.png?updatedAt=1688800693531"
                  height="15px"
                  width="15px"
                />
              )}
            </span>
            <span className="post-username pointer" onClick={navigateToProfile}>
              @{username}
            </span>
            <span className="post-timestamp"> · {getTimeStamp(createdAt)}</span>
          </div>

          <div className="post-content">
            {contentLines.map((line, index) => (
              <div key={index} className={line === "" ? "empty-line" : ""}>
                {line}
              </div>
            ))}
          </div>
          {links &&
            Object?.entries(links)?.map(([label, link]) => (
              <div key={link}>
                {label} -{" "}
                <Link className="link" to={link}>
                  {link}
                </Link>
              </div>
            ))}

          {!video && <PostImages images={images} />}

          {video && <PostVideo video={video} />}

          {!inReply && (
            <PostIcons _id={_id} likes={likes} comments={comments} />
          )}

          {!inBookmark && !inReply && (
            <PostEllipsis
              _id={_id}
              username={username}
              setShowCreatePostModal={setShowCreatePostModal}
            />
          )}
        </section>
      </article>
      {showCreatePostModal && (
        <CreatePostModal
          setShowCreatePostModal={setShowCreatePostModal}
          post={post}
          inEditPost
        />
      )}
    </>
  );
}
