import React, { useState } from 'react'
import { Modal, Input, message } from '../components'
import { EncryptDes } from '@/tool/utils'
import { fetchUserRegister } from '@/services/user'

import './larModal.less'
import { UserSturct } from '@/interface/user'

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
  const [phone, setPhone] = useState<string>('')

  const handleCancel = () => {
    onCancel()
  }

  const handleSubmit = () => {
    if (!username) {
      message.info('用户名不能为空')
      return 
    }

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

    const params: UserSturct = {
      username,
      password: EncryptDes(password1),
      phone: parseInt(phone)
    }

    fetchUserRegister(params)
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
