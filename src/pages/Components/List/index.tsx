import React, { useEffect } from 'react';

import { HighlightCode } from '@/tool/func';
import { List, Divider, Avatar } from '@/components';
import PageTitle from '../PageTitle';
import IntroduceBox from '../IntroduceBox';
import ListBaseMd from '@/assets/markdowns/List/base.md';
import ListMetaMd from '@/assets/markdowns/List/meta.md';
import ListItemLayoutMd from '@/assets/markdowns/List/itemLayout.md';
import ListReadMd from '@/assets/markdowns/List/read.md';
import "./index.less";

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];

const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: 'https://ant.design',
    title: `ant design part ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}

const data1 = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
];

const ListPage: React.FC = () => {
  
  useEffect(() => {
    HighlightCode()
  }, [])

  return (
    <div className="listContainer">
      <PageTitle title='List列表' description='通用列表。' />

      <IntroduceBox
        height={840}
        title="简单列表"
        description="列表拥有大、中、小三种尺寸。
        通过设置 size 为 large small 分别把按钮设为大、小尺寸。若不设置 size，则尺寸为中。
        可通过设置 header 和 footer，来自定义列表头部和尾部。"
        demo={
          <div style={{marginBottom: '20px'}}>
            <Divider orientation="left">Default Size</Divider>
              <List
                header={<div>Header</div>}
                footer={<div>Footer</div>}
                bordered
                dataSource={data}
                renderItem={item => <List.Item>{item}</List.Item>}
              />
              <Divider orientation="left">Small Size</Divider>
              <List
                size="small"
                header={<div>Header</div>}
                footer={<div>Footer</div>}
                bordered
                dataSource={data}
                renderItem={item => <List.Item>{item}</List.Item>}
              />
              <Divider orientation="left">Large Size</Divider>
              <List
                size="large"
                header={<div>Header</div>}
                footer={<div>Footer</div>}
                bordered
                dataSource={data}
                renderItem={item => <List.Item>{item}</List.Item>}
              />
          </div>
        }
        markdown={
          <div className="show-html" dangerouslySetInnerHTML={{ __html: ListBaseMd.html }} />
        }
      />

      <IntroduceBox
        height={600}
        title="基础列表"
        description="基础列表。"
        demo={
          <div>
            <List
              split
              itemLayout="horizontal"
              dataSource={data1}
              renderItem={item => (
                <List.Item>
                  <List.Item.Meta
                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                    title={<a href="https://ant.design">{item.title}</a>}
                    description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                  />
                </List.Item>
              )}
            />,
          </div>
        }
        markdown={
          <div className="show-html" dangerouslySetInnerHTML={{ __html: ListMetaMd.html }} />
        }
      />

      <IntroduceBox
        height={900}
        title="竖排列表样式"
        description="通过设置 itemLayout 属性为 vertical 可实现竖排列表样式。"
        demo={
          <div>
            <List
              itemLayout="vertical"
              size="large"
              split
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
        }
        markdown={
          <div className="show-html" dangerouslySetInnerHTML={{ __html: ListItemLayoutMd.html }} />
        }
      />

      <IntroduceBox
        title="API"
        table={
          <div className="show-html" dangerouslySetInnerHTML={{ __html: ListReadMd.html }} />
        }
      />
    </div>
  )
}

export default ListPage;