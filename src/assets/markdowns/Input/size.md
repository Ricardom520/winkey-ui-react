```tsx
import React from 'react';
import { Input } from 'winkey-ui';

const Demo:React.SFC = () => {
  return (
    <div style={{marginBottom: '20px'}}>
      <Input size="large" placeholder="large size" prefix="wk-icon-user" />
      <br />
      <br />
      <Input placeholder="default size" prefix="wk-icon-user" />
      <br />
      <br />
      <Input size="small" placeholder="small size" prefix="wk-icon-user" />
    </div>
  )
}

export default Demo;
```