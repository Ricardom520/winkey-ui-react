```tsx
import React from 'react';
import { Steps, Divider } from 'winkey-ui-react';

const { Step } = Steps;

const Demo: React.SFC = () => {
  const [current, setCurrent] = React.useState(0);

  const onChange = current => {
    console.log('onChange:', current);
    setCurrent(current);
  };

  return (
    <>
      <Steps current={current} onChange={onChange}>
        <Step title="Step 1" description="This is a description." />
        <Step title="Step 2" description="This is a description." />
        <Step title="Step 3" description="This is a description." />
      </Steps>

      <Divider />

      <Steps current={current} onChange={onChange} direction="vertical">
        <Step title="Step 1" description="This is a description." />
        <Step title="Step 2" description="This is a description." />
        <Step title="Step 3" description="This is a description." />
      </Steps>
    </>
  )
}

export default Demo;
```