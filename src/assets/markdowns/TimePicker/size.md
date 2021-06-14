```tsx
import React from 'react';
import { TimePicker, Space } from 'winkey-ui-react';

const Demo: React.SFC = () => {
  return (
    <div style={{marginBottom: '20px'}}>
      <Space>
        <TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} size="large" />
        <TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} />
        <TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} size="small" />
      </Space>
    </div>
  )
}

export default Demo;
```