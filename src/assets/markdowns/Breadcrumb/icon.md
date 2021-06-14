```tsx
import React from 'react';
import { Breadcrumb } from 'winkey-ui-react';

const Demo: React.SFC = () => {
  return (
    <Breadcrumb>
      <Breadcrumb.Item href="">
        <i className="iconfont wk-icon-home" />
      </Breadcrumb.Item>
      <Breadcrumb.Item href="">
        <i className="iconfont wk-icon-user" />
        <span>Application List</span>
      </Breadcrumb.Item>
      <Breadcrumb.Item>Application</Breadcrumb.Item>
    </Breadcrumb>
  )
}

export default Demo;
```