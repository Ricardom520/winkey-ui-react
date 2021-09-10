import React from 'react'
import { Link } from 'react-router-dom';

import Logo from '@/assets/images/logo.png';
import Search from '@/assets/icons/search.svg';
import ListsMenus from './ListsMenus';

import './index.less';

const Header: React.SFC = () => {
  return (
    <header className='header_container'>
      <div className='logo'>
        <Link to='/'>
          <img src={Logo} alt='logo' />
        </Link>
      </div>
      <div style={{display: 'flex', justifyContent: 'space-between', width: '100%', paddingRight: '100px'}}>
        <div className='find'>
          <img src={Search} alt='find' />
          <input type='text' placeholder='搜索文档' />
        </div>
        <ListsMenus/>
      </div>
    </header>
  )
}

export default Header