```tsx
import React from 'react';
import { TimePicker } from 'winkey-ui-react';

const Demo: React.SFC = () => {
  return (
    <TimePicker onChange={onChange} defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} />
  )
}

export default Demo;
```