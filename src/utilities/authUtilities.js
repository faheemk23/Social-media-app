import axios from "axios";
import { toast } from "react-hot-toast";

export async function loginHandler(userData, navigate) {
  try {
    const { username, password } = userData;
    const res = await axios.post("/api/auth/login", { username, password });
    console.log(res.data);
    localStorage.setItem("token", res.data.encodedToken);
    localStorage.setItem("userData", JSON.stringify(res.data.foundUser));
    navigate("/");
    toast.success("Logged in");
  } catch (e) {
    console.error(e);
  }
}
