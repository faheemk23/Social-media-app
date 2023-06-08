import { Routes, Route, NavLink } from "react-router-dom";
import { Toaster } from "react-hot-toast";

// import { v4 as uuid } from "uuid";

import "./App.css";
import {
  Bookmarks,
  Explore,
  Home,
  Login,
  Post,
  Profile,
  Signup,
} from "./pages/Pages";

function App() {
  return (
    <div className="App">
      <Toaster
        position="bottom-right"
        reverseOrder={false}
        containerStyle={{
          bottom: "3rem",
          right: "3rem",
        }}
      />
      <NavLink to="/">Home</NavLink> ||
      <NavLink to="/bookmarks">bookmarks</NavLink> ||
      <NavLink to="/explore">explore</NavLink> ||
      <NavLink to="/login">login</NavLink> ||
      <NavLink to="/post/1">post</NavLink> ||
      <NavLink to="/profile/1">profile</NavLink> ||
      <NavLink to="/signup">signup</NavLink>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/login" element={<Login />} />
        <Route path="/post/:postId" element={<Post />} />
        <Route path="/profile/:username" element={<Profile />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
