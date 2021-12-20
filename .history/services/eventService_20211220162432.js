import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default {
  async getEvents() {
    return await apiClient.get('/events')
  },
  async getEvent(id) {
    return await apiClient.get(`/event/${id}`)
  },
}
