import React, { useEffect } from 'react'

import { HighlightCode } from '@/tool/func'
import { Divider } from '@/components'
import DividerBaseMd from '@/assets/markdowns/Divider/base.md'
import DividerOrientationMd from '@/assets/markdowns/Divider/orientation.md'
import DividerPlainMd from '@/assets/markdowns/Divider/plain.md'
import DividerTypeMd from '@/assets/markdowns/Divider/type.md'
import DividerReadMd from '@/assets/markdowns/Divider/read.md'
import PageTitle from '../PageTitle'
import IntroduceBox from '../IntroduceBox'
import './index.less'

const DividerPage: React.SFC = () => {
  useEffect(() => {
    HighlightCode()
  }, [])

  return (
    <div className='dividerContainer'>
      <PageTitle title='Divider分割线' description='区隔内容的分割线' />
      <IntroduceBox
        title='水平分割线'
        description='默认为水平分割线，可在中间加入文字。'
        height={400}
        demo={
          <div className='divider-demo-item'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere
              mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.
            </p>
            <Divider />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere
              mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.
            </p>
            <Divider dashed />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere
              mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.
            </p>
          </div>
        }
        markdown={
          <div className='show-html' dangerouslySetInnerHTML={{ __html: DividerBaseMd.html }} />
        }
      />

      <IntroduceBox
        title='带文字的分割线'
        description='分割线中带有文字，可以用 orientation 指定文字位置。'
        height={470}
        demo={
          <div className='divider-demo-item'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere
              mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.
            </p>
            <Divider>Text</Divider>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere
              mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.
            </p>
            <Divider orientation='left'>Left Text</Divider>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere
              mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.
            </p>
            <Divider orientation='right'>Right Text</Divider>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere
              mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.
            </p>
          </div>
        }
        markdown={
          <div
            className='show-html'
            dangerouslySetInnerHTML={{ __html: DividerOrientationMd.html }}
          />
        }
      />

      <IntroduceBox
        title='分割文字使用正文样式'
        description='使用 plain 可以设置为更轻量的分割文字样式。'
        height={470}
        demo={
          <div className='divider-demo-item'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere
              mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.
            </p>
            <Divider plain>Text</Divider>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere
              mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.
            </p>
            <Divider orientation='left' plain>
              Left Text
            </Divider>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere
              mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.
            </p>
            <Divider orientation='right' plain>
              Right Text
            </Divider>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere
              mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.
            </p>
          </div>
        }
        markdown={
          <div className='show-html' dangerouslySetInnerHTML={{ __html: DividerPlainMd.html }} />
        }
      />

      <IntroduceBox
        height={280}
        title='垂直分割线'
        description='使用 type="vertical" 设置为行内的垂直分割线。'
        demo={
          <div className='divider-demo-item'>
            Text
            <Divider type='vertical' />
            <span style={{ color: '#1890ff' }}>Link</span>
            <Divider type='vertical' />
            <span style={{ color: '#1890ff' }}>Link</span>
          </div>
        }
        markdown={
          <div className='show-html' dangerouslySetInnerHTML={{ __html: DividerTypeMd.html }} />
        }
      />

      <IntroduceBox
        title='Attributes'
        table={
          <div className='show-html' dangerouslySetInnerHTML={{ __html: DividerReadMd.html }} />
        }
      />
    </div>
  )
}

export default DividerPage
