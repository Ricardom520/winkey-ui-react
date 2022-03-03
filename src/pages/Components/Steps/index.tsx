import React, { useEffect } from 'react'

import { Steps, Button, message, Divider } from '@/components'
import StepsBaseMd from '@/assets/markdowns/Steps/base.md'
import StepsSizeMd from '@/assets/markdowns/Steps/size.md'
import StepsIconMd from '@/assets/markdowns/Steps/icon.md'
import StepsChangeMd from '@/assets/markdowns/Steps/change.md'
import StepsDirectionMd from '@/assets/markdowns/Steps/direction.md'
import StepsDirectionSizeMd from '@/assets/markdowns/Steps/directionSize.md'
import StepsProgressDotMd from '@/assets/markdowns/Steps/progressDot.md'
import StepsErrorMd from '@/assets/markdowns/Steps/error.md'
import StepsClickMd from '@/assets/markdowns/Steps/click.md'
import StepsReadMd from '@/assets/markdowns/Steps/read.md'
import PageTitle from '../PageTitle'
import IntroduceBox from '../IntroduceBox'
import { HighlightCode } from '@/tool/func'
import './index.less'

const { Step } = Steps

const steps = [
  {
    title: 'First',
    content: 'First-content'
  },
  {
    title: 'Second',
    content: 'Second-content'
  },
  {
    title: 'Last',
    content: 'Last-content'
  }
]

const StepsPage: React.FC = () => {
  const [current, setCurrent] = React.useState(0)
  const [current1, setCurrent1] = React.useState(0)

  const next = () => {
    setCurrent(current + 1)
  }

  const prev = () => {
    setCurrent(current - 1)
  }

  const onChange = (current) => {
    console.log('onChange:', current)
    setCurrent1(current)
  }

  useEffect(() => {
    HighlightCode()
  }, [])

  return (
    <div style={{ paddingBottom: '20px' }}>
      <PageTitle title='Steps步骤条' description='引导用户按照流程完成任务的导航条。' />

      <IntroduceBox
        height={350}
        title='基本用法'
        description='简单的步骤条。'
        demo={
          <div style={{ marginBottom: '20px' }} className='steps-demo-item'>
            <Steps current={1}>
              <Step title='Finished' description='This is a description.' />
              <Step
                title='In Progress'
                subTitle='Left 00:00:08'
                description='This is a description.'
              />
              <Step title='Waiting' description='This is a description.' />
            </Steps>
          </div>
        }
        markdown={
          <div className='gird-descrition' dangerouslySetInnerHTML={{ __html: StepsBaseMd.html }} />
        }
      />

      <IntroduceBox
        height={325}
        title='迷你版'
        description='迷你版的步骤条，通过设置 <Steps size="small"> 启用.'
        demo={
          <div style={{ marginBottom: '20px' }} className='steps-demo-item'>
            <Steps size='small' current={1}>
              <Step title='Finished' />
              <Step title='In Progress' />
              <Step title='Waiting' />
            </Steps>
          </div>
        }
        markdown={
          <div className='gird-descrition' dangerouslySetInnerHTML={{ __html: StepsSizeMd.html }} />
        }
      />

      <IntroduceBox
        height={365}
        title='带图标的步骤条'
        description='通过设置 Steps.Step 的 icon 属性，可以启用自定义图标。'
        demo={
          <div style={{ marginBottom: '20px' }} className='steps-demo-item'>
            <Steps>
              <Step status='finish' title='Login' icon={<i className='iconfont wk-icon-user' />} />
              <Step
                status='finish'
                title='Verification'
                icon={<i className='iconfont wk-icon-maillist' />}
              />
              <Step
                status='process'
                title='Pay'
                icon={<i className='iconfont wk-icon-loading-line-round' />}
              />
              <Step status='wait' title='Done' icon={<i className='iconfont wk-icon-smile' />} />
            </Steps>
          </div>
        }
        markdown={
          <div className='gird-descrition' dangerouslySetInnerHTML={{ __html: StepsIconMd.html }} />
        }
      />

      <IntroduceBox
        height={1150}
        title='步骤切换'
        description='通常配合内容及按钮使用，表示一个流程的处理进度。'
        demo={
          <div style={{ marginBottom: '20px' }} className='steps-demo-item'>
            <Steps current={current}>
              {steps.map((item) => (
                <Step key={item.title} title={item.title} />
              ))}
            </Steps>
            <div className='demo-steps-content'>{steps[current].content}</div>
            <div className='demo-steps-action'>
              {current < steps.length - 1 && (
                <Button type='primary' onClick={() => next()}>
                  Next
                </Button>
              )}
              {current === steps.length - 1 && (
                <Button type='primary' onClick={() => message.success('Processing complete!')}>
                  Done
                </Button>
              )}
              {current > 0 && (
                <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                  Previous
                </Button>
              )}
            </div>
          </div>
        }
        markdown={
          <div
            className='gird-descrition'
            dangerouslySetInnerHTML={{ __html: StepsChangeMd.html }}
          />
        }
      />

      <IntroduceBox
        height={345}
        title='竖直方向的步骤条'
        description='简单的竖直方向的步骤条。'
        demo={
          <div style={{ marginBottom: '20px' }} className='steps-demo-item'>
            <Steps direction='vertical' current={1}>
              <Step title='Finished' description='This is a description.' />
              <Step title='In Progress' description='This is a description.' />
              <Step title='Waiting' description='This is a description.' />
            </Steps>
          </div>
        }
        markdown={
          <div
            className='gird-descrition'
            dangerouslySetInnerHTML={{ __html: StepsDirectionMd.html }}
          />
        }
      />

      <IntroduceBox
        height={345}
        title='竖直方向的小型步骤条'
        description='简单的竖直方向的小型步骤条。'
        demo={
          <div style={{ marginBottom: '20px' }} className='steps-demo-item'>
            <Steps direction='vertical' size='small' current={1}>
              <Step title='Finished' description='This is a description.' />
              <Step title='In Progress' description='This is a description.' />
              <Step title='Waiting' description='This is a description.' />
            </Steps>
          </div>
        }
        markdown={
          <div
            className='gird-descrition'
            dangerouslySetInnerHTML={{ __html: StepsDirectionSizeMd.html }}
          />
        }
      />

      <IntroduceBox
        height={345}
        title='步骤运行错误'
        description='使用 Steps 的 status 属性来指定当前步骤的状态。'
        demo={
          <div style={{ marginBottom: '20px' }} className='steps-demo-item'>
            <Steps current={1} status='error'>
              <Step title='Finished' description='This is a description' />
              <Step title='In Process' description='This is a description' />
              <Step title='Waiting' description='This is a description' />
            </Steps>
          </div>
        }
        markdown={
          <div
            className='gird-descrition'
            dangerouslySetInnerHTML={{ __html: StepsErrorMd.html }}
          />
        }
      />

      <IntroduceBox
        height={535}
        title='点状步骤条'
        description='包含步骤点的进度条。'
        demo={
          <div style={{ marginBottom: '20px' }} className='steps-demo-item'>
            <Steps progressDot current={1}>
              <Step title='Finished' description='This is a description.' />
              <Step title='In Progress' description='This is a description.' />
              <Step title='Waiting' description='This is a description.' />
            </Steps>
            <Divider />
            <Steps progressDot current={1} direction='vertical'>
              <Step title='Finished' description='This is a description. This is a description.' />
              <Step title='Finished' description='This is a description. This is a description.' />
              <Step
                title='In Progress'
                description='This is a description. This is a description.'
              />
              <Step title='Waiting' description='This is a description.' />
              <Step title='Waiting' description='This is a description.' />
            </Steps>
          </div>
        }
        markdown={
          <div
            className='gird-descrition'
            dangerouslySetInnerHTML={{ __html: StepsProgressDotMd.html }}
          />
        }
      />

      <IntroduceBox
        height={650}
        title='可点击'
        description='设置 onChange 后，Steps 变为可点击状态。'
        demo={
          <div style={{ marginBottom: '20px' }} className='steps-demo-item'>
            <Steps current={current1} onChange={onChange}>
              <Step title='Step 1' description='This is a description.' />
              <Step title='Step 2' description='This is a description.' />
              <Step title='Step 3' description='This is a description.' />
            </Steps>

            <Divider />

            <Steps current={current1} onChange={onChange} direction='vertical'>
              <Step title='Step 1' description='This is a description.' />
              <Step title='Step 2' description='This is a description.' />
              <Step title='Step 3' description='This is a description.' />
            </Steps>
          </div>
        }
        markdown={
          <div
            className='gird-descrition'
            dangerouslySetInnerHTML={{ __html: StepsClickMd.html }}
          />
        }
      />

      <IntroduceBox
        title='API'
        table={
          <div className='gird-descrition' dangerouslySetInnerHTML={{ __html: StepsReadMd.html }} />
        }
      />
    </div>
  )
}

export default StepsPage
