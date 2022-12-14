```tsx
import React from 'reaact'
import { Tag } from 'winkey-ui-react'

const Demo: React.SFC = () => {
  return (
    <div style={{ marginBottom: '20px' }}>
      <Tag
        icon={
          <i
            className='iconfont wk-icon-twitter'
            style={{ fontSize: '12px', marginRight: '5px' }}
          />
        }
        color='#55acee'
      >
        Twitter
      </Tag>
      <Tag icon='wk-icon-youtube' color='#cd201f'>
        Youtube
      </Tag>
      <Tag
        icon={<i className='iconfont wk-icon-facebook' style={{ marginRight: '5px' }} />}
        color='#3b5999'
      >
        Facebook
      </Tag>
      <Tag
        icon={<i className='iconfont wk-icon-linkedin' style={{ marginRight: '5px' }} />}
        color='#55acee'
      >
        LinkedIn
      </Tag>
    </div>
  )
}

return Demo
```
