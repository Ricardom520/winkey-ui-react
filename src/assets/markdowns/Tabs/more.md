```tsx
import React from 'react'
import { Tabs, Radio } from 'winkey-ui-react'

const { TabPane } = Tabs

const Demo: React.SFC = () => {
  return (
    <div>
      <Radio.Group onChange={handleModeChange} value={mode} style={{ marginBottom: 8 }}>
        <Radio.Button value='top'>Horizontal</Radio.Button>
      </Radio.Group>
      <Tabs defaultActiveKey='1' tabPosition={mode} style={{ height: 220 }}>
        {[...Array.from({ length: 30 }, (v, i) => i)].map((i) => (
          <TabPane tab={`Tab-${i}`} key={i} disabled={i === 28}>
            Content of tab {i}
          </TabPane>
        ))}
      </Tabs>
    </div>
  )
}

export default Demo
```
