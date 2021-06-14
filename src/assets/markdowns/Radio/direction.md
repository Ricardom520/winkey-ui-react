```tsx
import React, { useState } from 'react';
import { Radio, Input } from 'winkey-ui';

const Demo: React.SFC = () => {
  const [value, setValue] = useState<number>(1);
  
  const onChange = e => {
    console.log('radio checked', e.target.value);
    setValue5(e.target.value)
  }

  return (
    <div style={{marginBottom: '20px'}}>
      <Radio.Group onChange={onChange} value={value} direction="col">
        <Radio style={radioStyle} value={1}>
          Option A
        </Radio>
        <Radio style={radioStyle} value={2}>
          Option B
        </Radio>
        <Radio style={radioStyle} value={3}>
          Option C
        </Radio>
        <Radio style={radioStyle} value={4}>
          More...
          {value === 4 ? <Input style={{ width: 100, marginLeft: 10 }} /> : null}
        </Radio>
      </Radio.Group>
    </div>
  )
}

export default Demo;
```