export default {
  addJob(context, data) {
    context.commit('ADD_JOB', data)
  },
  setJobs(context, data) {
    context.commit('SET_JOBS', data)
  },
  setViewedJob(context, data) {
    context.commit('SET_VIEWED_JOB', data)
  },
  removeJob(context, id) {
    context.commit('REMOVE_JOB', id)
  },
  removeViewedJob(context, data) {
    context.commit('REMOVE_VIEWED_JOB', data)
  },
  updateViewedJob(context, data) {
    context.commit('UPDATE_VIEWED_JOB', data)
  },
  resetJobs(context) {
    context.commit('RESET_JOBS')
  },
}
