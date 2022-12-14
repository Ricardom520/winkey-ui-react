```tsx
import React from 'react'
import { Space, Button } from 'winkey-ui-react'

const Demo: React.SFC = () => {
  const [size, setSize] = useState(8)

  return (
    <Space size={size}>
      <Button type='primary'>Primary</Button>
      <Button>Default</Button>
      <Button type='dashed'>Dashed</Button>
      <Button type='link'>Link</Button>
    </Space>
  )
}

export default Demo
```
