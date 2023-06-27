import axios from "axios";
import { toast } from "react-hot-toast";

export async function loginHandler(userDetail, setUser, navigate, setLoggedIn) {
  try {
    const res = await axios.post("/api/auth/login", userDetail);
    if (res.status === 200) {
      console.log({ res });
      localStorage.setItem("token", res.data.encodedToken);
      const { username, name, avatar } = res.data.foundUser;
      localStorage.setItem(
        "userData",
        JSON.stringify({ username, name, avatar })
      );
      setUser({ username, name, avatar });
      navigate("/home");
      setLoggedIn(true);
      toast.success("Logged in");
    }
  } catch (e) {
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
      setUser({ username, name, avatar });
      navigate("/home");
      setLoggedIn(true);
      toast.success("Logged in");
    }
  } catch (e) {
    console.error(e);
  }
}
