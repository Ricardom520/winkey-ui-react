```tsx
import React from 'react'
import { Switch } from 'winkey-ui-react'

const Demo: React.SFC = () => {
  return (
    <div style={{ marginBottom: '20px' }}>
      <Switch
        checkedChildren='开启'
        unCheckedChildren='关闭'
        defaultChecked
        style={{ marginBottom: '10px' }}
      />
      <br />
      <Switch checkedChildren='1' unCheckedChildren='0' style={{ marginBottom: '10px' }} />
      <br />
      <Switch
        checkedChildren={<i className='iconfont wk-icon-hock' />}
        unCheckedChildren={<i className='iconfont wk-icon-close' />}
        defaultChecked
        style={{ marginBottom: '10px' }}
      />
    </div>
  )
}

export default Demo
```
