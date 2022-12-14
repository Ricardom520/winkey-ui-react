```tsx
import React from 'react'
import { DatePicker, Space, Radio } from 'winkey-ui-react'

const Demo: React.FC = () => {
  return (
    <div style={{ paddingBottom: '20px' }}>
      <Space direction='vertical' size={12}>
        <Radio.Group value={size} onChange={(e) => setSize(e.target.value)}>
          <Radio.Button value='large'>Large</Radio.Button>
          <Radio.Button value='default'>Default</Radio.Button>
          <Radio.Button value='small'>Small</Radio.Button>
        </Radio.Group>
        <DatePicker size={size} />
        <DatePicker size={size} picker='month' />
      </Space>
    </div>
  )
}

export default Demo
```
