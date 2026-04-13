import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'

const createStore = () => {
  return new Vuex.Store({
    state: {
      indianStates: [],
      mexicanStates: [],
      UAEStates: [],
      partnerTypes: {},
      partnerTypesMexico: {},
      mexicanProductCategory: {}
    },
    mutations,
    actions
  })
}

export default createStore
