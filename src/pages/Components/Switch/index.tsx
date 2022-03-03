import React, { useEffect } from 'react'

import { HighlightCode } from '@/tool/func'
import { Switch, Button } from '@/components'
import PageTitle from '../PageTitle'
import IntroduceBox from '../IntroduceBox'
import SwitchBaseMd from '@/assets/markdowns/Switch/base.md'
import SwitchDisabledMd from '@/assets/markdowns/Switch/disabled.md'
import SwitchChildrenMd from '@/assets/markdowns/Switch/children.md'
import SwtichSizeMd from '@/assets/markdowns/Switch/size.md'
import SwitchLoadingMd from '@/assets/markdowns/Switch/loading.md'
import SwitchReadMd from '@/assets/markdowns/Switch/read.md'

const SwitchPage: React.FC = () => {
  const [disabled, setDisabled] = React.useState(true)

  const toggle = () => {
    setDisabled(!disabled)
  }

  const onChange = (checked) => {
    console.log(`switch to ${checked}`)
  }

  useEffect(() => {
    HighlightCode()
  }, [])

  return (
    <div style={{ paddingBottom: '20px' }}>
      <PageTitle title='Switch开关' description='开关选择器。' />

      <IntroduceBox
        height={290}
        title='基本'
        description='最简单的用法。'
        demo={
          <div style={{ marginBottom: '20px' }}>
            <Switch defaultChecked onChange={onChange} />
          </div>
        }
        markdown={
          <div
            className='gird-descrition'
            dangerouslySetInnerHTML={{ __html: SwitchBaseMd.html }}
          />
        }
      />

      <IntroduceBox
        height={410}
        title='不可用'
        description='Switch 失效状态。'
        demo={
          <div style={{ marginBottom: '20px' }}>
            <Switch disabled={disabled} defaultChecked style={{ marginBottom: '20px' }} />
            <br />
            <Button type='primary' onClick={toggle}>
              Toggle disabled
            </Button>
          </div>
        }
        markdown={
          <div
            className='gird-descrition'
            dangerouslySetInnerHTML={{ __html: SwitchDisabledMd.html }}
          />
        }
      />

      <IntroduceBox
        height={440}
        title='文字和图标'
        description='带有文字和图标。'
        demo={
          <div style={{ marginBottom: '20px' }}>
            <Switch
              checkedChildren='开启'
              unCheckedChildren='关闭'
              defaultChecked
              style={{ marginBottom: '10px' }}
            />
            <br />
            <Switch checkedChildren='1' unCheckedChildren='0' style={{ marginBottom: '10px' }} />
            <br />
            <Switch
              checkedChildren={<i className='iconfont wk-icon-hock' />}
              unCheckedChildren={<i className='iconfont wk-icon-close' />}
              defaultChecked
              style={{ marginBottom: '10px' }}
            />
          </div>
        }
        markdown={
          <div
            className='gird-descrition'
            dangerouslySetInnerHTML={{ __html: SwitchChildrenMd.html }}
          />
        }
      />

      <IntroduceBox
        height={310}
        title='两种大小'
        description='size="small" 表示小号开关。'
        demo={
          <div style={{ marginBottom: '20px' }}>
            <Switch defaultChecked style={{ marginBottom: '10px' }} />
            <br />
            <Switch size='small' defaultChecked />
          </div>
        }
        markdown={
          <div
            className='gird-descrition'
            dangerouslySetInnerHTML={{ __html: SwtichSizeMd.html }}
          />
        }
      />

      <IntroduceBox
        height={310}
        title='加载中'
        description='标识开关操作仍在执行中。'
        demo={
          <div style={{ marginBottom: '20px' }}>
            <Switch loading defaultChecked style={{ marginBottom: '10px' }} />
            <br />
            <Switch size='small' loading />
          </div>
        }
        markdown={
          <div
            className='gird-descrition'
            dangerouslySetInnerHTML={{ __html: SwitchLoadingMd.html }}
          />
        }
      />

      <IntroduceBox
        title='API'
        table={
          <div
            className='gird-descrition'
            dangerouslySetInnerHTML={{ __html: SwitchReadMd.html }}
          />
        }
      />
    </div>
  )
}

export default SwitchPage
