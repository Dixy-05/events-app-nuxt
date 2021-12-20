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
    return apiClient.get('/events')
  },
  async getEvent(axios, id) {
    // return await apiClient.get(`/events/${id}`)
    return await axios.get(`http://localhost:3004/events/${id}`)
  },
}
