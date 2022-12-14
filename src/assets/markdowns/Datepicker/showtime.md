```tsx
import React from 'react'
import { DatePicker, List } from 'winkey-ui-react'

const Demo: React.FC = () => {
  return (
    <div>
      <List>
        <List.Item
          extra={
            <DatePicker
              showTime
              isMobile
              defaultValue={moment('2015-06-06 13:15', 'YYYY-MM-DD HH:mm')}
            />
          }
        >
          开始时间
        </List.Item>
      </List>
    </div>
  )
}

export default Demo
```
