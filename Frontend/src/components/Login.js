import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import axios from "axios";
import "../styles/Login.css";

const Login = () => {
  const [aadhaar, setAadhaar] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", { aadhaar, password });
      localStorage.setItem("token", res.data.token);
      alert("Login successful");
    } catch (error) {
      alert(error.response?.data?.message || "Invalid Aadhaar or password");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <input type="text" placeholder="Aadhaar" value={aadhaar} onChange={(e) => setAadhaar(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>

      
      <p className="register-link">
        Not registered? <Link to="/Register">Register here</Link>
      </p>
    </div>
  );
};

export default Login;

