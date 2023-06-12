import axios from "axios";
import { toast } from "react-hot-toast";

export async function loginHandler(userDetail, navigate) {
  try {
    const res = await axios.post("/api/auth/login", userDetail);
    localStorage.setItem("token", res.data.encodedToken);
    const { username, name } = res.data.foundUser;
    localStorage.setItem("userData", JSON.stringify({ username, name }));
    navigate("/");
    toast.success("Logged in");
  } catch (e) {
    console.error(e);
  }
}

export async function signupHandler(userDetail, navigate) {
  try {
    const res = await axios.post("/api/auth/signup", userDetail);
    console.log({ res });
    localStorage.setItem("token", res.data.encodedToken);
    const { username, name } = res.data.createdUser;
    localStorage.setItem("userData", JSON.stringify({ username, name }));
    navigate("/");
    toast.success("Logged in");
  } catch (e) {
    console.error(e);
  }
}
