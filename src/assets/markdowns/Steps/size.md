```tsx
import React from 'react'
import { Steps } from 'winkey-ui-react'

const { Step } = Steps

const Demo: React.SFC = () => {
  return (
    <Steps size='small' current={1}>
      <Step title='Finished' />
      <Step title='In Progress' />
      <Step title='Waiting' />
    </Steps>
  )
}

export default Demo
```
