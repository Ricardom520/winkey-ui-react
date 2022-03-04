import axios from 'axios'

const service = axios.create({
  baseURL: '/',
  timeout: 400000,
  withCredentials: false
})

// 设置请求拦截器
service.interceptors.request.use(
  (req) => {
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