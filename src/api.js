import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.bookopaedia.com/api/'
})

export default api
