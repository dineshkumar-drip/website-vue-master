import axios from 'axios'

const actions = {
  async nuxtServerInit({ commit }) {
    try {
      const res = await axios(
        process.env.apiUrl + '/v1/constants/signup.india.json'
      )

      commit('SET_INDIAN_STATES', res.data.INDIAN_STATES)
      commit('SET_MEXICAN_STATES', res.data.MEXICAN_STATES)
      commit('SET_UAE_STATES', res.data.UAE_STATES)
      commit('SET_PARTNER_TYPES', res.data.PARTNER_TYPES)
      commit('SET_PARTNER_TYPES_MEXICO', res.data.PARTNER_TYPES_MEXICO)
      commit('SET_MEXICAN_PRODUCT_CATEGORY', res.data.PRODUCT_CATEGORY_MEXICO)
    } catch (e) {
      console.warn('[store] Could not fetch constants:', e.message)
    }
  }
}

export default actions
