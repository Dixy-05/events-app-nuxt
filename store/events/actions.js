import EventService from '~/services/EventService.js'
export default {
  async fetchEvents({ commit }, payload) {
    const response = await EventService.getEvents(payload.perPage, payload.page)
    const totalCount = response.headers['x-total-count']
    return commit('SET_EVENTS', {
      data: response.data,
      total: totalCount,
      perPage: payload.perPage,
    })
  },
  async fetchEvent({ commit }, id) {
    const response = await EventService.getEvent(id)
    return commit('SET_EVENT', response.data)
  },
  async fetchInfo({ commit }) {
    const response = await EventService.getInfo()
    return commit('SET_INFO', response.data)
  },
  async fetchStaff({ commit }, title) {
    const response = await EventService.getStaff(title)
    return commit('SET_STAFF', response.data)
  },
  async fetchHistory({ commit }) {
    const response = await EventService.getHistory()
    return commit('SET_HISTORY', response.data)
  },
  async fetchDirection({ commit }, title) {
    const response = await EventService.getVisionAndMission(title)
    return commit('SET_DIRECTION', response.data)
  },
}
