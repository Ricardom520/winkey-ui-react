```tsx
import React from 'react';
import { Button } from 'winkey-ui';

const Demo: React.SFC = () = > {
  
  return (
    <div>
      <div className='button-demo-items-block'>
        <Button type="primary" block>Primary</Button>
        <Button block>Default</Button>
        <Button block type='dashed'>Dashed</Button>
        <Button block type='link'>Link</Button>
      </div>
    </div>
  )
}

export default Demo;
```