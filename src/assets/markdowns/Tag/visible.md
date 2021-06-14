```tsx
import React, { useState } from 'reaact';
import { Tag, Button } from 'winkey-ui-react';

const Demo:React.SFC = () => {
  const [visible, setVisible] = useState<boolean>(true);

  return (
    <>
      <Tag
        closable
        visible={visible}
        onClose={() => setVisible(false)}
      >
        Movies
      </Tag>
      <br />
      <Button size="small" onClick={() => setVisible(!visible)}>
        Toggle
      </Button>
    </>
  )
}

return Demo;
```