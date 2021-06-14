```tsx
import React from 'react';
import { Avatar, Image } from 'winkey-ui';

const Demo: React.FC = () => {
  return (
    <div className="icon-demo">
      <div className="icon-demo-item">
        <Avatar icon="wk-icon-user" />
        <Avatar>U</Avatar>
        <Avatar size={40}>USER</Avatar>
        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" style={{background: '#fff'}} />
        <Avatar
          src={<Image src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
        />
        <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>U</Avatar>
        <Avatar style={{ backgroundColor: '#87d068' }} icon="wk-icon-user" />
      </div>
    </div>
  )
}

export default Demo;
```