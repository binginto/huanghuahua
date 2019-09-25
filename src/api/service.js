import axios from 'axios'
// import store from '@/store'
import api from '@/api/api'

const service = axios.create({
  baseURL: api.baseUrl,
  timeout: 5000
})

// request interceptor  token
// service.interceptors.request.use(
//   config => {
//     if (store.getters.token) {

//       config.headers['accessToken'] = 'bearer ' + getToken()
//     }
//     return config
//   },
//   error => {
//     return Promise.reject(error)
//   }
// )

// response interceptor
service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.code < 0) {
      // 报错
      return Promise.reject(res.message || 'error')
    } else {
      return res
    }
  },
  error => {
    return Promise.reject(error)
  }
)

export default service