```tsx
import React from 'react'
import { List } from 'winkey-ui'

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.'
]

const Demo: React.SFC = () => {
  return <List dataSource={data} renderItem={(item) => <List.Item required>{item}</List.Item>} />
}

export default Demo
```
