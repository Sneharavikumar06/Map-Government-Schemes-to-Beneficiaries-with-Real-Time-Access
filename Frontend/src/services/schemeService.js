import axios from "axios";

const API_URL = "http://localhost:5000/api";

export default {
  getSchemes: () => axios.get(`${API_URL}/schemes`),
  submitGrievance: (data) => axios.post(`${API_URL}/grievances`, data),
};
