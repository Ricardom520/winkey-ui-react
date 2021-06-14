```tsx
import React from 'react';
import { PageHeader } from 'winkey-ui-react';

const Demo: React.SFC = () => {
  return (
    <PageHeader
      className="site-page-header"
      onBack={() => null}
      title="Title"
      subTitle="This is a subtitle"
    />
  )
}

export default Demo;
```