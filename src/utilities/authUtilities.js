import axios from "axios";
import { toast } from "react-hot-toast";

export async function loginHandler(userDetail, setUser, navigate, setLoggedIn) {
  try {
    const res = await axios.post("/api/auth/login", userDetail);
    if (res.status === 200) {
      localStorage.setItem("token", res.data.encodedToken);
      const { username, name } = res.data.foundUser;
      localStorage.setItem("userData", JSON.stringify({ username, name }));
      setUser({ username, name });
      navigate("/home");
      setLoggedIn(true);
      toast.success("Logged in");
    }
  } catch (e) {
    console.error(e);
  }
}

export async function signupHandler(userDetail, navigate, setLoggedIn) {
  try {
    const res = await axios.post("/api/auth/signup", userDetail);
    console.log({ res });
    if (res.status === 201) {
      localStorage.setItem("token", res.data.encodedToken);
      const { username, name } = res.data.createdUser;
      localStorage.setItem("userData", JSON.stringify({ username, name }));
      navigate("/home");
      setLoggedIn(true);
      toast.success("Logged in");
    }
  } catch (e) {
    console.error(e);
  }
}
