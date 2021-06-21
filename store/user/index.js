import getters from './getters'
import actions from './actions'
import mutations from './mutations'

const defaultState = () => ({
  user: {
    firstName: null,
    lastName: null,
    phoneNumber: null,
    jobTitle: null,
    password: null,
    email: null,
    name: null,
    officialEmail: null,
    officialPhonenumber: null,
    countryId: null,
    stateId: null,
    address: null,
  },
})

export default {
  state: defaultState,
  getters,
  actions,
  mutations,
}
