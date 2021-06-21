export default {
  SET_USER(state, user) {
    state.user = { ...state.user, ...user }
  },
  CLEAR_USER(state) {
    state.user = {}
  },
}
