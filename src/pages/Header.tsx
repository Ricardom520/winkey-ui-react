import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Logo from '@/assets/images/logo.png'
import Search from '@/assets/icons/search.svg'
import ListsMenus from './ListsMenus'
import LARModal from './LARModal'

import './index.less'

const Header: React.SFC = () => {
  const [activeType, setActiveType] = useState<'login' | 'register' | ''>('')

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
          </div>
        </div>
      </div>
      <LARModal visible={activeType !== ''} onCancel={() => setActiveType('')} type={activeType} />
    </header>
  )
}

export default Header
