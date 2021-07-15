export default {
  setProfile(context, data) {
    context.commit('SET_USER_PROFILE', data)
  },
  resetProfile(context) {
    context.commit('RESET_USER_PROFILE')
  },
}
