import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { ProfileCard } from "../../components/cards/ProfileCard/ProfileCard";
import { ProfileHeader } from "../../components/headers/ProfileHeader";
import { Loader } from "../../components/modals/Loader/Loader";
import { AuthContext } from "../../contexts/AuthContext";
import { DataContext } from "../../contexts/DataContext";
import { getUserPosts } from "../../utilities/postsUtilities";
import { getUser } from "../../utilities/userUtilities";
import "./Profile.css";

export function Profile() {
  const {
    dataState: { users, posts },
    dataDispatch,
  } = useContext(DataContext);
  const { user } = useContext(AuthContext);
  const [currentUser, setCurrentUser] = useState({});
  const [userPosts, setUserPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { username } = useParams();

  useEffect(() => {
    setLoading(true);
    getUser(username, setCurrentUser, setLoading);
  }, [username, users, user]);

  useEffect(() => {
    getUserPosts(username, setUserPosts);
  }, [username, posts]);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <>
          <ProfileHeader
            name={currentUser.name}
            numberOfPosts={userPosts.length}
          />
          <ProfileCard user={currentUser} userPosts={userPosts} />
        </>
      )}
    </div>
  );
}
