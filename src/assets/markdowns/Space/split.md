```tsx
import React from 'react'
import { Space, Divider, Button } from 'winkey-ui-react'

const Demo: React.SFC = () => {
  return (
    <Space split={<Divider type='vertical' />}>
      <Button type='link'>Link</Button>
      <Button type='link'>Link</Button>
      <Button type='link'>Link</Button>
    </Space>
  )
}

export default Demo
```
