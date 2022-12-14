```tsx
import React from 'react';
import { Dropdown, Menu } from 'winkey-ui';

const menu = (
  <Menu>
    <Menu.Item key="0">
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item key="1">
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3" disabled>
      3rd menu item（disabled）
    </Menu.Item>
  </Menu>
);

export default const Demo: React.SFC = () => {
  return (
    <Dropdown overlay={menu}>
      <a className="wk-dropdown-link" onClick={e => e.preventDefault()}>
        Hover me <i className='iconfont wk-icon-download'/>
      </a>
    </Dropdown>
  )
}
```
