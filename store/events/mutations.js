export default {
  SET_EVENTS(state, events) {
    state.events = events.data
    state.totalEvents = events.total
    state.eventsPerPage = events.perPage
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
