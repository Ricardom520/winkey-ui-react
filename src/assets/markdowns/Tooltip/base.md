```tsx
import React from 'reaact';
import { Tooltip } from 'winkey-ui-react';

const Demo:React.SFC = () => {

  return (
    <Tooltip title="prompt text">
      <span>Tooltip will show on mouse enter.</span>
    </Tooltip>
  )
}

return Demo;
```