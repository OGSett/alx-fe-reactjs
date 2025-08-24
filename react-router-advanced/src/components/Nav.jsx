import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

export default function Nav() {
  const { isAuthenticated, logout } = useAuth();

  return (
    <nav style={{ display: "flex", gap: 12, padding: 12, borderBottom: "1px solid #ddd" }}>
      <Link to="/">Home</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/profile">Profile</Link>
      {!isAuthenticated ? (
        <Link to="/login">Login</Link>
      ) : (
        <button onClick={logout}>Logout</button>
      )}
    </nav>
  );
}
