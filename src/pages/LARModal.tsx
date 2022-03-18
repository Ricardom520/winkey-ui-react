import React, { useState } from 'react'
import { Modal, Input, message } from '../components'
import { EncryptDes, SetCookie } from '@/tool/utils'
import { fetchUserLogin, fetchUserRegister } from '@/services/user'
import { ResponseData } from '@/interface'
import { UserResponseDataStruct, UserSturct } from '@/interface/user'
import { JunglePhone } from '@/tool/regExps'

import './larModal.less'

interface LARModalProps {
  visible: boolean
  onCancel: () => void
  type: 'login' | 'register' | ''
}

const titleMap = {
  login: 'Login Form',
  register: 'Register Form'
}

const LARModal: React.FC<LARModalProps> = (props) => {
  const { visible, onCancel, type } = props
  const [focusIndex, setFocusIndex] = useState<number | undefined>()
  const [username, setUsername] = useState<string>('')
  const [password1, setPassword1] = useState<string>('')
  const [password2, setPassword2] = useState<string>('')
  const [phone, setPhone] = useState<string>(undefined)

  const handleCancel = () => {
    onCancel()
  }

  const handleSubmit = async () => {
    if (!username) {
      message.info('用户名不能为空')
      return 
    }

    const params: UserSturct = {
      username,
      password: EncryptDes(password1),
      phone
    }

    if (type === 'register') {
      if (!password1 || !password2) {
        message.info('密码不能为空')
        return
      }
  
      if (password1 !== password2) {
        message.info('两次密码不一致')
        return
      }
  
      if (!phone) {
        message.info('手机号码不能为空')
        return
      }

      if (!JunglePhone(phone)) {
        message.info('手机格式错误')
        return
      }
  
      const res: ResponseData<UserResponseDataStruct> = await fetchUserRegister(params)
  
      if (res.code === 200 && res.data) {
        message.success("注册成功")
        SetCookie('winkey_username', res.data.username)
        SetCookie('winkey_uid', res.data.uid)
        SetCookie('winkey_token', res.data.token)
  
        setTimeout(() => {
          location.reload()
        }, 300)
      } else {
        message.error(res.msg)
      }
    } else {
      if (!password1) {
        message.info('密码不能为空')
        return
      }

      const res: ResponseData<UserResponseDataStruct> = await fetchUserLogin(params)

      if (res.code === 200 && res.data) {
        SetCookie('winkey_username', res.data.username)
        SetCookie('winkey_uid', res.data.uid)
        SetCookie('winkey_token', res.data.token)

        setTimeout(() => {
          location.reload()
        }, 300)
      } else {
        message.error(res.msg)
      }
    }
  }

  return (
    <Modal visible={visible} footer={null} onCancel={handleCancel}>
      <div className='larModal-box'>
        <h2 className='title'>{titleMap[type]}</h2>
        <div className='larModal-content'>
          <div className='larModal-item'>
            <i className='iconfont wk-icon-user' />
            <div className='larModal-item-input'>
              <Input
                placeholder='Username'
                onChange={e => setUsername(e.target.value)}
                bordered={false}
                onFocus={() => setFocusIndex(0)}
                onBlur={() => setFocusIndex(undefined)}
              />
              <span className='underline' style={{ width: focusIndex === 0 ? '100%' : 0 }} />
            </div>
          </div>
          <div className='larModal-item'>
            <i className='iconfont wk-icon-password' />
            <div className='larModal-item-input'>
              <Input.Password
                placeholder='Password'
                bordered={false}
                onChange={(e) => setPassword1(e.target.value)}
                onFocus={() => setFocusIndex(1)}
                onBlur={() => setFocusIndex(undefined)}
              />
              <span className='underline' style={{ width: focusIndex === 1 ? '100%' : 0 }} />
            </div>
          </div>
          {type === 'register' && (
            <>
              <div className='larModal-item'>
                <i className='iconfont wk-icon-password' />
                <div className='larModal-item-input'>
                  <Input.Password
                    placeholder='Confirm Password'
                    bordered={false}
                    onChange={(e) => setPassword2(e.target.value)}
                    onFocus={() => setFocusIndex(2)}
                    onBlur={() => setFocusIndex(undefined)}
                  />
                  <span className='underline' style={{ width: focusIndex === 2 ? '100%' : 0 }} />
                </div>
              </div>
              <div className='larModal-item'>
                <i className='iconfont wk-icon-phone' />
                <div className='larModal-item-input'>
                  <Input
                    placeholder='Phone'
                    bordered={false}
                    onChange={(e) => setPhone(e.target.value)}
                    onFocus={() => setFocusIndex(3)}
                    onBlur={() => setFocusIndex(undefined)}
                  />
                  <span className='underline' style={{ width: focusIndex === 3 ? '100%' : 0 }} />
                </div>
              </div>
            </>
          )}
          <div className='larModal-btn'>
            <button onClick={handleSubmit}>
              <i className='iconfont wk-icon-back' />
            </button>
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default LARModal
