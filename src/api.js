import axios from 'axios'

const api = axios.create({
  baseURL: 'https://bookopaedia-library-backend.onrender.com/api/'
})

export default api
