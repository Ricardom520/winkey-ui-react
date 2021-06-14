```tsx
import React from 'reaact';
import { Tag } from 'winkey-ui-react';

const Demo:React.SFC = () => {

  return (
    <div style={{marginBottom: '20px'}}>
      <Divider orientation="left">Without icon</Divider>
      <div>
        <Tag color="success">success</Tag>
        <Tag color="processing">processing</Tag>
        <Tag color="error">error</Tag>
        <Tag color="warning">warning</Tag>
        <Tag color="default">default</Tag>
      </div>
    </div>
  )
}

return Demo;
```