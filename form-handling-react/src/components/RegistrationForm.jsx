import { useState } from "react";

const RegistrationForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail]     = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading]   = useState(false);

  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
  });

  const submit = (e) => {
    e.preventDefault();
    setLoading(true);

    const newErrors = { username: "", email: "", password: "" };
    if (!username) newErrors.username = "Username is required";
    if (!email) newErrors.email = "Email is required";
    if (!password) newErrors.password = "Password is required";

    setErrors(newErrors);

    if (newErrors.username || newErrors.email || newErrors.password) {
      setLoading(false);
      return;
    }

    console.log("this is the registration :", email, password, username);
    setLoading(false);
  };

  return (
    <>
      <form onSubmit={submit} noValidate>
        <label htmlFor="username">Username :</label>
        <input
          id="username"
          name="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {errors.username && (
          <div style={{ color: "red" }} role="alert">{errors.username}</div>
        )}

        <label htmlFor="email">Email :</label>
        <input
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && (
          <div style={{ color: "red" }} role="alert">{errors.email}</div>
        )}

        <label htmlFor="password">Password :</label>
        <input
          id="password"
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && (
          <div style={{ color: "red" }} role="alert">{errors.password}</div>
        )}

        <button type="submit" disabled={loading}>
          {loading ? "Loading..." : "Register"}
        </button>
      </form>
    </>
  );
};

export default RegistrationForm;
