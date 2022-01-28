```tsx
import React from 'react';
import { InputNumber } from 'winkey-ui-react';

const Demo:React.SFC = () => {
  const onChange = (value) => {
    console.log('changed', value);
  }
  
  return (
    <InputNumber min={1} max={10} defaultValue={3} onChange={onChange} />
  )
}

export default Demo;
```