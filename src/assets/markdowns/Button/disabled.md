```tsx
import React from 'react';
import { Button } from 'winkey-ui';

export default const Index: React.SFC = () => {
  return (
    <div>
      <div className='button-demo-items'>
        <Button type="primary">Primary</Button>
        <Button type="primary" disabled>Primary(disabled)</Button>
      </div>
      <div className='button-demo-items'>
        <Button>Default</Button>
        <Button disabled>Default(disabled)</Button>
      </div>
      <div className='button-demo-items'>
        <Button type='dashed'>Dashed</Button>
        <Button type='dashed' disabled>Dashed(disabled)</Button>
      </div>
      <div className='button-demo-items'>
        <Button type='text'>Text</Button>
        <Button type='text' disabled>Text(disabled)</Button>
      </div>
      <div className='button-demo-items'>
        <Button type='link'>Link</Button>
        <Button type='link' disabled>Link(disabled)</Button>
      </div>
      <div className='button-demo-items'>
        <Button danger>Danger Default</Button>
        <Button danger disabled>Danger Default(disabled)</Button>
      </div>
      <div className='button-demo-items'>
        <Button danger type='text'>Danger Text</Button>
        <Button danger disabled type='text'>Danger Text(disabled)</Button>
      </div>
      <div className='button-demo-items'>
        <Button danger type='link'>Danger Link</Button>
        <Button danger disabled type='link'>Danger Link(disabled)</Button>
      </div>
    </div>
  )
}
```