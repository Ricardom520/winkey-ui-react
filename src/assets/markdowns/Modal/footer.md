```tsx
import React from 'react'
import { Button, Modal } from 'winkey-ui'

const Demo: React.SFC = () => {
  const [visible, setVisible] = useState(false)
  const [loading, setLoading] = useState(false)

  const showModal = () => {
    setVisible(true)
  }

  const handleOk = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setVisible(false)
    }, 3000)
  }

  const handleCancel = () => {
    setVisible(false)
  }

  return (
    <div>
      <Button type='primary' onClick={showModal}>
        Open Modal with customized footer
      </Button>
      <Modal
        visible={visible}
        title='Title'
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key='back' onClick={handleCancel}>
            Return
          </Button>,
          <Button key='submit' type='primary' loading={loading} onClick={handleOk}>
            Submit
          </Button>,
          <Button
            key='link'
            href='https://google.com'
            type='primary'
            loading={loading}
            onClick={handleOk}
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
  )
}

export default Demo
```
