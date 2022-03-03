```tsx
import React from 'reaact'
import { Tag } from 'winkey-ui-react'

const Demo: React.SFC = () => {
  const log = (e) => {
    console.log(e)
  }

  const preventDefault = (e) => {
    e.preventDefault()
    console.log('Clicked! But prevent default.')
  }

  return (
    <>
      <Tag>Tag 1</Tag>
      <Tag>
        <a href='https://github.com/ant-design/ant-design/issues/1862'>Link</a>
      </Tag>
      <Tag closable onClose={log}>
        Tag 2
      </Tag>
      <Tag closable onClose={preventDefault}>
        Prevent Default
      </Tag>
    </>
  )
}

return Demo
```
