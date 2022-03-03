import React, { useEffect } from 'react'

import { HighlightCode } from '@/tool/func'
import { Button, message, Space } from '@/components'
import PageTitle from '../PageTitle'
import IntroduceBox from '../IntroduceBox'
import MessageBaseMd from '@/assets/markdowns/Message/base.md'
import MessageTypeMd from '@/assets/markdowns/Message/type.md'
import MessageReadMd from '@/assets/markdowns/Message/read.md'

const MessagePage: React.FC = () => {
  const info = () => {
    message.info('This is a normal message')
  }

  const success = () => {
    message.success('This is a success message')
  }

  const error = () => {
    message.error('This is an error message')
  }

  const warning = () => {
    message.warning('This is a warning message')
  }

  useEffect(() => {
    HighlightCode()
  }, [])

  return (
    <div>
      <PageTitle title='Message全局提示' description='全局展示操作反馈信息。' />

      <IntroduceBox
        height={330}
        title='普通提示'
        description='信息提醒反馈。'
        demo={
          <div style={{ marginBottom: '20px' }}>
            <Button type='primary' onClick={info}>
              Display normal message
            </Button>
          </div>
        }
        markdown={
          <div className='show-html' dangerouslySetInnerHTML={{ __html: MessageBaseMd.html }} />
        }
      />

      <IntroduceBox
        height={520}
        title='其他提示类型'
        description='包括成功、失败、警告。'
        demo={
          <div style={{ marginBottom: '20px' }}>
            <Space>
              <Button onClick={success}>Success</Button>
              <Button onClick={error}>Error</Button>
              <Button onClick={warning}>Warning</Button>
            </Space>
          </div>
        }
        markdown={
          <div className='show-html' dangerouslySetInnerHTML={{ __html: MessageTypeMd.html }} />
        }
      />

      <IntroduceBox
        title='API'
        table={
          <div className='show-html' dangerouslySetInnerHTML={{ __html: MessageReadMd.html }} />
        }
      />
    </div>
  )
}

export default MessagePage
