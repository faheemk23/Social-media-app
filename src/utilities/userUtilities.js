import axios from "axios";
import { toast } from "react-hot-toast";

export async function getAllUsers(dataDispatch) {
  try {
    const res = await axios.get(`/api/users`);
    dataDispatch({ type: "set-users", payload: res.data.users });
  } catch (e) {
    console.error(e.message);
  }
}

export async function getUser(username, setUser, setLoading) {
  try {
    const res = await axios.get(`/api/users/${username}`);
    setUser(res.data.user);
  } catch (e) {
    console.error(e.message);
  } finally {
    setLoading(false);
  }
}

export async function followUser(userId, dataDispatch) {
  const encodedToken = localStorage.getItem("token");

  try {
    const res = await axios.post(
      `/api/users/follow/${userId}`,
      {},
      { headers: { authorization: encodedToken } }
    );
    const { user, followUser } = res.data;

    toast.success(`Followed @${followUser.username}`);

    dataDispatch({ type: "update-user", payload: followUser });

    dataDispatch({ type: "update-user", payload: user });
  } catch (e) {
    console.error(e.message);
  }
}

export async function unfollowUser(userId, dataDispatch) {
  const encodedToken = localStorage.getItem("token");

  try {
    const res = await axios.post(
      `/api/users/unfollow/${userId}`,
      {},
      { headers: { authorization: encodedToken } }
    );
    const { user, followUser } = res.data;
    toast.success(`Unfollowed @${followUser.username}`);

    dataDispatch({ type: "update-user", payload: followUser });

    dataDispatch({ type: "update-user", payload: user });
  } catch (e) {
    console.error(e.message);
  }
}

export async function editProfileHandler(userData, setUser, dataDispatch) {
  const encodedToken = localStorage.getItem("token");
  try {
    console.log("yes");
    const res = await axios.post(
      `/api/users/edit`,
      { userData },
      { headers: { authorization: encodedToken } }
    );
    setUser(res.data.user);
    dataDispatch({ type: "update-user", payload: res.data.user });
  } catch (e) {
    console.log(e.message);
  }
}
