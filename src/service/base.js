import axios from 'axios'

const ERR_OK = 0
const baseURL = '/'

axios.defaults.baseURL = baseURL

export function get(url, params) {
  return axios
    .get(url, {
      params
    })
    .then(res => {
      const serveData = res.data
      if (serveData.code === ERR_OK) {
        return serveData.result
      }
    })
    .catch(error => {
      console.log(error)
    })
}
