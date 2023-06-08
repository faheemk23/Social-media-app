import axios from "axios";
import { toast } from "react-hot-toast";

export async function loginHandler(userData, navigate) {
  try {
    const { username: inputUsername, password } = userData;
    const res = await axios.post("/api/auth/login", {
      username: inputUsername,
      password,
    });
    localStorage.setItem("token", res.data.encodedToken);
    const { username, firstName, lastName } = res.data.foundUser;
    localStorage.setItem(
      "userData",
      JSON.stringify({ username, firstName, lastName })
    );
    navigate("/");
    toast.success("Logged in");
  } catch (e) {
    console.error(e);
  }
}
