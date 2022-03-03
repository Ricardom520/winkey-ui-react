```tsx
import React from 'react'
import { Radio, Button } from 'winkey-ui'

const Demo: React.SFC = () => {
  const onChange = (e) => {
    console.log(`radio checked:${e.target.value}`)
  }

  return (
    <div style={{ marginBottom: '20px' }}>
      <Radio.Group onChange={onChange} defaultValue='a'>
        <Radio.Button value='a'>Hangzhou</Radio.Button>
        <Radio.Button value='b'>Shanghai</Radio.Button>
        <Radio.Button value='c'>Beijing</Radio.Button>
        <Radio.Button value='d'>Chengdu</Radio.Button>
      </Radio.Group>
      <Radio.Group onChange={onChange} defaultValue='a' style={{ marginTop: 16 }}>
        <Radio.Button value='a'>Hangzhou</Radio.Button>
        <Radio.Button value='b' disabled>
          Shanghai
        </Radio.Button>
        <Radio.Button value='c'>Beijing</Radio.Button>
        <Radio.Button value='d'>Chengdu</Radio.Button>
      </Radio.Group>
      <Radio.Group disabled onChange={onChange} defaultValue='a' style={{ marginTop: 16 }}>
        <Radio.Button value='a'>Hangzhou</Radio.Button>
        <Radio.Button value='b'>Shanghai</Radio.Button>
        <Radio.Button value='c'>Beijing</Radio.Button>
        <Radio.Button value='d'>Chengdu</Radio.Button>
      </Radio.Group>
    </div>
  )
}

export default Demo
```
