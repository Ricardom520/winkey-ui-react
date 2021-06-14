```tsx
import React from 'react';
import { Switch } from 'winkey-ui-react';

const Demo: React.SFC = () => {

  return (
    <div style={{marginBottom: '20px'}}>
      <Switch defaultChecked style={{marginBottom: '10px'}}/>
      <br />
      <Switch size="small" defaultChecked />
    </div>
  )
}

export default Demo;
```