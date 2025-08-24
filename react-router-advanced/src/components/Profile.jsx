import { Link, Outlet } from "react-router-dom";

export default function Profile() {
  return (
    <main style={{ padding: 16 }}>
      <h1>Profile</h1>
      <div style={{ display: "flex", gap: 12, margin: "12px 0" }}>
        <Link to="/profile/details">Details</Link>
        <Link to="/profile/settings">Settings</Link>
      </div>
      <Outlet />
    </main>
  );
}
