import React, { ReactNode, useState } from 'react'

import styles from './index.module.less'

interface IntroduceBoxProps {
  title: string
  description?: ReactNode
  demo?: ReactNode
  markdown?: ReactNode
  table?: ReactNode
  height?: number
}

const IntroduceBox: React.FC<IntroduceBoxProps> = (props) => {
  const { title, description, demo, markdown, height, table } = props
  const [hoverFlag, setHoverFlag] = useState<boolean>(false)
  const [openFlag, setOpenFlag] = useState<boolean>(false)

  return (
    <section className={styles['introduce-box-container']}>
      <p className={styles['title']}>{title}</p>
      {description && <p className={styles['description']}>{description}</p>}
      {demo && (
        <div className={styles['container']}>
          <div style={{ padding: '20px 20px 0 20px' }}>
            <div className={styles['demo']}>{demo}</div>
            <div
              className={styles['code']}
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
              className={styles['showline']}
              onMouseEnter={() => setHoverFlag(true)}
              onMouseLeave={() => setHoverFlag(false)}
              onClick={() => setOpenFlag(!openFlag)}
            >
              <p>
                <i className={openFlag ? styles['active'] : ''} />
                {hoverFlag && (
                  <span className={styles['showline-title']}>
                    {openFlag ? '隐藏代码' : '展示代码'}
                  </span>
                )}
              </p>
            </div>
          )}
        </div>
      )}
      {table && <div className={styles['intro-table']}>{table}</div>}
    </section>
  )
}

export default IntroduceBox
