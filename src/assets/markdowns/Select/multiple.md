```tsx
import React from 'react'
import { Select } from 'winkey-ui-react'

const { Option } = Select

const Demo: React.FC = () => {
  const handleChange = (value) => {
    console.log(`selected ${value}`)
  }

  return (
    <div style={{ marginBottom: '20px' }}>
      <Select
        mode='multiple'
        allowClear
        style={{ width: '100%', marginBottom: '10px' }}
        placeholder='Please select'
        defaultValue={['a10', 'c12']}
        onChange={handleChange}
      >
        {children}
      </Select>
      <br />
      <Select
        mode='multiple'
        disabled
        style={{ width: '100%' }}
        placeholder='Please select'
        defaultValue={['a10', 'c12']}
        onChange={handleChange}
      >
        {children}
      </Select>
    </div>
  )
}

export default Demo
```
