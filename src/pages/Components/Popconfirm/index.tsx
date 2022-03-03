import React, { useEffect } from 'react'

import { HighlightCode } from '@/tool/func'
import { Popconfirm, message, Button } from '@/components'
import PageTitle from '../PageTitle'
import IntroduceBox from '../IntroduceBox'
import PopconfirmBaseMd from '@/assets/markdowns/Popconfirm/base.md'

const PopconfirmPage: React.FC = () => {
  const confirm = (e) => {
    console.log(e)
    message.success('Click on Yes')
  }

  const cancel = (e) => {
    console.log(e)
    message.error('Click on No')
  }

  useEffect(() => {
    HighlightCode()
  }, [])

  return (
    <div style={{ paddingBottom: '20px' }}>
      <PageTitle title='Popconfirm气泡确认框' description='点击元素，弹出气泡式的确认框。' />

      <IntroduceBox
        height={555}
        title='基本'
        description='最简单的用法。'
        demo={
          <div style={{ marginBottom: '20px' }}>
            <Popconfirm
              title='Are you sure to delete this task?'
              onConfirm={confirm}
              onCancel={cancel}
              okText='Yes'
              cancelText='No'
            >
              <Button type='link'>Delete</Button>
            </Popconfirm>
          </div>
        }
        markdown={
          <div
            className='gird-descrition'
            dangerouslySetInnerHTML={{ __html: PopconfirmBaseMd.html }}
          />
        }
      />

      <IntroduceBox
        height={555}
        title='国际化'
        description='使用 okText 和 cancelText 自定义按钮文字。'
        demo={
          <div style={{ marginBottom: '20px' }}>
            <Popconfirm
              title='Are you sure？'
              onConfirm={confirm}
              onCancel={cancel}
              okText='Yes'
              cancelText='No'
            >
              <Button type='link'>Delete</Button>
            </Popconfirm>
          </div>
        }
        markdown={
          <div
            className='gird-descrition'
            dangerouslySetInnerHTML={{ __html: PopconfirmBaseMd.html }}
          />
        }
      />
    </div>
  )
}

export default PopconfirmPage
