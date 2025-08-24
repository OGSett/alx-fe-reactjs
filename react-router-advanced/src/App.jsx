import { Routes, Route, BrowserRouter } from "react-router-dom";
import Nav from "./components/Nav.jsx";
import Home from "./components/Home.jsx";
import Blog from "./components/Blog.jsx";
import Post from "./components/Post.jsx";
import Profile from "./components/Profile.jsx";
import ProfileDetails from "./components/ProfileDetails.jsx";
import ProfileSettings from "./components/ProfileSettings.jsx";
import Login from "./components/Login.jsx";
import NotFound from "./components/NotFound.jsx";
import ProtectedRoute from "./routes/ProtectedRoute.jsx";

export default function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:postId" element={<Post />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        >
          <Route index element={<ProfileDetails />} />
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
