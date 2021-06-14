```tsx
import React from 'react';
import { Input } from 'winkey-ui';

const Demo:React.SFC = () => {
  return (
    <div style={{marginBottom: '20px'}}>
      <Input.Password placeholder="input password" style={{marginBottom: '20px'}}/>
      <Input.Password
        placeholder="input password"
        iconRender={visible => (visible ? <i className="iconfont wk-icon-open-eyes"/> : <i className="iconfont wk-icon-close-eyes"/>)}
      />
    </div>
  )
}

export default Demo;
```