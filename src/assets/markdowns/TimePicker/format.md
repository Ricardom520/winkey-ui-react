```tsx
import React from 'react'
import { TimePicker } from 'winkey-ui-react'

const Demo: React.SFC = () => {
  return <TimePicker defaultValue={moment('12:08', 'HH:mm')} format='HH:mm' />
}

export default Demo
```
