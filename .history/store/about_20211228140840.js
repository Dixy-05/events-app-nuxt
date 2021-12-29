import EventService from '~/services/EventService.js'
export const state = () => ({
  info: {},
})
export const mutations = {
  SET_INFO(state, info) {
    state.info = info
  },
}
export const actions = {
  async fetchInfo({ commit }, title) {
    const response = await EventService.getInfo(title)
    return commit('SET_INFO', response.data)
  },
}
