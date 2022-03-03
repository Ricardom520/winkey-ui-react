import React, { useEffect, useState } from 'react'

import { HighlightCode } from '@/tool/func'
import { Tabs, Radio } from '@/components'
import PageTitle from '../PageTitle'
import IntroduceBox from '../IntroduceBox'
import TabsBaseMd from '@/assets/markdowns/Tabs/base.md'
import TabsDisabledMd from '@/assets/markdowns/Tabs/disabled.md'
import TabsCentededMd from '@/assets/markdowns/Tabs/centered.md'
import TabsIconMd from '@/assets/markdowns/Tabs/icon.md'
import TabsMoreMd from '@/assets/markdowns/Tabs/more.md'
import TabsReadMd from '@/assets/markdowns/Tabs/read.md'

const { TabPane } = Tabs

const TabsPage: React.FC = () => {
  const [mode, setMode] = useState<'left' | 'right' | 'top' | 'bottom'>('top')

  const callback = (key) => {
    console.log(key)
  }

  const handleModeChange = (e) => {
    const mode = e.target.value
    setMode(mode)
  }

  useEffect(() => {
    HighlightCode()
  }, [])

  return (
    <div style={{ paddingBottom: '20px' }}>
      <PageTitle title='Tabs标签页' description='选项卡切换组件。' />

      <IntroduceBox
        height={540}
        title='基本'
        description='默认选中第一项。'
        demo={
          <div style={{ marginBottom: '20px' }}>
            <Tabs defaultActiveKey='1' onChange={callback}>
              <TabPane tab='Tab 1' key='1'>
                Content of Tab Pane 1
              </TabPane>
              <TabPane tab='Tab 2' key='2'>
                Content of Tab Pane 2
              </TabPane>
              <TabPane tab='Tab 3' key='3'>
                Content of Tab Pane 3
              </TabPane>
            </Tabs>
          </div>
        }
        markdown={
          <div className='gird-descrition' dangerouslySetInnerHTML={{ __html: TabsBaseMd.html }} />
        }
      />

      <IntroduceBox
        height={440}
        title='禁用'
        description='禁用某一项。'
        demo={
          <div style={{ marginBottom: '20px' }}>
            <Tabs defaultActiveKey='1'>
              <TabPane tab='Tab 1' key='1'>
                Tab 1
              </TabPane>
              <TabPane tab='Tab 2' disabled key='2'>
                Tab 2
              </TabPane>
              <TabPane tab='Tab 3' key='3'>
                Tab 3
              </TabPane>
            </Tabs>
          </div>
        }
        markdown={
          <div
            className='gird-descrition'
            dangerouslySetInnerHTML={{ __html: TabsDisabledMd.html }}
          />
        }
      />

      <IntroduceBox
        height={440}
        title='居中'
        description='标签居中展示。'
        demo={
          <div style={{ marginBottom: '20px' }}>
            <Tabs defaultActiveKey='1' centered>
              <TabPane tab='Tab 1' key='1'>
                Content of Tab Pane 1
              </TabPane>
              <TabPane tab='Tab 2' key='2'>
                Content of Tab Pane 2
              </TabPane>
              <TabPane tab='Tab 3' key='3'>
                Content of Tab Pane 3
              </TabPane>
            </Tabs>
          </div>
        }
        markdown={
          <div
            className='gird-descrition'
            dangerouslySetInnerHTML={{ __html: TabsCentededMd.html }}
          />
        }
      />

      <IntroduceBox
        height={690}
        title='图标'
        description='有图标的标签。'
        demo={
          <div style={{ marginBottom: '20px' }}>
            <Tabs defaultActiveKey='2'>
              <TabPane
                tab={
                  <span>
                    <i className='iconfont wk-icon-qq' />
                    Tab 1
                  </span>
                }
                key='1'
              >
                Tab 1
              </TabPane>
              <TabPane
                tab={
                  <span>
                    <i className='iconfont wk-icon-weixin' />
                    Tab 2
                  </span>
                }
                key='2'
              >
                Tab 2
              </TabPane>
            </Tabs>
          </div>
        }
        markdown={
          <div className='gird-descrition' dangerouslySetInnerHTML={{ __html: TabsIconMd.html }} />
        }
      />

      <IntroduceBox
        height={480}
        title='滑动'
        description='可以左右滑动，容纳更多标签。'
        demo={
          <div style={{ marginBottom: '20px' }}>
            <Radio.Group onChange={handleModeChange} value={mode} style={{ marginBottom: 8 }}>
              <Radio.Button value='top'>Horizontal</Radio.Button>
            </Radio.Group>
            <Tabs defaultActiveKey='1' tabPosition={mode} style={{ height: 220 }}>
              {[...Array.from({ length: 30 }, (v, i) => i)].map((i) => (
                <TabPane tab={`Tab-${i}`} key={i} disabled={i === 28}>
                  Content of tab {i}
                </TabPane>
              ))}
            </Tabs>
          </div>
        }
        markdown={
          <div className='gird-descrition' dangerouslySetInnerHTML={{ __html: TabsMoreMd.html }} />
        }
      />

      <IntroduceBox
        title='API'
        table={
          <div className='gird-descrition' dangerouslySetInnerHTML={{ __html: TabsReadMd.html }} />
        }
      />
    </div>
  )
}

export default TabsPage
