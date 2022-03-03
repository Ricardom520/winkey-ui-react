import React, { ReactNode, useState } from 'react'

import './index.less'

interface IntroduceBoxProps {
  title: string
  description?: ReactNode
  demo?: ReactNode
  markdown?: ReactNode
  table?: ReactNode
  height?: number
}

const IntroduceBox: React.SFC<IntroduceBoxProps> = (props) => {
  const { title, description, demo, markdown, height, table } = props
  const [hoverFlag, setHoverFlag] = useState<boolean>(false)
  const [openFlag, setOpenFlag] = useState<boolean>(false)

  return (
    <section className='introduceBoxContainer'>
      <p className='title'>{title}</p>
      {description && <p className='description'>{description}</p>}
      {demo && (
        <div className='container'>
          <div style={{ padding: '20px 20px 0 20px' }}>
            <div className='demo'>{demo}</div>
            <div
              className='code'
              style={{
                height: openFlag ? `${height}px` : 0,
                overflow: 'hidden',
                marginBottom: openFlag ? '20px' : 0
              }}
            >
              {markdown}
            </div>
          </div>
          {markdown && (
            <div
              className='showline'
              onMouseEnter={() => setHoverFlag(true)}
              onMouseLeave={() => setHoverFlag(false)}
              onClick={() => setOpenFlag(!openFlag)}
            >
              <p>
                <i className={openFlag ? 'active' : ''} />
                {hoverFlag && (
                  <span className='showlineTitle'>{openFlag ? '隐藏代码' : '展示代码'}</span>
                )}
              </p>
            </div>
          )}
        </div>
      )}
      {table && <div className='introTable'>{table}</div>}
    </section>
  )
}

export default IntroduceBox
