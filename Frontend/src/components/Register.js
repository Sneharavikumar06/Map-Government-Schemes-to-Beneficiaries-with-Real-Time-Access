import React, { useState } from "react";
import axios from "../services/authService";
import "../styles/Register.css";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    aadhaar: "",
    income: "",
    occupation: "",
    disability: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async () => {
    try {
      await axios.post("/register", formData);
      alert("Registration successful. Please login.");
    } catch (error) {
      alert("Registration failed");
    }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <input type="text" name="name" placeholder="Full Name" onChange={handleChange} />
      <input type="text" name="aadhaar" placeholder="Aadhaar Number" onChange={handleChange} />
      <input type="text" name="income" placeholder="Annual Income" onChange={handleChange} />
      <input type="text" name="occupation" placeholder="Occupation" onChange={handleChange} />
      <input type="text" name="disability" placeholder="Disability Status" onChange={handleChange} />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Register;
