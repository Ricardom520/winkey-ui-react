import React from 'react'
import { Link } from 'react-router-dom'

import Logo from '~/assets/images/logo.png'
import ListsMenus from './listsMenu'
import styles from './index.module.less'

interface HeaderProps {
  // 0 半屏, 1 全屏
  type?: 0 | 1
}

const headerTypeClassName: Record<string, string> = {
  0: '',
  1: 'header-wrapper-all'
}

const Header: React.FC<HeaderProps> = (props) => {
  const { type = 0 } = props

  return (
    <div className={styles['header-wrapper'] + ' ' + styles[headerTypeClassName[type]]}>
      <header>
        <div className={styles['container']}>
          <Link to='/'>
            <img src={Logo} alt='logo' className={styles['logo']} />
          </Link>
          <ListsMenus />
        </div>
      </header>
    </div>
  )
}

export default Header
