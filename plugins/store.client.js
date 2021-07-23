import createPersistedState from 'vuex-persistedstate'

export default ({ store, req }) => {
  createPersistedState({
    key: 'kontrack',
    paths: ['profile', 'jobs'],
    storage: window.localStorage,
  })(store)
}
