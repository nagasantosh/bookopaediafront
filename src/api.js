import axios from 'axios'

const api = axios.create({
  baseURL: 'http://api.bookopaedia.com/api/'
})

export default api
