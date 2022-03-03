import React, { useState } from 'react'
import { Modal, Input } from '../components'

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

  const handleCancel = () => {
    onCancel()
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
                    onFocus={() => setFocusIndex(3)}
                    onBlur={() => setFocusIndex(undefined)}
                  />
                  <span className='underline' style={{ width: focusIndex === 3 ? '100%' : 0 }} />
                </div>
              </div>
            </>
          )}
          <div className='larModal-btn'>
            <button>
              <i className='iconfont wk-icon-back' />
            </button>
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default LARModal
