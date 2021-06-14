```tsx
import React from 'react';
import { List, Avatar } from 'winkey-ui';

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];

const Demo: React.SFC = () => {
  return (
    <div style={{marginBottom: '20px'}}>
      <List
        itemLayout="vertical"
        size="large"
        dataSource={listData}
        footer={
          <div>
            <b>Winkey UI</b> footer part
          </div>
        }
        renderItem={item => (
          <List.Item
            key={item.title}
            extra={
              <img
                width={272}
                alt="logo"
                src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
              />
            }
          >
            <List.Item.Meta
              avatar={<Avatar src={item.avatar} />}
              title={<a href={item.href}>{item.title}</a>}
              description={item.description}
            />
            {item.content}
          </List.Item>
        )}
      />,
    </div>
  )
}
```