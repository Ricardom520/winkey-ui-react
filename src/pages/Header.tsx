import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { GetCookie } from '@/tool/utils'
import Logo from '@/assets/images/logo.png'
import Search from '@/assets/icons/search.svg'
import defaultAvatar from '@/assets/images/default_avatar.png'
import ListsMenus from './ListsMenus'
import LARModal from './LARModal'

import './index.less'

const Header: React.SFC = () => {
  const [activeType, setActiveType] = useState<'login' | 'register' | ''>('')
  const [username, setUsername] = useState<string>('')

  useEffect(() => {
    setUsername(GetCookie('winkey_username'))
  }, [])

  return (
    <header className='header_container'>
      <div className='logo'>
        <Link to='/'>
          <img src={Logo} alt='logo' />
        </Link>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          paddingRight: '100px'
        }}
      >
        <div className='find'>
          <img src={Search} alt='find' />
          <input type='text' placeholder='搜索文档' />
        </div>
        <div className='menus'>
          <ListsMenus />
          <div className='login_box'>
            {
              !username &&
              <>
                <span
                  className={`t1 ${activeType === 'login' ? 'active' : ''}`}
                  onClick={() => setActiveType('login')}
                >
                  登录
                </span>
                <span className='t2'>|</span>
                <span
                  className={`t1 ${activeType === 'register' ? 'active' : ''}`}
                  onClick={() => setActiveType('register')}
                >
                  注册
                </span>
                <i className='iconfont wk-icon-user' />              
              </>
            }
            {
              username &&
              <img src={defaultAvatar} className='user_avatar' />
            }
          </div>
        </div>
      </div>
      <LARModal visible={activeType !== ''} onCancel={() => setActiveType('')} type={activeType} />
    </header>
  )
}

export default Header
