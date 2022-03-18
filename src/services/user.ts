import request from '@/tool/request'
import { UserSturct } from '@/interface/user'

/**
 * 用户注册
 */
export function fetchUserRegister(params: UserSturct) {
  return request('/v1/winkeyServer/user/register', {
    method: 'POST',
    data: params,
  })
}

/**
 * 用户登录
 */
export function fetchUserLogin(params: UserSturct) {
  return request('/v1/winkeyServer/user/login', {
    method: 'POST',
    data: params,
  })
}