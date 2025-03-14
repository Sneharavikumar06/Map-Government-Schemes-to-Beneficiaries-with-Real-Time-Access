import React, { useEffect, useState } from "react";
import axios from "../services/schemeService";
import "../styles/Dashboard.css";

const Dashboard = () => {
  const [schemes, setSchemes] = useState([]);

  useEffect(() => {
    axios.get("/schemes").then((res) => setSchemes(res.data));
  }, []);

  return (
    <div className="dashboard-container">
      <h2>Recommended Schemes</h2>
      <ul>
        {schemes.map((scheme) => (
          <li key={scheme._id}>
            <h3>{scheme.name}</h3>
            <p>{scheme.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
