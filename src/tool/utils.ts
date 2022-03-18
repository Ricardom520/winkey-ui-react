import cryptoJs from 'crypto-js'
import Cookies from 'js-cookie'

export const HandleNextNodeId = (index: number, nodes, way: boolean) => {
  for (let i = index; i < nodes.length; i++) {
    const old_id = nodes[i].id
    const _paths = old_id.split('_')
    const len = _paths.length
    const value = parseInt(_paths[len - 1])
    _paths[len - 1] = `${way ? value + 1 : value - 1}`
    nodes[i].id = _paths.join('_')
  }
}

export const GetScrollY = () => {
  return document.documentElement.scrollTop || document.body.scrollTop
}

// DESC 对称加密
export const EncryptDes = (message: string) => {
  const keyHex = cryptoJs.enc.Utf8.parse('winkey_0')
  const iv = cryptoJs.enc.Utf8.parse('winkey_0')

  const encrypted = cryptoJs.DES.encrypt(message, keyHex, {
    iv: iv,
    mode: cryptoJs.mode.CBC,
    padding: cryptoJs.pad.Pkcs7,
  })

  return encrypted.toString()
}

// 存cookie
export const SetCookie = (key, value) => {
  Cookies.set(key, value)
}

// 取cookie
export const GetCookie = (key) => {
  return Cookies.get(key)
}