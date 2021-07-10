export default {
  SET_USER_PROFILE(state, { data, fetched }) {
    state.data = data
    state.fetched = fetched || false
  },
}
