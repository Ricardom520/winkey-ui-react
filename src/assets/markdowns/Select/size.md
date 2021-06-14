```tsx
import React from 'react';
import { Select, Radio } from 'winkey-ui-react';

const { Option } = Select;

const Demo:React.FC = () => {
  
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  }

  return (
    <div style={{marginBottom: '20px'}}>
      <Radio.Group value={size} onChange={e=>setSize(e.target.value)}>
        <Radio.Button value="large">Large</Radio.Button>
        <Radio.Button value="default">Default</Radio.Button>
        <Radio.Button value="small">Small</Radio.Button>
      </Radio.Group>
      <br />
      <br />
      <Select size={size} defaultValue="a10" onChange={handleChange} style={{ width: 200, marginBottom: '10px' }}>
        {children}
      </Select>
      <br />
      <Select
        mode="multiple"
        size={size}
        placeholder="Please select"
        defaultValue={['a10', 'c12']}
        onChange={handleChange}
        style={{ width: '100%' }}
      >
        {children}
      </Select>
    </div>
  )
}

export default Demo;
```