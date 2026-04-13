const mutations = {
  SET_INDIAN_STATES(state, dataIndianStates) {
    state.indianStates = dataIndianStates
  },

  SET_MEXICAN_STATES(state, dataMexicanStates) {
    state.mexicanStates = dataMexicanStates
  },

  SET_UAE_STATES(state, dataUAEStates) {
    state.UAEStates = dataUAEStates
  },

  SET_PARTNER_TYPES(state, dataPartnerTypes) {
    state.partnerTypes = dataPartnerTypes
  },

  SET_PARTNER_TYPES_MEXICO(state, dataPartnerTypesMexico) {
    state.partnerTypesMexico = dataPartnerTypesMexico
  },

  SET_MEXICAN_PRODUCT_CATEGORY(state, dataMexicanProductCategory) {
    state.mexicanProductCategory = dataMexicanProductCategory
  }
}

export default mutations
