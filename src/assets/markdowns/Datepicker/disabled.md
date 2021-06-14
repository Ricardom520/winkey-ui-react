```tsx
import React from 'react';
import { DatePicker, Space } from 'winkey-ui-react';

const Demo: React.FC = () => {
  return (
    <div>
      <Space direction="vertical">
        <DatePicker defaultValue={moment('2015-06-06', 'YYYY-MM-DD')} disabled />
        <DatePicker picker="month" defaultValue={moment('2015-06', 'YYYY-MM')} disabled />
      </Space>
    </div>
  )
}

export default Demo;
```