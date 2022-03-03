```tsx
import React from 'react';
import { Button } from 'winkey-ui';

const Demo: React.SFC = () = > {

  return (
    <div>
      <div className='button-demo-items'>
        <Button type='primary'>Primary Button</Button>
        <Button>Default Button</Button>
        <Button type='dashed'>Dashed Button</Button>
      </div>
      <div className='button-demo-items'>
        <Button type='text'>Text Button</Button>
        <Button type='link'>Link Button</Button>
      </div>
    </div>
  )
}

export default Demo;
```
