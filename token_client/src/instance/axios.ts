import axios from 'axios';

// Create an instance of Axios with a base URL
const api = axios.create({
  baseURL: 'http://localhost:3004/users', // Replace this with your actual base URL
  // You can also add other default configurations here, such as headers, timeout, etc.
});

export default api;
