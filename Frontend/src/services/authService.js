import axios from "axios";

const API_URL = "http://localhost:5000/api/auth";

export default {
  register: (data) => axios.post(`${API_URL}/Register`, data),
  login: (data) => axios.post(`${API_URL}/Login`, data),
};
