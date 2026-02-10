import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/login", {
        email,
        password,
      });

      // ✅ STORE TOKEN
      localStorage.setItem("token", response.data.access_token);
      localStorage.setItem("role", response.data.role);

      alert("Login successful");
      navigate("/rooms");
    } catch (error) {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>

      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>
      </form>

      <p style={{ marginTop: "10px", fontSize: "14px" }}>
        Don’t have an account?{" "}
        <span style={{ color: "#0f172a" }}>Sign up</span>
      </p>
    </div>
  );
};

export default Login;
