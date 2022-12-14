```tsx
import React, { useState } from 'react'
import { Spin, Switch } from 'winkey-ui-react'

const Demo: React.SFC = () => {
  const [loading, setLoading] = useState<boolean>(false)

  return (
    <div>
      <Spin spinning={loading}>
        <div>Further details about the context of this alert.</div>
      </Spin>
      <div style={{ marginTop: 16 }}>
        Loading state：
        <Switch checked={loading} onChange={() => setLoading(!loading)} />
      </div>
    </div>
  )
}

export default Demo
```
