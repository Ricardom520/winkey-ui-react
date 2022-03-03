```tsx
import React from 'react'
import { Steps } from 'winkey-ui-react'

const { Step } = Steps

const Demo: React.SFC = () => {
  return (
    <Steps direction='vertical' size='small' current={1}>
      <Step title='Finished' description='This is a description.' />
      <Step title='In Progress' description='This is a description.' />
      <Step title='Waiting' description='This is a description.' />
    </Steps>
  )
}

export default Demo
```
