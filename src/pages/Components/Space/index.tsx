import React, { useState, useEffect } from 'react';

import { HighlightCode } from '@/tool/func';
import { Space, Button, Card, Radio, Divider } from '@/components';
import PageTitle from '../PageTitle';
import IntroduceBox from '../IntroduceBox';
import SpaceBaseMd from '@/assets/markdowns/Space/base.md';
import SpaceDirectionMd from '@/assets/markdowns/Space/direction.md';
import SpaceAlignMd from '@/assets/markdowns/Space/align.md';
import SpaceSizeMd from '@/assets/markdowns/Space/size.md';
import SpaceSplitMd from '@/assets/markdowns/Space/split.md';
import SpaceReadMd from '@/assets/markdowns/Space/read.md';
import "./index.less";

const SpacePage:React.SFC = () => {
  const [size, setSize] = useState<"small" | "middle" | "large">('small');
  const [sizeNumber] = useState<number>(10);
  
  useEffect(() => {
    HighlightCode()
  }, [])

  return (
    <div style={{paddingBottom: '20px'}}>
      <PageTitle
        title="Space间距"
        description="设置组件之间的间距。"
      />

      <IntroduceBox
        height={430}
        title="基本用法"
        description="相邻组件水平间距。"
        demo={
          <div style={{marginBottom: '20px'}} className="select-demo-item">
            <Space>
              Space
              <Button type="primary">Button</Button>
            </Space>
          </div>
        }
        markdown={
          <div className="gird-descrition" dangerouslySetInnerHTML={{ __html: SpaceBaseMd.html }} />
        }
      />

      <IntroduceBox
        height={390}
        title="基本用法"
        description="相邻组件水平间距。"
        demo={
          <div style={{marginBottom: '20px'}} className="select-demo-item">
            <Space direction="vertical">
              <Card title="Card" style={{ width: 300 }}>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
              <Card title="Card" style={{ width: 300 }}>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
            </Space>
          </div>
        }
        markdown={
          <div className="gird-descrition" dangerouslySetInnerHTML={{ __html: SpaceDirectionMd.html }} />
        }
      />

      <IntroduceBox
        height={390}
        title="间距大小"
        description="通过设置 size 为 large middle 分别把间距设为大、中间距。若不设置 size，则间距为小。"
        demo={
          <div style={{marginBottom: '20px'}} className="select-demo-item">
            <Radio.Group value={size} onChange={e => setSize(e.target.value)}>
              <Radio value="small">Small</Radio>
              <Radio value="middle">Middle</Radio>
              <Radio value="large">Large</Radio>
            </Radio.Group>
            <br />
            <br />
            <Space size={size}>
              <Button type="primary">Primary</Button>
              <Button>Default</Button>
              <Button type="dashed">Dashed</Button>
              <Button type="link">Link</Button>
            </Space>
          </div>
        }
        markdown={
          <div className="gird-descrition" dangerouslySetInnerHTML={{ __html: SpaceDirectionMd.html }} />
        }
      />

      <IntroduceBox
        height={770}
        title="对齐"
        description="设置对齐模式。"
        demo={
          <div className="space-align-container">
            <div className="space-align-block">
              <Space align="center">
                center
                <Button type="primary">Primary</Button>
                <span className="mock-block">Block</span>
              </Space>
            </div>
            <div className="space-align-block">
              <Space align="start">
                start
                <Button type="primary">Primary</Button>
                <span className="mock-block">Block</span>
              </Space>
            </div>
            <div className="space-align-block">
              <Space align="end">
                end
                <Button type="primary">Primary</Button>
                <span className="mock-block">Block</span>
              </Space>
            </div>
            <div className="space-align-block">
              <Space align="baseline">
                baseline
                <Button type="primary">Primary</Button>
                <span className="mock-block">Block</span>
              </Space>
            </div>
          </div>
        }
        markdown={
          <div className="gird-descrition" dangerouslySetInnerHTML={{ __html: SpaceAlignMd.html }} />
        }
      />

      <IntroduceBox
        height={350}
        title="自定义尺寸"
        description="自定义间距大小。"
        demo={
          <div style={{marginBottom: '20px'}}>
            <Space size={sizeNumber}>
              <Button type="primary">Primary</Button>
              <Button>Default</Button>
              <Button type="dashed">Dashed</Button>
              <Button type="link">Link</Button>
            </Space>
          </div>
        }
        markdown={
          <div className="gird-descrition" dangerouslySetInnerHTML={{ __html: SpaceSizeMd.html }} />
        }
      />

      <IntroduceBox
        height={290}
        title="分隔符"
        description="相邻组件分隔符。"
        demo={
          <div style={{marginBottom: '20px'}}>
            <Space split={<Divider type="vertical" />}>
              <Button type="link">Link</Button>
              <Button type="link">Link</Button>
              <Button type="link">Link</Button>
            </Space>
          </div>
        }
        markdown={
          <div className="gird-descrition" dangerouslySetInnerHTML={{ __html: SpaceReadMd.html }} />
        }
      />

      <IntroduceBox
        title="API"
        table={
          <div className="gird-descrition" dangerouslySetInnerHTML={{ __html: SpaceReadMd.html }} />
        }
      />
    </div>
  )
}

export default SpacePage;