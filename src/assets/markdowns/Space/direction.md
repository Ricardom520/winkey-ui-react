```tsx
import React from 'react';
import { Space, Card } from 'winkey-ui-react';

const Demo: React.SFC = () => {
  return (
    <Space direction="vertical">
      <Card title="Card" style={{ width: 300 }}>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
      <Card title="Card" style={{ width: 300 }}>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
    </Space>
  )
}

export default Demo;
```