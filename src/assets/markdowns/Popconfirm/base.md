```tsx
import React from 'react';
import { Popconfirm } from 'winkey-ui-react';

const Demo: React.SFC = () => {
  const confirm = (e) => {
    console.log(e);
    message.success('Click on Yes');
  }

  const cancel = (e) => {
    console.log(e);
    message.error('Click on No');
  }

  return (
    <Popconfirm
      title="Are you sure to delete this task?"
      onConfirm={confirm}
      onCancel={cancel}
      okText="Yes"
      cancelText="No"
    >
      <a href="#">Delete</a>
    </Popconfirm>
  )
}

export default Demo;
```