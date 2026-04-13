import axios from 'axios'

async function callZapierHook(data) {
  const response = await axios({ url: process.env.apiUrl + '/v1/access/token' })
  const publicToken = 'Token ' + response.data.token
  return await axios({
    url: process.env.apiUrl + `/v2/business/webhooks/zapier`,
    method: 'post',
    headers: {
      Authorization: publicToken
    },
    data
  })
}

export default {
  callZapierHook
}
