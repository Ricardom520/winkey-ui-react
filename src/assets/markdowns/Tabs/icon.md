```tsx
import React from 'react'
import { Tabs } from 'winkey-ui-react'

const { TabPane } = Tabs

const Demo: React.SFC = () => {
  return (
    <Tabs defaultActiveKey='2'>
      <TabPane
        tab={
          <span>
            <i className='iconfont wk-icon-qq' />
            Tab 1
          </span>
        }
        key='1'
      >
        Tab 1
      </TabPane>
      <TabPane
        tab={
          <span>
            <i className='iconfont wk-icon-weixin' />
            Tab 2
          </span>
        }
        key='2'
      >
        Tab 2
      </TabPane>
    </Tabs>
  )
}

export default Demo
```
