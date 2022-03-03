import React, { useState, useEffect } from 'react'

import { HighlightCode } from '@/tool/func'
import { Toast, Button, Space } from '@/components'
import PageTitle from '../PageTitle'
import IntroduceBox from '../IntroduceBox'
import './index.less'

const ToastPage: React.FC = () => {
  const show = () => {
    Toast.show('这是一行很长很长的提示语!!!!')
  }
  const success = () => {
    Toast.success('成功文案')
  }
  const error = () => {
    Toast.error('失败文案')
  }
  const loading = () => {
    Toast.loading('加载中...')
  }
  const close = () => {
    Toast.close()
  }

  useEffect(() => {
    HighlightCode()
  }, [])

  return (
    <div style={{ paddingBottom: '20px' }}>
      <PageTitle
        title='Toast弹窗'
        description='在页面中间弹出黑色半透明提示，用于消息通知、加载提示、操作结果提示等场景。'
      />

      <IntroduceBox
        height={330}
        title='Toast提示'
        description='文字提示'
        demo={
          <div style={{ marginBottom: '20px' }}>
            <Button type='primary' onClick={show}>
              文字提示
            </Button>
          </div>
        }
        // markdown={
        // <div className="show-html" dangerouslySetInnerHTML={{ __html: MessageBaseMd }} />
        // }
      />

      <IntroduceBox
        height={520}
        title='其他提示类型'
        description='包括成功、失败、加载中'
        demo={
          <div style={{ marginBottom: '20px' }}>
            <Space>
              <Button onClick={success}>Success</Button>
              <Button onClick={error}>Error</Button>
              <Button onClick={loading}>Loading</Button>
            </Space>
          </div>
        }
        // markdown={
        //   <div
        //     className="show-html"
        //     dangerouslySetInnerHTML={{ __html: MessageTypeMd }}
        //   />
        // }
      />

      <IntroduceBox
        height={520}
        title='手动关闭toast弹窗'
        description='可关闭toast弹窗'
        demo={
          <div style={{ marginBottom: '20px' }}>
            <Space>
              <Button onClick={show}>显示</Button>
              <Button onClick={close}>close</Button>
            </Space>
          </div>
        }
        // markdown={
        //   <div
        //     className="show-html"
        //     dangerouslySetInnerHTML={{ __html: MessageTypeMd }}
        //   />
        // }
      />
    </div>
  )
}

export default ToastPage
