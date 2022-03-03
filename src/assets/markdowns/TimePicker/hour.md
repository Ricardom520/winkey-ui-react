```tsx
import React from 'react'
import { TimePicker } from 'winkey-ui-react'

const Demo: React.SFC = () => {
  return <TimePicker defaultValue={moment('12:08', 'hh:mm')} format='hh:mm' />
}

export default Demo
```
