import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import "./App.css";
import {
  Bookmark,
  Explore,
  Home,
  LikedPosts,
  LoginForm,
  MockAPI,
  PrivateRoute,
  Profile,
  SignupForm,
  UserProfile,
} from "components";
import { MainContainer } from "main-container";
import { useSelector } from "react-redux";

function App() {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <div className={`App theme-${theme}`}>
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 2000,
          style: {
            fontSize: "1.2rem",
            fontWeight: "bold",
            background: "linear-gradient(90deg, #253053 31%, #079E83 100%)",
            color: "#fff",
          },
        }}
      />
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<MainContainer />}>
            <Route index element={<Home />} />
            <Route path="explore" element={<Explore />} />
            <Route path="liked-posts" element={<LikedPosts />} />
            <Route path="bookmarks" element={<Bookmark />} />
            <Route path="user-profile" element={<UserProfile />} />
            <Route path="profile/:username" element={<Profile />} />
          </Route>
          <Route path="/mock" element={<MockAPI />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
