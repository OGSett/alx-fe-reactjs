import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main style={{ padding: 16 }}>
      <h1>404 - Not Found</h1>
      <p>The page you’re looking for does not exist.</p>
      <Link to="/">Go Home</Link>
    </main>
  );
}
