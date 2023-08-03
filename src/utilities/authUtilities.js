import axios from "axios";
import { toast } from "react-hot-toast";

export async function loginHandler(
  userDetail,
  setUser,
  navigate,
  setLoggedIn,
  setErrorMessage
) {
  try {
    const res = await axios.post("/api/auth/login", userDetail);
    if (res.status === 200) {
      localStorage.setItem("token", res.data.encodedToken);
      const { username, name, avatar } = res.data.foundUser;
      localStorage.setItem(
        "userData",
        JSON.stringify({ username, name, avatar })
      );
      setUser(res.data.foundUser);
      navigate("/home");
      setLoggedIn(true);
      toast.success("Logged in");
    }
  } catch (e) {
    if (e.request.status === 404) {
      setErrorMessage("User doesn't exist, please signup!");
    } else if (e.request.status === 401) {
      setErrorMessage("Username and password don't match");
    }
    console.error(e);
  }
}

export async function signupHandler(
  userDetail,
  navigate,
  setLoggedIn,
  setUser
) {
  try {
    const res = await axios.post("/api/auth/signup", userDetail);
    if (res.status === 201) {
      localStorage.setItem("token", res.data.encodedToken);
      const { username, name, avatar } = res.data.createdUser;
      localStorage.setItem(
        "userData",
        JSON.stringify({ username, name, avatar })
      );
      setUser(res.data.foundUser);
      navigate("/home");
      setLoggedIn(true);
      toast.success("Logged in");
    }
  } catch (e) {
    console.error(e);
  }
}
