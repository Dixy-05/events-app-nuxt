import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost:3004',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default {
  getEvents() {
    console.log('being called?')
    return apiClient.get('/events')
  },
  async getEvent(id) {
    return await apiClient.get(`/events/${id}`)
  },
}
