```tsx
import React from 'react';
import { Divider } from 'winkey-ui';

export default const Demo:React.SFC = () => {
  return (
    <div className="divider-demo-item">
      Text
      <Divider type="vertical" />
      <span style={{color: '#1890ff'}}>Link</span>
      <Divider type="vertical" />
      <span style={{color: '#1890ff'}}>Link</span>
    </div>
  )
}
```
