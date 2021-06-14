```tsx
import React from 'react';
import { Tabs } from 'winkey-ui-react';

const { TabPane } = Tabs;

const Demo: React.SFC = () => {

  const callback = (key) => {
    console.log(key)
  }

  return (
    <Tabs defaultActiveKey="1" onChange={callback}>
      <TabPane tab="Tab 1" key="1">
        Content of Tab Pane 1
      </TabPane>
      <TabPane tab="Tab 2" key="2">
        Content of Tab Pane 2
      </TabPane>
      <TabPane tab="Tab 3" key="3">
        Content of Tab Pane 3
      </TabPane>
    </Tabs>
  )
}

export default Demo;
```