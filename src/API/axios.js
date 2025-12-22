import axios from 'axios'

const axiosInstance = axios.create({
  // baseURL : "http://127.0.0.1:5001/clone-3f347/us-central1/api",  // Local URL of firebase function
  baseURL : "https://api-project-r4pk.vercel.app/",  // Deployed URL of vercel function
}) 

export {axiosInstance}
