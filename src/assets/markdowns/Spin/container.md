```tsx
import React from 'react';
import { Spin } from 'winkey-ui-react';

const Demo: React.SFC = () => {
  return (
    <div className="spin-example">
      <Spin />
    </div>
  )
}

export default Demo;

.spin-example {
  margin: 20px 0;
  margin-bottom: 20px;
  padding: 30px 50px;
  text-align: center;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}
```