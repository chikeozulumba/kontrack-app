export default {
  SET_JOBS(state, { data, fetched }) {
    state.all = data
    state.fetched = fetched || true
  },
  SET_VIEWED_JOB(state, job) {
    state.viewed = Object.assign({}, state.viewed, { [job.id]: job })
  },
  REMOVE_VIEWED_JOB(state, id) {
    state.viewed = Object.assign({}, state.viewed, { [id]: undefined })
  },
  UPDATE_VIEWED_JOB(state, job) {
    state.viewed = Object.assign({}, state.viewed, { [job.id]: job })
  },
  RESET_JOBS(state) {
    state.all = []
  },
  RESET_VIEWED_JOBS(state) {
    state.fetched = {}
  },
}
