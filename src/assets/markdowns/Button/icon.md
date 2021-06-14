```tsx
import React from 'react';
import { Button } from 'winkey-ui';

const Demo: React.SFC = () = > {
  
  return (
    <div>
      <div className='button-demo-items'>
        <Button icon="wk-icon-search" shape="circle" type="primary" />
        <Button shape="circle" type="primary">A</Button>
        <Button icon="wk-icon-search" type="primary" >Search</Button>
        <Button icon="wk-icon-search" shape="circle" />
        <Button icon="wk-icon-search" >Search</Button>
      </div>
      <div className='button-demo-items'>
        <Button icon="wk-icon-search" shape="circle" />
        <Button icon="wk-icon-search" >Search</Button>
        <Button icon="wk-icon-search" shape="circle" type="dashed" />
        <Button icon="wk-icon-search" type="dashed" >Search</Button>
      </div>
    </div>
  )
}

export default Demo;
```