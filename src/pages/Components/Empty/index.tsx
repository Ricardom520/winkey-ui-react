import React, { useEffect } from 'react'

import { HighlightCode } from '@/tool/func'
import { Empty, Button } from '@/components'
import PageTitle from '../PageTitle'
import IntroduceBox from '../IntroduceBox'
import EmptyBaseMd from '@/assets/markdowns/Empty/base.md'
import EmptyCustomMd from '@/assets/markdowns/Empty/custom.md'
import EmptyReadMd from '@/assets/markdowns/Empty/read.md'

const EmptyPage: React.FC = () => {
  useEffect(() => {
    HighlightCode()
  }, [])

  return (
    <div style={{ paddingBottom: '20px' }}>
      <PageTitle title='Empty空状态' description='空状态时的展示占位图。' />

      <IntroduceBox
        title='基本'
        description='简单的展示。'
        height={210}
        demo={
          <div className='divider-demo-item' style={{ paddingBottom: '20px' }}>
            <Empty />
          </div>
        }
        markdown={
          <div className='show-html' dangerouslySetInnerHTML={{ __html: EmptyBaseMd.html }} />
        }
      />

      <IntroduceBox
        title='选择图片'
        description='可以通过设置 image 为 图片链接 选择另一种风格的图片。'
        height={210}
        demo={
          <div className='divider-demo-item' style={{ paddingBottom: '20px' }}>
            <Empty image='https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg' />
          </div>
        }
        markdown={
          <div className='show-html' dangerouslySetInnerHTML={{ __html: EmptyBaseMd.html }} />
        }
      />

      <IntroduceBox
        title='选择图片'
        description='可以通过设置 image 为 图片链接 选择另一种风格的图片。'
        height={445}
        demo={
          <div className='divider-demo-item' style={{ paddingBottom: '20px' }}>
            <Empty
              image='https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg'
              imageStyle={{
                height: 60
              }}
              description={
                <span>
                  Customize <a href='#API'>Description</a>
                </span>
              }
            >
              <Button type='primary'>Create Now</Button>
            </Empty>
          </div>
        }
        markdown={
          <div className='show-html' dangerouslySetInnerHTML={{ __html: EmptyCustomMd.html }} />
        }
      />

      <IntroduceBox
        title='无描述'
        description='无描述展示。'
        height={445}
        demo={
          <div className='divider-demo-item' style={{ paddingBottom: '20px' }}>
            <Empty description={false} />
          </div>
        }
        markdown={
          <div className='show-html' dangerouslySetInnerHTML={{ __html: EmptyCustomMd.html }} />
        }
      />

      <IntroduceBox
        title='API'
        table={<div className='show-html' dangerouslySetInnerHTML={{ __html: EmptyReadMd.html }} />}
      />
    </div>
  )
}

export default EmptyPage
