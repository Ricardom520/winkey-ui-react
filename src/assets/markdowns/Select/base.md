```tsx
import React from 'react'
import { Select } from 'winkey-ui-react'

const { Option } = Select

const Demo: React.FC = () => {
  const handleChange = (value) => {
    console.log(`selected ${value}`)
  }

  return (
    <div style={{ marginBottom: '20px' }} className='select-demo-item'>
      <Select defaultValue='lucy' style={{ width: 120 }} onChange={handleChange}>
        <Option value='jack'>Jack</Option>
        <Option value='lucy'>Lucy</Option>
        <Option value='disabled' disabled>
          Disabled
        </Option>
        <Option value='Yiminghe'>yiminghe</Option>
      </Select>
      <Select defaultValue='lucy' style={{ width: 120 }} disabled>
        <Option value='lucy'>Lucy</Option>
      </Select>
      <Select defaultValue='lucy' style={{ width: 120 }} loading>
        <Option value='lucy'>Lucy</Option>
      </Select>
      <Select defaultValue='lucy' style={{ width: 120 }} allowClear>
        <Option value='lucy'>Lucy</Option>
      </Select>
    </div>
  )
}

export default Demo
```
