```tsx
import React from 'react';
import { Button } from 'winkey-ui';

const Demo: React.SFC = () = > {
  const [size, setSize] = useState<'small' | '' | 'large'>('');

  return (
    <div>
      <div className='button-demo-items'>
        <Button onClick={()=>setSize('large')} className={size === 'large' ? 'size-active' : ''}>Large</Button>
        <Button onClick={()=>setSize('')} className={size === '' ? 'size-active' : ''}>Default</Button>
        <Button onClick={()=>setSize('small')} className={size === 'small' ? 'size-active' : ''}>Small</Button>
      </div>
      <div className='button-demo-items'>
        <Button type='primary' size={size}>Primary</Button>
        <Button size={size}>Default</Button>
        <Button type='dashed' size={size}>Dashed</Button>
      </div>
    </div>
  )
}

export default Demo;
```
