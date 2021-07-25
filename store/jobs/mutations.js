export default {
  ADD_JOB(state, data) {
    state.all = [data, ...state.all]
  },
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
  REMOVE_JOB(state, id) {
    state.viewed = Object.assign({}, state.viewed, { [id]: undefined })
    const index = state.all.findIndex((j) => j.id === id)
    if (index > -1) {
      state.all.splice(index, 1)
    }
  },
  UPDATE_VIEWED_JOB(state, job) {
    state.viewed = Object.assign({}, state.viewed, { [job.id]: job })
    const index = state.all.findIndex((j) => j.id === job.id)
    if (index > -1) {
      state.all[index] = job
    } else {
      state.all = [job, ...state.all.splice()]
    }
  },
  RESET_JOBS(state) {
    state = Object.assign(
      {},
      {},
      {
        all: [],
        fetched: false,
        viewed: {},
      }
    )
  },
  RESET_VIEWED_JOBS(state) {
    state.fetched = {}
  },
}
