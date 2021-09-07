```tsx
import React from 'react';
import { Spin, Space } from 'winkey-ui-react';

const Demo: React.SFC = () => {
  return (
    <Space size="middle">
      <Spin size="small" />
      <Spin />
      <Spin size="large" />
    </Space>
  )
}

export default Demo;
```