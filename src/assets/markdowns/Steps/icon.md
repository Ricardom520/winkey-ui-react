```tsx
import React from 'react'
import { Steps } from 'winkey-ui-react'

const { Step } = Steps

const Demo: React.SFC = () => {
  return (
    <Steps>
      <Step status='finish' title='Login' icon={<i className='iconfont wk-icon-user' />} />
      <Step
        status='finish'
        title='Verification'
        icon={<i className='iconfont wk-icon-maillist' />}
      />
      <Step
        status='process'
        title='Pay'
        icon={<i className='iconfont wk-icon-loading-line-round' />}
      />
      <Step status='wait' title='Done' icon={<i className='iconfont wk-icon-smile' />} />
    </Steps>
  )
}

export default Demo
```
