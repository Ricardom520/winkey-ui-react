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