import axios from "axios"

const API = axios.create({
  baseURL: "https://crm-backend-smaz.onrender.com"
})

// Add token automatically to headers
API.interceptors.request.use(config => {

  const token = localStorage.getItem("token")

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})

export default API