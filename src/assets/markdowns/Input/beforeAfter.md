```tsx
import React from 'react'
import { Input } from 'winkey-ui'

const Demo: React.SFC = () => {
  return (
    <div style={{ marginBottom: '20px' }}>
      <div style={{ marginBottom: 16 }}>
        <Input addonBefore='http://' addonAfter='.com' defaultValue='mysite' />
      </div>
      <div style={{ marginBottom: 16 }}>
        <Input addonBefore='http://' suffix='.com' defaultValue='mysite' />
      </div>
    </div>
  )
}

export default Demo
```
