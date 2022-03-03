import React, { useEffect, useState } from 'react'

import { HighlightCode } from '@/tool/func'
import { Button, Modal } from '@/components'
import PageTitle from '../PageTitle'
import IntroduceBox from '../IntroduceBox'
import ModalBaseMd from '@/assets/markdowns/Modal/base.md'
import ModalFooterMd from '@/assets/markdowns/Modal/footer.md'

const ModalPage: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [visible, setVisible] = useState(false)
  const [loading, setLoading] = useState(false)

  const showModal = () => {
    setIsModalVisible(true)
  }

  const showModal1 = () => {
    setVisible(true)
  }

  const handleOk = () => {
    setIsModalVisible(false)
  }

  const handleOk1 = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setVisible(false)
    }, 3000)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  const handleCancel1 = () => {
    setVisible(false)
  }

  useEffect(() => {
    HighlightCode()
  }, [])

  return (
    <div style={{ paddingBottom: '20px' }}>
      <PageTitle title='Modal对话框' description='模态对话框。' />

      <IntroduceBox
        height={660}
        title='基本'
        description='第一个对话框。'
        demo={
          <div style={{ marginBottom: '20px' }}>
            <Button type='primary' onClick={showModal}>
              Open Modal
            </Button>
            <Modal
              title='Basic Modal'
              visible={isModalVisible}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </Modal>
          </div>
        }
        markdown={
          <div className='show-html' dangerouslySetInnerHTML={{ __html: ModalBaseMd.html }} />
        }
      />

      <IntroduceBox
        height={1200}
        title='自定义页'
        description='更复杂的例子，自定义了页脚的按钮，点击提交后进入 loading 状态，完成后关闭。
        不需要默认确定取消按钮时，你可以把 footer 设为 null。'
        demo={
          <div style={{ marginBottom: '20px' }}>
            <Button type='primary' onClick={showModal1}>
              Open Modal with customized footer
            </Button>
            <Modal
              visible={visible}
              title='Title'
              onOk={handleOk1}
              onCancel={handleCancel1}
              footer={[
                <Button key='back' onClick={handleCancel!}>
                  Return
                </Button>,
                <Button key='submit' type='primary' loading={loading} onClick={handleOk1}>
                  Submit
                </Button>,
                <Button
                  key='link'
                  href='https://google.com'
                  type='primary'
                  loading={loading}
                  onClick={handleOk1}
                >
                  Search on Google
                </Button>
              ]}
            >
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </Modal>
          </div>
        }
        markdown={
          <div className='show-html' dangerouslySetInnerHTML={{ __html: ModalFooterMd.html }} />
        }
      />

      <IntroduceBox
        height={1200}
        title='自定义页'
        description='更复杂的例子，自定义了页脚的按钮，点击提交后进入 loading 状态，完成后关闭。
        不需要默认确定取消按钮时，你可以把 footer 设为 null。'
        demo={
          <div style={{ marginBottom: '20px' }}>
            <Button type='primary' onClick={showModal1}>
              Open Modal with customized footer
            </Button>
            <Modal
              visible={visible}
              title='Title'
              onOk={handleOk1}
              onCancel={handleCancel1}
              footer={[
                <Button key='back' onClick={handleCancel!}>
                  Return
                </Button>,
                <Button key='submit' type='primary' loading={loading} onClick={handleOk1}>
                  Submit
                </Button>,
                <Button
                  key='link'
                  href='https://google.com'
                  type='primary'
                  loading={loading}
                  onClick={handleOk1}
                >
                  Search on Google
                </Button>
              ]}
            >
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </Modal>
          </div>
        }
        markdown={
          <div className='show-html' dangerouslySetInnerHTML={{ __html: ModalFooterMd.html }} />
        }
      />
    </div>
  )
}

export default ModalPage
