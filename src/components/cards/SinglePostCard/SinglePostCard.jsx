import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { AuthContext } from "../../../contexts/AuthContext";
import { DataContext } from "../../../contexts/DataContext";
import { getSinglePostTimeStamp } from "../../../utilities/miscUtilities";
import PostEllipsis from "../../PostEllipsis/PostEllipsis";
import PostIcons from "../../PostIcons/PostIcons";
import PostImages from "../../PostImages/PostImages";
import PostInput from "../../PostInput/PostInput";
import { PostVideo } from "../../PostVideo/PostVideo";
import { ProfileSmall } from "../../ProfileSmall/ProfileSmall";
import { PostHeader } from "../../headers/PostHeader";
import { CreatePostModal } from "../../modals/CreatePostModal/CreatePostModal";
import { PostCard } from "../PostCard/PostCard";
import "./SinglePostCard.css";

export function SinglePostCard({ post }) {
  const [showCreatePostModal, setShowCreatePostModal] = useState(false);
  const { loggedIn } = useContext(AuthContext);
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

  const { avatar } = postUser ?? {};

  const contentLines = content.split("\n");

  return (
    <>
      <article className="single-post-card ">
        <PostHeader />
        <div className="relative">
          <div
            className="pointer"
            key={_id}
            onClick={() => navigate(`/profile/${username}`)}
          >
            <ProfileSmall
              avatar={avatar}
              name={postUser?.name}
              username={username}
            />
          </div>

          <section className="post-detail-text">
            <div className="post-content">
              {contentLines.map((line, index) => (
                <div key={index} className={line === "" ? "empty-line" : ""}>
                  {line}
                </div>
              ))}
            </div>
            {links &&
              Object?.entries(links)?.map(([label, link]) => (
                <div>
                  {label} -
                  <Link className="link" to={link}>
                    {link}
                  </Link>
                </div>
              ))}

            {!video && <PostImages images={images} />}

            {video && <PostVideo video={video} />}

            <div className="single-post-timestamp">
              {" "}
              {getSinglePostTimeStamp(createdAt)}
            </div>

            <PostIcons
              _id={_id}
              likes={likes}
              comments={comments}
              inSinglePost
            />

            <PostEllipsis
              _id={_id}
              username={username}
              setShowCreatePostModal={setShowCreatePostModal}
              inSinglePost
            />
          </section>
        </div>
        {loggedIn && <PostInput post={post} inReply comments={comments} />}
        {comments.map((post) => (
          <PostCard key={post._id} post={post} inReply />
        ))}
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
