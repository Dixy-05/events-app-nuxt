import EventService from '~/services/EventService.js'
export const state = () => ({
  events: [],
})
export const mutations = {
  SET_EVENTS(state, events) {
    state.events = events
  },
}
export const actions = {
  async fetchEvents({ commit }) {
    const response = await EventService.getEvents()
    return 'SET_EVENTS', response.data
  },
}
