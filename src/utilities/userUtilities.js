import axios from "axios";

const encodedToken = localStorage.getItem("token");

export async function getAllUsers(dataDispatch) {
  try {
    const res = await axios.get(`/api/users`);
    dataDispatch({ type: "set-users", payload: res.data.users });
  } catch (e) {
    console.error(e.message);
  }
}

export async function followUser(userId, dataDispatch) {
  try {
    const res = await axios.post(
      `/api/users/follow/${userId}`,
      {},
      { headers: { authorization: encodedToken } }
    );
    const { user, followUser } = res.data;

    dataDispatch({ type: "update-user", payload: followUser });

    dataDispatch({ type: "update-user", payload: user });
  } catch (e) {
    console.error(e.message);
  }
}

export async function unfollowUser(userId, dataDispatch) {
  try {
    const res = await axios.post(
      `/api/users/unfollow/${userId}`,
      {},
      { headers: { authorization: encodedToken } }
    );
    const { user, followUser } = res.data;

    dataDispatch({ type: "update-user", payload: followUser });

    dataDispatch({ type: "update-user", payload: user });
  } catch (e) {
    console.error(e.message);
  }
}
