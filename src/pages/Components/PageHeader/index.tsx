import React, { useEffect } from 'react';

import { PageHeader, Button } from '@/components';
import { HighlightCode } from '@/tool/func';
import PageTitle from '../PageTitle';
import IntroduceBox from '../IntroduceBox';
import PageHeaderBaseMd from '@/assets/markdowns/PageHeader/base.md';
import PageHeaderBgMd from '@/assets/markdowns/PageHeader/bg.md';
import PageHeaderBreadcrumbMd from '@/assets/markdowns/PageHeader/breadcrumb.md';
import PageHeaderReadMd from '@/assets/markdowns/PageHeader/read.md';
import "./index.less";

const routes = [
  {
    path: 'index',
    breadcrumbName: 'First-level Menu',
  },
  {
    path: 'first',
    breadcrumbName: 'Second-level Menu',
  },
  {
    path: 'second',
    breadcrumbName: 'Third-level Menu',
  },
];

const PageHeaderPage: React.FC = () => {
  useEffect(() => {
    HighlightCode()
  }, [])

  return (
    <div style={{paddingBottom: '20px'}}>
      <PageTitle
        title="PageHeader页头"
        description="页头位于页容器中，页容器顶部，起到了内容概览和引导页级操作的作用。包括由面包屑、标题、页面内容简介、页面级操作等、页面级导航组成。"
      />

      <IntroduceBox
        height={310}
        title="普通提示"
        description="信息提醒反馈。"
        demo={
          <div style={{marginBottom: '20px'}}>
            <PageHeader
              className="site-page-header"
              onBack={() => null}
              title="Title"
              subTitle="This is a subtitle"
            />
          </div>
        }
        markdown={
          <div className="show-html" dangerouslySetInnerHTML={{ __html: PageHeaderBaseMd.html }} />
        }
      />

      <IntroduceBox
        height={520}
        title="白底模式"
        description="默认 PageHeader 是透明底色的。在某些情况下，PageHeader 需要自己的背景颜色。"
        demo={
          <div className="site-page-header-ghost-wrapper" style={{marginBottom: '20px'}}>
            <PageHeader
              ghost={false}
              onBack={() => window.history.back()}
              title="Title"
              subTitle="This is a subtitle"
              extra={[
                <Button key="3">Operation</Button>,
                <Button key="2">Operation</Button>,
                <Button key="1" type="primary">
                  Primary
                </Button>,
              ]}
            >
              Hello World
            </PageHeader>
          </div>
        }
        markdown={
          <div className="show-html" dangerouslySetInnerHTML={{ __html: PageHeaderBgMd.html }} />
        }
      />

      <IntroduceBox
        height={610}
        title="带面包屑页头"
        description="带面包屑页头，适合层级比较深的页面，让用户可以快速导航。"
        demo={
          <div style={{marginBottom: '20px'}}>
            <PageHeader
              className="site-page-header"
              title="Title"
              breadcrumb={routes}
              subTitle="This is a subtitle"
              backIcon={false}
            />
          </div>
        }
        markdown={
          <div className="show-html" dangerouslySetInnerHTML={{ __html: PageHeaderBreadcrumbMd.html }} />
        }
      />

      <IntroduceBox
        title="API"
        table={
          <div className="show-html" dangerouslySetInnerHTML={{ __html: PageHeaderReadMd.html }} />
        }
      />
    </div>
  )
}

export default PageHeaderPage;