import React, { useEffect } from 'react'

import { HighlightCode } from '@/tool/func'
import { Skeleton } from '@/components'
import PageTitle from '../PageTitle'
import IntroduceBox from '../IntroduceBox'
import SkeletonBaseMd from '@/assets/markdowns/Skeleton/base.md'
import SkeletonParagraphMd from '@/assets/markdowns/Skeleton/paragraph.md'

const SkeletonPage: React.FC = () => {
  useEffect(() => {
    HighlightCode()
  }, [])

  return (
    <div style={{ paddingBottom: '20px' }}>
      <PageTitle
        title='Skeleton骨架屏'
        description='在需要等待加载内容的位置提供一个占位图形组合。'
      />

      <IntroduceBox
        height={235}
        title='基本'
        description='最简单的占位效果。'
        demo={
          <div style={{ marginBottom: '20px' }}>
            <Skeleton />
          </div>
        }
        markdown={
          <div
            className='gird-descrition'
            dangerouslySetInnerHTML={{ __html: SkeletonBaseMd.html }}
          />
        }
      />

      <IntroduceBox
        height={235}
        title='复杂的组合'
        description='更复杂的组合。'
        demo={
          <div style={{ marginBottom: '20px' }}>
            <Skeleton avatar paragraph={{ rows: 4 }} />
          </div>
        }
        markdown={
          <div
            className='gird-descrition'
            dangerouslySetInnerHTML={{ __html: SkeletonParagraphMd.html }}
          />
        }
      />

      <IntroduceBox
        height={235}
        title='复杂的组合'
        description='更复杂的组合。'
        demo={
          <div style={{ marginBottom: '20px' }}>
            <Skeleton active />
          </div>
        }
        markdown={
          <div
            className='gird-descrition'
            dangerouslySetInnerHTML={{ __html: SkeletonParagraphMd.html }}
          />
        }
      />
    </div>
  )
}

export default SkeletonPage
