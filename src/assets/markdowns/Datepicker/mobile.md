```tsx
import React from 'react';
import { DatePicker, List } from 'winkey-ui-react';

const Demo: React.FC = () => {
  return (
    <div>
      <List>
        <List.Item
          extra={
            <DatePicker isMobile defaultValue={moment('2015-06-06', 'YYYY-MM-DD')} onOk={(val, valString) => console.log(val, valString)}/>
          }
        >
          开始时间
        </List.Item>
      </List>
    </div>
  )
}

export default Demo;
```