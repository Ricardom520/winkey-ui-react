import axios from 'axios'
import { GetCookie } from './utils'

const service = axios.create({
  baseURL: '/',
  timeout: 400000,
  withCredentials: false
})

// 设置请求拦截器
service.interceptors.request.use(
  (req) => {
    const token = GetCookie('winkey_token')

    if (token) {
      req.headers.token = token
    }

    return req
  },
  function (error) {
    return Promise.reject(error)
  }
)

// 设置响应拦截器
service.interceptors.response.use(
  (res) => {
    return res.data
  },
  function (error) {
    return Promise.reject(error)
  }
)

export default service