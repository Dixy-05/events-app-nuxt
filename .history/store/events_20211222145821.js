import EventService from '~/services/EventService.js'
export const state = () => ({
  events: [],
  event: {},
})
export const mutations = {
  SET_EVENTS(state, events) {
    state.events = events
  },
  SET_EVENT(state, event) {
    state.event = event
  },
}
export const actions = {
  async fetchEvents({ commit }) {
    const response = await EventService.getEvents(3)
    console.log(response.headers['x-total-count'])
    return commit('SET_EVENTS', response.data)
  },
  async fetchEvent({ commit }, id) {
    const response = await EventService.getEvent(id)
    return commit('SET_EVENT', response.data)
  },
}