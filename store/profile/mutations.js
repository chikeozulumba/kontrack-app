export default {
  SET_USER_PROFILE(state, { data, fetched }) {
    state.profile = data
    state.fetched = fetched || false
  },
  RESET_USER_PROFILE(state) {
    state.data = {}
    state.fetched = false
  },
}
