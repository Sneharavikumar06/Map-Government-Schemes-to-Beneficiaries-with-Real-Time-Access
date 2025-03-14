import { Link } from "react-router-dom";
import homeBg from "../assets/home-bg.jpg"; // Ensure the image exists
import { FaSignInAlt, FaUserPlus, FaTachometerAlt } from "react-icons/fa";

function HomePage() {
  return (
    <div style={styles.container}>
      <div style={styles.overlay}></div> {/* Blurred background overlay */}
      <div style={styles.content}>
        <h1 style={styles.title}>Welcome to Government Schemes Portal</h1>
        <p style={styles.subtitle}>Find, Apply, and Manage Schemes Easily</p>
        <nav style={styles.nav}>
          <Link to="/Login" style={styles.link}>
            <FaSignInAlt /> Login
          </Link>
          <Link to="/Register" style={styles.link}>
            <FaUserPlus /> Register
          </Link>
          <Link to="/Dashboard" style={styles.link}>
            <FaTachometerAlt /> Dashboard
          </Link>
        </nav>
      </div>
    </div>
  );
}

const styles = {
  container: {
    position: "relative",
    width: "100vw", // Full width of screen
    height: "100vh", // Full height of screen
    backgroundImage: `url(${homeBg})`,
    backgroundSize: "cover", // Ensure full-screen coverage
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.6)", // Dark overlay for better readability
    backdropFilter: "blur(6px)", // Standard blur
    WebkitBackdropFilter: "blur(6px)", // Safari compatibility
    zIndex: 1,
  },
  content: {
    position: "relative",
    zIndex: 2,
    textAlign: "center",
    color: "#FFD700", // Golden color
  },
  title: {
    fontSize: "40px",
    fontWeight: "bold",
    textShadow: "3px 3px 15px rgba(255, 215, 0, 0.8)", // Golden glow effect
  },
  subtitle: {
    fontSize: "22px",
    marginBottom: "40px",
    color: "#FFF8DC", // Light golden-white shade
  },
  nav: {
    display: "flex",
    justifyContent: "center",
    gap: "30px", // Space between buttons
  },
  link: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "15px 40px",
    fontSize: "20px",
    color: "black",
    background: "linear-gradient(135deg, #FFD700, #FFA500)", // Gold gradient
    textDecoration: "none",
    borderRadius: "8px",
    transition: "0.3s",
    textAlign: "center",
    fontWeight: "bold",
    boxShadow: "0px 4px 10px rgba(255, 215, 0, 0.8)", // Golden glow shadow
    cursor: "pointer", // Ensure buttons are clickable
    zIndex: 2, // Ensure buttons are on top
  },
};

export default HomePage;
