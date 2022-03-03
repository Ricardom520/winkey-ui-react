```tsx
import React from 'react'
import { Avatar } from 'winkey-ui'

const Demo: React.FC = () => {
  return (
    <div className='icon-demo'>
      <div className='icon-demo-item'>
        <Avatar size={64} icon='wk-icon-user' />
        <Avatar size='large' icon='wk-icon-user' />
        <Avatar icon='wk-icon-user' />
        <Avatar size='small' icon='wk-icon-user' />
      </div>
      <div className='icon-demo-item'>
        <Avatar shape='square' size={64} icon='wk-icon-user' />
        <Avatar shape='square' size='large' icon='wk-icon-user' />
        <Avatar shape='square' icon='wk-icon-user' />
        <Avatar shape='square' size='small' icon='wk-icon-user' />
      </div>
    </div>
  )
}

export default Demo
```
