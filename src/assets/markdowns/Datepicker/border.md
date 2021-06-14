```tsx
import React from 'react';
import { DatePicker, Space } from 'winkey-ui-react';

const Demo: React.FC = () => {
  return (
    <div style={{paddingBottom: '20px'}}>
      <Space direction="vertical" size={12}>
        <DatePicker bordered={false} />
        <DatePicker picker="month" bordered={false} />
        <DatePicker picker="year" bordered={false} />
      </Space>
    </div>
  )
}

export default Demo;
```