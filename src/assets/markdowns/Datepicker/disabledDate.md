```tsx
import React from 'react'
import { DatePicker, Space } from 'winkey-ui-react'
import { Moment } from 'moment'

const Demo: React.FC = () => {
  // 限制日期
  const disabledDate = (current: Moment) => {
    return current && current < moment().startOf('day')
  }

  return <DatePicker disabledDate={disabledDate} />
}

export default Demo
```
