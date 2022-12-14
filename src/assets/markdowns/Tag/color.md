```tsx
import React from 'reaact'
import { Tag, Divider } from 'winkey-ui-react'

const Demo: React.SFC = () => {
  return (
    <div style={{ marginBottom: '20px' }}>
      <Divider orientation='left'>Presets</Divider>
      <div>
        <Tag color='magenta'>magenta</Tag>
        <Tag color='red'>red</Tag>
        <Tag color='volcano'>volcano</Tag>
        <Tag color='orange'>orange</Tag>
        <Tag color='gold'>gold</Tag>
        <Tag color='lime'>lime</Tag>
        <Tag color='green'>green</Tag>
        <Tag color='cyan'>cyan</Tag>
        <Tag color='blue'>blue</Tag>
        <Tag color='geekblue'>geekblue</Tag>
        <Tag color='purple'>purple</Tag>
      </div>
      <Divider orientation='left'>Custom</Divider>
      <div>
        <Tag color='#f50'>#f50</Tag>
        <Tag color='#2db7f5'>#2db7f5</Tag>
        <Tag color='#87d068'>#87d068</Tag>
        <Tag color='#108ee9'>#108ee9</Tag>
      </div>
    </div>
  )
}

return Demo
```
