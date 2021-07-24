export default {
  all: (state) => state.all,
  fetched: (state) => state.fetched,
  viewJob: (state) => (id) => {
    const job = state.viewed[id] || state.all.find((j) => j.id === id)
    return job || null
  },
}
