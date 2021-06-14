```tsx
import React from 'react'
import { Card } from 'winkey-ui'

const Demo: React:SFC = () => {
  return (
    <div>
      <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
      <Card size="small" title="Small size card" extra={<a href="#">More</a>} style={{ width: 300, margin: '20px 0' }}>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
    </div>
  )
}

export default Demo;
```