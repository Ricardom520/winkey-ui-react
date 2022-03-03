import React, { Component } from 'react'

import Menu from '../Menu'

class DropdownTitle extends Component {
  render() {
    return (
      <Menu>
        <Menu.Item>
          <a target='_blank' rel='noopener noreferrer' href='https://www.wkgroup.com'>
            1st menu item
          </a>
        </Menu.Item>
        <Menu.Item icon={<i className='iconfont wk-icon-download' />} disabled>
          <a target='_blank' rel='noopener noreferrer' href='https://www.aliyun.com'>
            2nd menu item (disabled)
          </a>
        </Menu.Item>
        <Menu.Item disabled>
          <a target='_blank' rel='noopener noreferrer' href='https://www.luohanacademy.com'>
            3rd menu item (disabled)
          </a>
        </Menu.Item>
        <Menu.Item danger>a danger item</Menu.Item>
      </Menu>
    )
  }
}

export default DropdownTitle
