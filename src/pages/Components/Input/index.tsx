import React, { useEffect } from 'react'

import { Input } from '@/components'
import { HighlightCode } from '@/tool/func'
import PageTitle from '../PageTitle'
import IntroduceBox from '../IntroduceBox'
import InputMd from '@/assets/markdowns/Input/base.md'
import InputSizeMd from '@/assets/markdowns/Input/size.md'
import InputBeforeAfterMd from '@/assets/markdowns/Input/beforeAfter.md'
import InputTextAreaMd from '@/assets/markdowns/Input/textarea.md'
import InputPassswordMd from '@/assets/markdowns/Input/password.md'
import InputNumberMd from '@/assets/markdowns/Input/number.md'
import InputSufPreMd from '@/assets/markdowns/Input/sufpre.md'
import InputClearMd from '@/assets/markdowns/Input/clear.md'
import InputReadMd from '@/assets/markdowns/Input/read.md'

const { TextArea } = Input

const InputPage: React.FC = () => {
  const onChange = (e) => {
    console.log(e)
  }

  useEffect(() => {
    HighlightCode()
  }, [])

  return (
    <div style={{ paddingBottom: '20px' }}>
      <PageTitle
        title='Input输入框'
        description='通过鼠标或键盘输入内容，是最基础的表单域的包装。'
      />

      <IntroduceBox
        height={210}
        title='基本使用'
        description='基本使用。'
        demo={
          <div style={{ marginBottom: '20px' }}>
            <Input placeholder='Basic usage' />
          </div>
        }
        markdown={
          <div className='gird-descrition' dangerouslySetInnerHTML={{ __html: InputMd.html }} />
        }
      />

      <IntroduceBox
        height={370}
        title='三种大小'
        description='我们为 <Input /> 输入框定义了三种尺寸（大、默认、小），高度分别为 40px、32px 和 24px。'
        demo={
          <div style={{ marginBottom: '20px' }}>
            <Input size='large' placeholder='large size' prefix='wk-icon-user' />
            <br />
            <br />
            <Input placeholder='default size' prefix='wk-icon-user' />
            <br />
            <br />
            <Input size='small' placeholder='small size' prefix='wk-icon-user' />
          </div>
        }
        markdown={
          <div className='gird-descrition' dangerouslySetInnerHTML={{ __html: InputSizeMd.html }} />
        }
      />

      <IntroduceBox
        height={350}
        title='前置/后置标签'
        description='用于配置一些固定组合。'
        demo={
          <div style={{ marginBottom: '20px' }}>
            <div style={{ marginBottom: 16 }}>
              <Input addonBefore='http://' addonAfter='.com' defaultValue='mysite' />
            </div>
            <div style={{ marginBottom: 16 }}>
              <Input addonBefore='http://' suffix='.com' defaultValue='mysite' />
            </div>
          </div>
        }
        markdown={
          <div
            className='gird-descrition'
            dangerouslySetInnerHTML={{ __html: InputBeforeAfterMd.html }}
          />
        }
      />

      <IntroduceBox
        height={250}
        title='文本域'
        description='用于多行输入。'
        demo={
          <div style={{ marginBottom: '20px' }}>
            <TextArea style={{ height: 100 }} />
          </div>
        }
        markdown={
          <div
            className='gird-descrition'
            dangerouslySetInnerHTML={{ __html: InputTextAreaMd.html }}
          />
        }
      />

      <IntroduceBox
        height={330}
        title='密码框'
        description='密码框。'
        demo={
          <div style={{ marginBottom: '20px' }}>
            <Input.Password placeholder='input password' style={{ marginBottom: '20px' }} />
            <Input.Password
              placeholder='input password'
              iconRender={(visible) =>
                visible ? (
                  <i className='iconfont wk-icon-open-eyes' />
                ) : (
                  <i className='iconfont wk-icon-close-eyes' />
                )
              }
            />
          </div>
        }
        markdown={
          <div
            className='gird-descrition'
            dangerouslySetInnerHTML={{ __html: InputPassswordMd.html }}
          />
        }
      />

      <IntroduceBox
        height={250}
        title='带字数提示的文本域'
        description='展示字数提示。'
        demo={
          <div style={{ marginBottom: '20px' }}>
            <TextArea showCount maxLength={100} />
          </div>
        }
        markdown={
          <div
            className='gird-descrition'
            dangerouslySetInnerHTML={{ __html: InputNumberMd.html }}
          />
        }
      />

      <IntroduceBox
        height={350}
        title='前缀和后缀'
        description='在输入框上添加前缀或后缀图标。'
        demo={
          <div style={{ marginBottom: '20px' }}>
            <Input placeholder='Enter your username' prefix='wk-icon-user' suffix='wk-icon-sigh' />
            <br />
            <br />
            <Input prefix='￥' suffix='RMB' />
            <br />
            <br />
            <Input prefix='￥' suffix='RMB' disabled />
          </div>
        }
        markdown={
          <div
            className='gird-descrition'
            dangerouslySetInnerHTML={{ __html: InputSufPreMd.html }}
          />
        }
      />

      <IntroduceBox
        height={310}
        title='带移除图标'
        description='带移除图标的输入框，点击图标删除所有内容。'
        demo={
          <div style={{ marginBottom: '20px' }}>
            <Input placeholder='input with clear icon' allowClear onChange={onChange} />
            <br />
            <br />
            <TextArea placeholder='textarea with clear icon' allowClear onChange={onChange} />
          </div>
        }
        markdown={
          <div
            className='gird-descrition'
            dangerouslySetInnerHTML={{ __html: InputClearMd.html }}
          />
        }
      />

      <IntroduceBox
        title='API'
        table={
          <div className='gird-descrition' dangerouslySetInnerHTML={{ __html: InputReadMd.html }} />
        }
      />
    </div>
  )
}

export default InputPage
