import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://registration-portal-isie.vercel.app',
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true 
});

export default axiosInstance;
