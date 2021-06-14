```tsx
import React, { useState } from 'react';
import { Switch } from 'winkey-ui-react';

const Demo: React.SFC = () => {
  const [disabled, setDisabled] = React.useState(true);

  const toggle = () => {
    setDisabled(!disabled);
  };

  return (
    <>
      <Switch disabled={disabled} defaultChecked />
      <br />
      <Button type="primary" onClick={toggle}>
        Toggle disabled
      </Button>
    </>
  )
}

export default Demo;
```