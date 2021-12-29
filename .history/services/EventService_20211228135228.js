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
  getEvents(perPage, page) {
    return apiClient.get(`/events?_limit=${perPage}&_page=${page}`)
  },
  getEvent(id) {
    return apiClient.get(`/events/${id}`)
  },
  getStaff(title) {
    return apiClient.get(`/staff/${title}`)
  },
  getInfo(id) {
    return apiClient.get(`/info/${id}`)
  },
  getHistory(id) {
    return apiClient.get(`/history/${id}`)
  },
  getVisionAndMission(id) {
    return apiClient.get(`/visionAndMission/${id}`)
  },
}
