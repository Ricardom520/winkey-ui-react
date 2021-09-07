import React, { useEffect, useState } from 'react';

import { Spin, Space, Switch } from '@/components';
import { HighlightCode } from '@/tool/func';
import SpinBaseMd from '@/assets/markdowns/Spin/base.md';
import SpinSizeMd from '@/assets/markdowns/Spin/size.md';
import SpinContainerMd from '@/assets/markdowns/Spin/container.md';
import SpinChildrenMd from '@/assets/markdowns/Spin/children.md';
import SpinReadMd from '@/assets/markdowns/Spin/read.md';
import PageTitle from '../PageTitle';
import IntroduceBox from '../IntroduceBox';
import './index.less';

const SpinPage: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    HighlightCode()
  }, [])

  return (
    <div style={{paddingBottom: '20px'}}>
      <PageTitle
        title="Spin加载中"
        description="用于页面和区块的加载中状态。"
      />

      <IntroduceBox
        height={205}
        title="基本用法"
        description="一个简单的 loading 状态。"
        demo={
          <div style={{marginBottom: '20px'}}>
            <Spin />
          </div>
        }
        markdown={
          <div className="gird-descrition" dangerouslySetInnerHTML={{ __html: SpinBaseMd.html }} />
        }
      />

      <IntroduceBox
        height={280}
        title="各种大小"
        description="小的用于文本加载，默认用于卡片容器级加载，大的用于页面级加载。"
        demo={
          <div style={{marginBottom: '20px'}}>
            <Space size="middle">
              <Spin size="small" />
              <Spin />
              <Spin size="large" />
            </Space>
          </div>
        }
        markdown={
          <div className="gird-descrition" dangerouslySetInnerHTML={{ __html: SpinSizeMd.html }} />
        }
      />

      <IntroduceBox
        height={410}
        title="容器"
        description="放入一个容器中。"
        demo={
          <div className="spin-example" style={{marginBottom: '20px'}}>
            <Spin />
          </div>
        }
        markdown={
          <div className="gird-descrition" dangerouslySetInnerHTML={{ __html: SpinContainerMd.html }} />
        }
      />

      <IntroduceBox
        height={430}
        title="卡片加载中"
        description="可以直接把内容内嵌到 Spin 中，将现有容器变为加载状态。"
        demo={
          <div style={{marginBottom: '20px'}}>
            <Spin spinning={loading}>
              <div>
                Further details about the context of this alert.
              </div>
            </Spin>
            <div style={{ marginTop: 16 }}>
              Loading state：
              <Switch checked={loading} onChange={() => setLoading(!loading)} />
            </div>
          </div>
        }
        markdown={
          <div className="gird-descrition" dangerouslySetInnerHTML={{ __html: SpinChildrenMd.html }} />
        }
      />

      <IntroduceBox
        height={430}
        title="自定义描述文案"
        description="自定义描述文案"
        demo={
          <div style={{marginBottom: '20px'}}>
            <Spin tip="Loading...">
              <div>
                Further details about the context of this alert.
              </div>
            </Spin>
          </div>
        }
        markdown={
          <div className="gird-descrition" dangerouslySetInnerHTML={{ __html: SpinChildrenMd.html }} />
        }
      />

      <IntroduceBox
        title="API"
        table={
          <div className="gird-descrition" dangerouslySetInnerHTML={{ __html: SpinReadMd.html }} />
        }
      />
    </div>    
  )
}

export default SpinPage;