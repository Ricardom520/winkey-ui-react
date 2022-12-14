```tsx
import React from 'react'
import { Radio, Button } from 'winkey-ui'

const Demo: React.SFC = () => {
  const [disabled, setDisabled] = useState<boolean>(true)

  return (
    <div style={{ marginBottom: '20px' }}>
      <Radio defaultChecked={false} disabled={disabled}>
        Disabled
      </Radio>
      <Radio defaultChecked disabled={disabled}>
        Disabled
      </Radio>
      <br />
      <Button type='primary' onClick={() => setDisabled(!disabled)} style={{ marginTop: 16 }}>
        Toggle disabled
      </Button>
    </div>
  )
}

export default Demo
```
