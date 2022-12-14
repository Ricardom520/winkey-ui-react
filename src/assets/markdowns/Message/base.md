```tsx
import React from 'react'
import { Button, message } from 'winkey-ui-react'

const Demo: React.SFC = () => {
  const info = () => {
    message.info('This is a normal message')
  }

  return (
    <Button type='primary' onClick={info}>
      Display normal message
    </Button>
  )
}

export default Demo
```
