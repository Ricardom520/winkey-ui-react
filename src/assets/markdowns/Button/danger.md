```tsx
import React from 'react';
import { Button } from 'winkey-ui';

const Demo: React.SFC = () = > {
  
  return (
    <div className='button-demo-items'>
      <Button type="primary" danger>Primary</Button>
      <Button danger>Default</Button>
      <Button danger type='dashed'>Dashed</Button>
      <Button danger type='link'>Text</Button>
      <Button danger type='link'>Link</Button>
    </div>
  )
}

export default Demo;
```