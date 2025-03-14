import React, { useState } from "react";
import axios from "../services/authService";
import "../styles/Login.css";

const Login = () => {
  const [aadhaar, setAadhaar] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await axios.post("/login", { aadhaar, password });
      localStorage.setItem("token", res.data.token);
      alert("Login successful");
    } catch (error) {
      alert("Invalid Aadhaar or password");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <input type="text" placeholder="Aadhaar" onChange={(e) => setAadhaar(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
