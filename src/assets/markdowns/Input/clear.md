```tsx
import React from 'react';
import { Input } from 'winkey-ui';

const Demo:React.SFC = () => {
  return (
    <div style={{marginBottom: '20px'}}>
      <Input placeholder="input with clear icon" allowClear onChange={onChange} />
      <br />
      <br />
      <TextArea placeholder="textarea with clear icon" allowClear onChange={onChange} />
    </div>
  )
}

export default Demo;
```