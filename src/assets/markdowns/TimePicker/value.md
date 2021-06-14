```tsx
import React, { useState } from 'react';
import { TimePicker } from 'winkey-ui-react';

const Demo: React.SFC = () => {
  const [value, setValue] = useState(null);

  const onChange = time => {
    setValue(time);
  };

  return (
    <TimePicker value={value} onChange={onChange} />
  )
}

export default Demo;
```