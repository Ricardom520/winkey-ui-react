```tsx
import React from 'react'
import { Card } from 'winkey-ui'

const Demo: React:SFC = () => {
  return (
    <div style={{background: '#ECECEC', padding: '20px 50px', marginBottom: '20px'}}>
      <Card title="Card title" bordered={false} style={{ width: 300 }}>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
    </div>
  )
}

export default Demo;
```