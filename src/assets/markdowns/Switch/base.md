```tsx
import React from 'react';
import { Switch } from 'winkey-ui-react';

const Demo: React.SFC = () => {
  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  }

  return (
    <Switch defaultChecked onChange={onChange} />
  )
}

export default Demo;
```