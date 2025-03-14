import React from "react";
import { FaEdit } from "react-icons/fa";
import profilePic from "../assets/profile-pic.jpg";


const ProfilePage = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>User Profile</h2>
      <div style={styles.card}>
      <img src="/assets/profile-pic.jpg" alt="Profile" />
        <h3 style={styles.name}>Sneha</h3>
        <p style={styles.info}><strong>Aadhaar:</strong> 1234-5678-9012</p>
        <p style={styles.info}><strong>Income:</strong> ₹5,00,000</p>
        <p style={styles.info}><strong>Occupation:</strong> Software Developer</p>
        <button style={styles.button}>
          <FaEdit /> Edit Profile
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "50px",
    background: "#f4f4f4",
    height: "100vh",
  },
  title: {
    fontSize: "32px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  card: {
    background: "white",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    width: "50%",
    margin: "0 auto",
    textAlign: "center",
  },
  profileImg: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    marginBottom: "10px",
  },
  name: {
    fontSize: "24px",
    marginBottom: "10px",
  },
  info: {
    fontSize: "18px",
    marginBottom: "5px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    background: "#ff758c",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px",
  },
};

export default ProfilePage;
