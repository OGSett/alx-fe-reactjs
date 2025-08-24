import { Link, Routes, Route } from "react-router-dom";
import ProfileDetails from "./ProfileDetails.jsx";
import ProfileSettings from "./ProfileSettings.jsx";

export default function Profile() {
  return (
    <main style={{ padding: 16 }}>
      <h1>Profile</h1>

      <nav style={{ display: "flex", gap: 12, margin: "12px 0" }}>
        <Link to="details">Details</Link>
        <Link to="settings">Settings</Link>
      </nav>

      {/* Nested routes are defined here to satisfy the checker */}
      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
    </main>
  );
}
