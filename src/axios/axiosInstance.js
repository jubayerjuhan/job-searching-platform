import axios from "axios";

// Create Axios instance with default headers
const client = axios.create({
  baseURL: "http://localhost:4000",
});

export default client;
