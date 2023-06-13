import { Routes, Route, NavLink, useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import relative from "dayjs/plugin/relativeTime";

// import { v4 as uuid } from "uuid";

import "./App.css";
import {
  Bookmarks,
  Explore,
  Home,
  Landing,
  Login,
  Post,
  Profile,
  Signup,
} from "./pages/Pages";
import NavBar from "./components/NavBar/NavBar";
import { useContext, useEffect } from "react";
import dayjs from "dayjs";
import { AuthContext } from "./contexts/AuthContext";
import BottomAuthBar from "./components/BottomAuthBar/BottomAuthBar";
import SearchBar from "./components/SearchBar/SearchBar";
import WhoToFollow from "./components/WhoToFollow/WhoToFollow";
import SuggestedSignup from "./components/SuggestedSignup/SuggestedSignup";

function App() {
  const { loggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    dayjs.extend(relative);
    navigate("/explore");
  }, []);
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
      {/* <div className="links">
        <NavLink to="/">Landing</NavLink> ||
        <NavLink to="/home">Home</NavLink> ||
        <NavLink to="/bookmarks">bookmarks</NavLink> ||
        <NavLink to="/explore">explore</NavLink> ||
        <NavLink to="/login">login</NavLink> ||
        <NavLink to="/post/1">post</NavLink> ||
        <NavLink to="/profile/1">profile</NavLink> ||
        <NavLink to="/signup">signup</NavLink>
      </div> */}
      <section className="app-container">
        <section className="left">
          <NavBar />
        </section>
        <section className="middle">
          <Routes>
            {/* <Route path="/" element={<Landing />} /> */}
            <Route path="/home" element={<Home />} />
            <Route path="/bookmarks" element={<Bookmarks />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/login" element={<Login />} />
            <Route path="/post/:postId" element={<Post />} />
            <Route path="/profile/:username" element={<Profile />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
          {loggedIn && (
            <section className="bottom">
              <NavBar inBottom />
            </section>
          )}
        </section>
        <section className="right">
          {loggedIn ? (
            <>
              <SearchBar />
              <WhoToFollow />
            </>
          ) : (
            <SuggestedSignup />
          )}
        </section>
      </section>
      {!loggedIn && <BottomAuthBar />}
    </div>
  );
}

export default App;
