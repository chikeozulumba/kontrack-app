export default {
  setUser(context, user) {
    context.commit('SET_USER', user)
  },
  clearUser(context) {
    context.commit('CLEAR_USER')
  },
}
