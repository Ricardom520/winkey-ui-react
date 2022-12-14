```tsx
import React from 'react'
import { DatePicker, Space } from 'winkey-ui-react'

const Demo: React.FC = () => {
  return (
    <div>
      <Space direction='vertical'>
        <DatePicker onChange={onChange} />
        <DatePicker onChange={onChange} picker='month' />
        <DatePicker onChange={onChange} picker='year' />
      </Space>
    </div>
  )
}

export default Demo
```
