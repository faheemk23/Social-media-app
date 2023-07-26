import dayjs from "dayjs";
import relative from "dayjs/plugin/relativeTime";
import { useContext, useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";

// import { v4 as uuid } from "uuid";

import "./App.css";
import BottomAuthBar from "./components/BottomAuthBar/BottomAuthBar";
import NavBar from "./components/NavBar/NavBar";
import { ScrollToTop } from "./components/ScrollToTop";
import { SearchBar } from "./components/SearchBar/SearchBar";
import SuggestedSignup from "./components/SuggestedSignup/SuggestedSignup";
import WhoToFollow from "./components/WhoToFollow/WhoToFollow";
import { CreatePostModal } from "./components/modals//CreatePostModal/CreatePostModal";
import { Loader } from "./components/modals/Loader/Loader";
import { AuthContext } from "./contexts/AuthContext";
import { DataContext } from "./contexts/DataContext";
import {
  Bookmarks,
  Error,
  Explore,
  Home,
  Login,
  Logout,
  Post,
  Profile,
  Signup,
  Verified,
} from "./pages/Pages";

function App() {
  const [showCreatePostModal, setShowCreatePostModal] = useState(false);
  const { loggedIn, mode, authLoading } = useContext(AuthContext);
  const { dataLoading } = useContext(DataContext);

  useEffect(() => {
    dayjs.extend(relative);
  }, []);

  return (
    <div className="App">
      <ScrollToTop />
      <Toaster
        position="bottom-right"
        reverseOrder={false}
        containerStyle={{
          bottom: "3rem",
          right: "3rem",
        }}
      />
      {(dataLoading || authLoading) && <Loader />}
      <section className="app-container">
        <section className={mode === "dark" ? "left black-left" : "left "}>
          <NavBar setShowCreatePostModal={setShowCreatePostModal} />
        </section>
        <section className={mode === "dark" ? "middle black-middle" : "middle"}>
          {showCreatePostModal && (
            <CreatePostModal setShowCreatePostModal={setShowCreatePostModal} />
          )}
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/bookmarks" element={<Bookmarks />} />
            <Route path="/" element={<Explore />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/post/:postId" element={<Post />} />
            <Route path="/profile/:username" element={<Profile />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/verified" element={<Verified />} />
            <Route path="*" element={<Error />} />
          </Routes>

          {loggedIn && (
            <section className="bottom">
              <NavBar inBottom />
            </section>
          )}
        </section>
        <section className={mode === "dark" ? "right black-right" : "right"}>
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
