import React, { useEffect } from 'react'

import { Breadcrumb } from '@/components'
import { HighlightCode } from '@/tool/func'
import PageTitle from '../PageTitle'
import IntroduceBox from '../IntroduceBox'
import BreadcrumbBaseMd from '@/assets/markdowns/Breadcrumb/base.md'
import BreadcrumbIconMd from '@/assets/markdowns/Breadcrumb/icon.md'
import BreadcrumbSeparatorMd from '@/assets/markdowns/Breadcrumb/separator.md'
import BreadcrumbReadMd from '@/assets/markdowns/Breadcrumb/read.md'

const BreadcrumbPage: React.FC = () => {
  useEffect(() => {
    HighlightCode()
  }, [])

  return (
    <div style={{ paddingBottom: '20px' }}>
      <PageTitle title='基本' description='最简单的用法。' />

      <IntroduceBox
        height={390}
        title='基本'
        description='最简单的用法。'
        demo={
          <div style={{ marginBottom: '20px' }}>
            <Breadcrumb>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>
                <a href=''>Application Center</a>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <a href=''>Application List</a>
              </Breadcrumb.Item>
              <Breadcrumb.Item>An Application</Breadcrumb.Item>
            </Breadcrumb>
          </div>
        }
        markdown={
          <div
            className='gird-descrition'
            dangerouslySetInnerHTML={{ __html: BreadcrumbBaseMd.html }}
          />
        }
      />

      <IntroduceBox
        height={390}
        title='带有图标的'
        description='图标放在文字前面。'
        demo={
          <div style={{ marginBottom: '20px' }}>
            <Breadcrumb>
              <Breadcrumb.Item href=''>
                <i className='iconfont wk-icon-home' />
              </Breadcrumb.Item>
              <Breadcrumb.Item href=''>
                <i className='iconfont wk-icon-user' />
                <span>Application List</span>
              </Breadcrumb.Item>
              <Breadcrumb.Item>Application</Breadcrumb.Item>
            </Breadcrumb>
          </div>
        }
        markdown={
          <div
            className='gird-descrition'
            dangerouslySetInnerHTML={{ __html: BreadcrumbIconMd.html }}
          />
        }
      />

      <IntroduceBox
        height={310}
        title='分隔符'
        description='使用 separator=">" 可以自定义分隔符。'
        demo={
          <div style={{ marginBottom: '20px' }}>
            <Breadcrumb separator='>'>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item href=''>Application Center</Breadcrumb.Item>
              <Breadcrumb.Item href=''>Application List</Breadcrumb.Item>
              <Breadcrumb.Item>An Application</Breadcrumb.Item>
            </Breadcrumb>
          </div>
        }
        markdown={
          <div
            className='gird-descrition'
            dangerouslySetInnerHTML={{ __html: BreadcrumbSeparatorMd.html }}
          />
        }
      />

      <IntroduceBox
        title='API'
        table={
          <div
            className='gird-descrition'
            dangerouslySetInnerHTML={{ __html: BreadcrumbReadMd.html }}
          />
        }
      />
    </div>
  )
}

export default BreadcrumbPage
