import getters from './getters'
import actions from './actions'
import mutations from './mutations'

const defaultState = () => ({
  data: {},
  fetched: false,
})

export default {
  state: defaultState,
  getters,
  actions,
  mutations,
}
