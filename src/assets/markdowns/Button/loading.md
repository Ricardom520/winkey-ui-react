```tsx
import React, { useState } from 'react';
import { Button } from 'winkey-ui';

const Demo: React.SFC = () = > {
  const [loading1, setLoading1] = useState<boolean>(false);
  const [loading2, setLoading2] = useState<boolean>(false);
  const [loading3, setLoading3] = useState<boolean>(false);

  return (
    <div>
      <div className='button-demo-items'>
        <Button type="primary" loading>Loading</Button>
        <Button type="primary" loading size="small">Loading</Button>
        <Button type="primary" loading/>
      </div>
      <div className='button-demo-items'>
        <Button type="primary" loading={loading1} onClick={()=>setLoading1(true)}>Click me!</Button>
        <Button type="primary" loading={loading2} onClick={()=>setLoading2(true)} icon="wk-icon-switch">Click me!</Button>
        <Button type="primary" loading={loading3} onClick={()=>setLoading3(true)} icon="wk-icon-switch"/>
      </div>
    </div>
  )
}

export default Demo;
```
