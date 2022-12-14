```tsx
import React from 'react'
import { Menu } from 'winkey-ui'

const { SubMenu } = Menu

const Demo: React.SFC = () => {
  const [current, setCurrent] = useState<string>('SubMenu')

  const handleClick = (e: any) => {
    console.log('click ', e)
    setCurrent(e.key)
  }

  return (
    <div>
      <Menu onClick={handleClick} selectedKeys={[current]} mode='horizontal'>
        <Menu.Item key='mail' icon={<i className='iconfont wk-icon-email' />}>
          Navigation One
        </Menu.Item>
        <Menu.Item key='app' disabled icon={<i className='iconfont wk-icon-maillist' />}>
          Navigation Two
        </Menu.Item>
        <SubMenu
          key='SubMenu'
          icon={<i className='iconfont wk-icon-setting' />}
          title='Navigation Three - Submenu'
        >
          <Menu.ItemGroup title='Item 1'>
            <Menu.Item key='setting:1'>Option 1</Menu.Item>
            <Menu.Item key='setting:2'>Option 2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title='Item 2'>
            <Menu.Item key='setting:3'>Option 3</Menu.Item>
            <Menu.Item key='setting:4'>Option 4</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <Menu.Item key='alipay'>
          <a href='https://ant.design' target='_blank' rel='noopener noreferrer'>
            Navigation Four - Link
          </a>
        </Menu.Item>
      </Menu>
    </div>
  )
}

export default Demo
```
