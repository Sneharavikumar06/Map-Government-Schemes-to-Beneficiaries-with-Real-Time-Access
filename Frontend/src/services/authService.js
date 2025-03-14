import axios from "axios";

const API_URL = "http://localhost:5000/api/auth";

export default {
  register: (data) => axios.post(`${API_URL}/register`, data),
  login: (data) => axios.post(`${API_URL}/login`, data),
};
