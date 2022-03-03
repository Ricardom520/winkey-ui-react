import React, { useEffect } from 'react'

import { HighlightCode } from '@/tool/func'
import { Row, Col, Divider } from '@/components'
import GirdDescMd from '@/assets/markdowns/Gird/description.md'
import GirdBaseMd from '@/assets/markdowns/Gird/base.md'
import GirdGutterMd from '@/assets/markdowns/Gird/gutter.md'
import GirdOffsetMd from '@/assets/markdowns/Gird/offset.md'
import GirdReadMd from '@/assets/markdowns/Gird/read.md'
import PageTitle from '../PageTitle'
import IntroduceBox from '../IntroduceBox'
import './index.less'

const style = { background: '#0092ff', padding: '8px 0' }

const GridPage: React.SFC = () => {
  useEffect(() => {
    HighlightCode()
  }, [])

  return (
    <div className='gridContainer'>
      <PageTitle title='Grid栅格' description='24 栅格系统。' />
      <IntroduceBox
        title='设计理念'
        table={
          <div className='gird-demo'>
            <Row className='demo-row'>
              <Col className='demo-col demo-col-1' span={24}>
                100%
              </Col>
            </Row>
            <Row className='demo-row'>
              <Col className='demo-col demo-col-2' span={6}>
                25%
              </Col>
              <Col className='demo-col demo-col-3' span={6}>
                25%
              </Col>
              <Col className='demo-col demo-col-2' span={6}>
                25%
              </Col>
              <Col className='demo-col demo-col-3' span={6}>
                25%
              </Col>
            </Row>
            <Row className='demo-row'>
              <Col className='demo-col demo-col-2' span={8}>
                33.33%
              </Col>
              <Col className='demo-col demo-col-3' span={8}>
                33.33%
              </Col>
              <Col className='demo-col demo-col-2' span={8}>
                33.33%
              </Col>
            </Row>
            <Row className='demo-row'>
              <Col className='demo-col demo-col-2' span={12}>
                50%
              </Col>
              <Col className='demo-col demo-col-3' span={12}>
                50%
              </Col>
            </Row>
            <Row className='demo-row'>
              <Col className='demo-col demo-col-2' span={16}>
                66.66%
              </Col>
              <Col className='demo-col demo-col-3' span={8}>
                33.33%
              </Col>
            </Row>
          </div>
        }
        description={`
            在多数业务情况下，Winkey-UI 需要在设计区域内解决大量信息收纳的问题，因此在 12 栅格系统的基础上，我们将整个设计建议区域按照 24 等分的原则进行划分。划分之后的信息区块我们称之为『盒子』。建议横向排列的盒子数量最多四个，最少一个。
          『盒子』在整个屏幕上占比见上图。设计部分基于盒子的单位定制盒子内部的排版规则，以保证视觉层面的舒适感。
        `}
      />

      <IntroduceBox
        title='概述'
        table={
          <div className='gird-descrition' dangerouslySetInnerHTML={{ __html: GirdDescMd.html }} />
        }
      />

      <IntroduceBox
        height={530}
        title='基础栅格'
        description='从堆叠到水平排列。 使用单一的一组 Row 和 Col 栅格组件，就可以创建一个基本的栅格系统，所有列（Col）必须放在 Row 内。'
        demo={
          <div className='gird-demo2'>
            <Row>
              <Col span={24} className='demo-col demo-col-1'>
                col
              </Col>
            </Row>
            <Row>
              <Col span={12} className='demo-col demo-col-1'>
                col-12
              </Col>
              <Col span={12} className='demo-col demo-col-2'>
                col-12
              </Col>
            </Row>
            <Row>
              <Col span={8} className='demo-col demo-col-1'>
                col-8
              </Col>
              <Col span={8} className='demo-col demo-col-2'>
                col-8
              </Col>
              <Col span={8} className='demo-col demo-col-1'>
                col-8
              </Col>
            </Row>
            <Row>
              <Col span={6} className='demo-col demo-col-1'>
                col-6
              </Col>
              <Col span={6} className='demo-col demo-col-2'>
                col-6
              </Col>
              <Col span={6} className='demo-col demo-col-1'>
                col-6
              </Col>
              <Col span={6} className='demo-col demo-col-2'>
                col-6
              </Col>
            </Row>
          </div>
        }
        markdown={
          <div className='gird-descrition' dangerouslySetInnerHTML={{ __html: GirdBaseMd.html }} />
        }
      />

      <IntroduceBox
        height={850}
        title='区块间隔'
        description='栅格常常需要和间隔进行配合，你可以使用 Row 的 gutter 属性，我们推荐使用 (16+8n)px 作为栅格间隔(n 是自然数)。

        如果要支持响应式，可以写成 { xs: 8, sm: 16, md: 24, lg: 32 }。
        
        如果需要垂直间距，可以写成数组形式 [水平间距, 垂直间距] [16, { xs: 8, sm: 16, md: 24, lg: 32 }]。'
        demo={
          <div className='gird-demo3'>
            <Divider orientation='left'>Horizontal</Divider>
            <Row gutter={16}>
              <Col className='gutter-row' span={6}>
                <div style={style}>col-6</div>
              </Col>
              <Col className='gutter-row' span={6}>
                <div style={style}>col-6</div>
              </Col>
              <Col className='gutter-row' span={6}>
                <div style={style}>col-6</div>
              </Col>
            </Row>
            <Divider orientation='left'>Vertical</Divider>
            <Row gutter={[16, 24]}>
              <Col className='gutter-row' span={6}>
                <div style={style}>col-6</div>
              </Col>
              <Col className='gutter-row' span={6}>
                <div style={style}>col-6</div>
              </Col>
              <Col className='gutter-row' span={6}>
                <div style={style}>col-6</div>
              </Col>
              <Col className='gutter-row' span={6}>
                <div style={style}>col-6</div>
              </Col>
              <Col className='gutter-row' span={6}>
                <div style={style}>col-6</div>
              </Col>
              <Col className='gutter-row' span={6}>
                <div style={style}>col-6</div>
              </Col>
            </Row>
          </div>
        }
        markdown={
          <div
            className='gird-descrition'
            dangerouslySetInnerHTML={{ __html: GirdGutterMd.html }}
          />
        }
      />

      <IntroduceBox
        height={590}
        title='左右偏移'
        description='列偏移。 使用 offset 可以将列向右侧偏。例如，offset={4} 将元素向右侧偏移了 4 个列（column）的宽度。'
        demo={
          <div className='gird-demo2'>
            <Row>
              <Col span={8} className='demo-col demo-col-1'>
                col-8
              </Col>
              <Col span={8} offset={8} className='demo-col demo-col-2'>
                col-8
              </Col>
            </Row>
            <Row>
              <Col span={6} offset={6} className='demo-col demo-col-1'>
                col-6 col-offset-6
              </Col>
              <Col span={6} offset={6} className='demo-col demo-col-2'>
                col-6 col-offset-6
              </Col>
            </Row>
            <Row>
              <Col span={12} offset={6} className='demo-col demo-col-1'>
                col-12 col-offset-6
              </Col>
            </Row>
          </div>
        }
        markdown={
          <div
            className='gird-descrition'
            dangerouslySetInnerHTML={{ __html: GirdOffsetMd.html }}
          />
        }
      />

      <IntroduceBox
        title='API'
        table={
          <div className='gird-descrition' dangerouslySetInnerHTML={{ __html: GirdReadMd.html }} />
        }
      />
    </div>
  )
}

export default GridPage
