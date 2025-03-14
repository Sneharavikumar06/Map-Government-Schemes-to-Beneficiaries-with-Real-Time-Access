import React, { useState } from "react";
import axios from "../services/schemeService";

const Grievance = () => {
  const [complaint, setComplaint] = useState("");

  const submitGrievance = async () => {
    try {
      await axios.post("/grievances", { complaint });
      alert("Grievance submitted successfully");
    } catch (error) {
      alert("Error submitting grievance");
    }
  };

  return (
    <div>
      <h2>Submit a Grievance</h2>
      <textarea onChange={(e) => setComplaint(e.target.value)} placeholder="Describe your complaint" />
      <button onClick={submitGrievance}>Submit</button>
    </div>
  );
};

export default Grievance;
