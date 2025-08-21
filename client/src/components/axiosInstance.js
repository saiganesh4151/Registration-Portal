import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://registration-portal-wcmg.onrender.com',
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true 
});

export default axiosInstance;
