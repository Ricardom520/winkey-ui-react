```tsx
import React from 'react'
import { Space, Button } from 'winkey-ui-react'

const Demo: React.SFC = () => {
  return (
    <div className='space-align-container'>
      <div className='space-align-block'>
        <Space align='center'>
          center
          <Button type='primary'>Primary</Button>
          <span className='mock-block'>Block</span>
        </Space>
      </div>
      <div className='space-align-block'>
        <Space align='start'>
          start
          <Button type='primary'>Primary</Button>
          <span className='mock-block'>Block</span>
        </Space>
      </div>
      <div className='space-align-block'>
        <Space align='end'>
          end
          <Button type='primary'>Primary</Button>
          <span className='mock-block'>Block</span>
        </Space>
      </div>
      <div className='space-align-block'>
        <Space align='baseline'>
          baseline
          <Button type='primary'>Primary</Button>
          <span className='mock-block'>Block</span>
        </Space>
      </div>
    </div>
  )
}

export default Demo
```
