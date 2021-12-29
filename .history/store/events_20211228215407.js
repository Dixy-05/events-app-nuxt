import EventService from '~/services/EventService.js'
export const state = () => ({
  events: [],
  event: {},
  eventNav: {
    details: false,
    edit: false,
    register: false,
  },
  info: [],
  staff: [],
  history: [],
  direction: [],
})
export const mutations = {
  SET_EVENTS(state, events) {
    state.events = events
  },
  SET_EVENT(state, event) {
    state.event = event
  },
  SET_INFO(state, info) {
    state.info = info
  },
  SET_STAFF(state, staff) {
    state.staff = staff
  },
  SET_HISTORY(state, history) {
    state.history = history
  },
  SET_DIRECTION(state, direction) {
    state.direction = direction
  },
}
export const actions = {
  async fetchEvents({ commit }, payload) {
    const response = await EventService.getEvents(payload.perPage, payload.page)
    // console.log(payload)
    // console.log(response.headers['x-total-count'])
    return commit('SET_EVENTS', response.data)
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
    console.log('title:', title)
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
