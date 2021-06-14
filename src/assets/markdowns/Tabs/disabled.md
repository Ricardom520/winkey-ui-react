```tsx
import React from 'react';
import { Tabs } from 'winkey-ui-react';

const { TabPane } = Tabs;

const Demo: React.SFC = () => {
  return (
    <Tabs defaultActiveKey="1">
      <TabPane tab="Tab 1" key="1">
        Tab 1
      </TabPane>
      <TabPane tab="Tab 2" disabled key="2">
        Tab 2
      </TabPane>
      <TabPane tab="Tab 3" key="3">
        Tab 3
      </TabPane>
    </Tabs>
  )
}

export default Demo;
```