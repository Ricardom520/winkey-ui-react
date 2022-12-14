```tsx
import React from 'react'
import { Select } from 'winkey-ui-react'

const { Option } = Select

const Demo: React.FC = () => {
  const handleChange = (value) => {
    console.log(`selected ${value}`)
  }

  const onChange = (value) => {
    console.log(`selected ${value}`)
  }

  const onBlur = () => {
    console.log('blur')
  }

  const onFocus = () => {
    console.log('focus')
  }

  const onSearch = (val) => {
    console.log('search:', val)
  }

  return (
    <div style={{ marginBottom: '20px' }} className='select-demo-item'>
      <Select
        showSearch
        style={{ width: 200 }}
        placeholder='Select a person'
        optionFilterProp='children'
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        onSearch={onSearch}
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      >
        <Option value='jack'>Jack</Option>
        <Option value='lucy'>Lucy</Option>
        <Option value='tom'>Tom</Option>
      </Select>
    </div>
  )
}

export default Demo
```
