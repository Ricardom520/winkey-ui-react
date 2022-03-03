import React, { useEffect } from 'react'

import { HighlightCode } from '@/tool/func'
import { Card } from '@/components'
import CardBaseMd from '@/assets/markdowns/Card/base.md'
import CardBorderedMd from '@/assets/markdowns/Card/bordered.md'
import CardSimpleMd from '@/assets/markdowns/Card/simple.md'
import CardMetaMd from '@/assets/markdowns/Card/meta.md'
import CardReadMd from '@/assets/markdowns/Card/read.md'
import PageTitle from '../PageTitle'
import IntroduceBox from '../IntroduceBox'
import './index.less'

const { Meta } = Card

const CardPage: React.SFC = () => {
  useEffect(() => {
    HighlightCode()
  }, [])

  return (
    <div className='cardContainer'>
      <PageTitle title='Card卡片' description='通用卡片容器。' />
      <IntroduceBox
        title='何时使用'
        description='最基础的卡片容器，可承载文字、列表、图片、段落，常用于后台概览页面。'
      />

      <IntroduceBox
        height={430}
        title='典型卡片'
        description='包含标题、内容、操作区域。'
        demo={
          <div>
            <Card title='Default size card' extra={<a href='#'>More</a>} style={{ width: 300 }}>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
            <Card
              size='small'
              title='Small size card'
              extra={<a href='#'>More</a>}
              style={{ width: 300, margin: '20px 0' }}
            >
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </div>
        }
        markdown={
          <div className='show-html' dangerouslySetInnerHTML={{ __html: CardBaseMd.html }} />
        }
      />

      <IntroduceBox
        height={320}
        title='无边框'
        description='在灰色背景上使用无边框的卡片。'
        demo={
          <div
            style={{
              background: '#ECECEC',
              padding: '20px 50px',
              marginBottom: '20px'
            }}
          >
            <Card title='Card title' bordered={false} style={{ width: 300 }}>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </div>
        }
        markdown={
          <div className='show-html' dangerouslySetInnerHTML={{ __html: CardBorderedMd.html }} />
        }
      />

      <IntroduceBox
        height={280}
        title='简洁卡片'
        description='只包含内容区域。'
        demo={
          <Card style={{ width: 300, marginBottom: '20px' }}>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        }
        markdown={
          <div className='show-html' dangerouslySetInnerHTML={{ __html: CardSimpleMd.html }} />
        }
      />

      <IntroduceBox
        height={320}
        title='更灵活的内容展示'
        description='可以利用 Card.Meta 支持更灵活的内容。'
        demo={
          <Card
            hoverable
            style={{ width: 240, marginBottom: '20px' }}
            cover={
              <img alt='example' src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png' />
            }
          >
            <Meta title='Europe Street beat' description='www.instagram.com' />
          </Card>
        }
        markdown={
          <div className='show-html' dangerouslySetInnerHTML={{ __html: CardMetaMd.html }} />
        }
      />

      <IntroduceBox
        title='API'
        table={<div className='show-html' dangerouslySetInnerHTML={{ __html: CardReadMd.html }} />}
      />
    </div>
  )
}

export default CardPage
