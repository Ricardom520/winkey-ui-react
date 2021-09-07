```tsx
import React from 'react';
import { Dropdown, Menu } from 'winkey-ui';

const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item icon={<i className='iconfont wk-icon-download'/>} disabled>
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        2nd menu item (disabled)
      </a>
    </Menu.Item>
    <Menu.Item disabled>
      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        3rd menu item (disabled)
      </a>
    </Menu.Item>
    <Menu.Item danger>a danger item</Menu.Item>
  </Menu>
);

export default const Demo: React.SFC = () => {
  return (
    <Dropdown overlay={menu} trigger={['click']}>
      <a className="wk-dropdown-link" onClick={e => e.preventDefault()}>
        Click me <i className='iconfont wk-icon-download'/>
      </a>
    </Dropdown>
  )
}
```