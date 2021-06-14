```tsx
import React from 'react';
import { PageHeader } from 'winkey-ui-react';

const Demo: React.SFC = () => {
  return (
    <div className="site-page-header-ghost-wrapper" style={{marginBottom: '20px'}}>
      <PageHeader
        ghost={false}
        onBack={() => window.history.back()}
        title="Title"
        subTitle="This is a subtitle"
        extra={[
          <Button key="3">Operation</Button>,
          <Button key="2">Operation</Button>,
          <Button key="1" type="primary">
            Primary
          </Button>,
        ]}
      >
        Hello World
      </PageHeader>
    </div>
  )
}

export default Demo;
```