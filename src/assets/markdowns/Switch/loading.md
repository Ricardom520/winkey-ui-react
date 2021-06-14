```tsx
import React from 'react';
import { Switch } from 'winkey-ui-react';

const Demo: React.SFC = () => {
  
  return (
    <div style={{marginBottom: '20px'}}>
      <Switch loading defaultChecked style={{marginBottom: '10px'}} />
      <br />
      <Switch size="small" loading />
    </div>
  )
}

export default Demo;
```