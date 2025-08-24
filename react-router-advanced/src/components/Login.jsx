import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/profile";

  const handleLogin = () => {
    login();
    navigate(from, { replace: true });
  };

  return (
    <main style={{ padding: 16 }}>
      <h1>Login</h1>
      <p>This is a mock login. Clicking the button simulates authentication.</p>
      <button onClick={handleLogin}>Login</button>
    </main>
  );
}
    