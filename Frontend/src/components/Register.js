import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../styles/Register.css";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    aadhaar: "",
    dob: "", // Changed from 'age' to 'dob'
    gender: "",
    maritalStatus: "",
    income: "",
    occupation: "",
    disability: "",
    state: "",
    password: "",
    agreeTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleRegister = async () => {
    if (!formData.agreeTerms) {
      alert("Please agree to the terms and conditions.");
      return;
    }

    try {
      await axios.post("http://localhost:5000/api/auth/register", formData);
      alert("Registration successful. Please login.");
    } catch (error) {
      alert(error.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>

      {/* Name & Aadhaar */}
      <div className="input-row">
        <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} />
        <input type="text" name="aadhaar" placeholder="Aadhaar Number" value={formData.aadhaar} onChange={handleChange} />
      </div>

      {/* Date of Birth & Gender */}
      <div className="input-row">
        <input type="date" name="dob" value={formData.dob} onChange={handleChange} />
        <select name="gender" value={formData.gender} onChange={handleChange}>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Marital Status & Income */}
      <div className="input-row">
        <select name="maritalStatus" value={formData.maritalStatus} onChange={handleChange}>
          <option value="">Marital Status</option>
          <option value="single">Single</option>
          <option value="married">Married</option>
        </select>
        <input type="text" name="income" placeholder="Annual Income" value={formData.income} onChange={handleChange} />
      </div>

      {/* Occupation & Disability */}
      <div className="input-row">
        <input type="text" name="occupation" placeholder="Occupation" value={formData.occupation} onChange={handleChange} />
        <input type="text" name="disability" placeholder="Disability Status" value={formData.disability} onChange={handleChange} />
      </div>

      {/* State & Password */}
      <div className="input-row">
        <select name="state" value={formData.state} onChange={handleChange}>
          <option value="">Select State</option>
          <option value="Karnataka">Karnataka</option>
          <option value="Tamil Nadu">Tamil Nadu</option>
          <option value="Maharashtra">Maharashtra</option>
          <option value="Delhi">Delhi</option>
        </select>
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
      </div>

      {/* Checkbox for agreement */}
      <label className="checkbox-container">
        <input type="checkbox" name="agreeTerms" checked={formData.agreeTerms} onChange={handleChange} />
        I agree to the terms and conditions
      </label>

      {/* Register Button */}
      <button onClick={handleRegister}>Register</button>

      {/* Login Link */}
      <p className="login-link">
        Already have an account? <Link to="/Login">Login here</Link>
      </p>
    </div>
  );
};

export default Register;

