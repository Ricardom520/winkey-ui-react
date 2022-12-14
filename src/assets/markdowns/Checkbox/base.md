```tsx
import React from 'react'
import { Checkbox } from 'winkey-ui-react'

const Demo: React.SFC = () => {
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`)
  }

  return (
    <div style={{ marginBottom: '20px' }}>
      <Checkbox onChange={onChange}>Checkbox</Checkbox>
    </div>
  )
}

export default Demo
```
