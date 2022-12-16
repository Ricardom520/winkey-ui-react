import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Router } from '~/pages/router'
import Header from '~/pages/components/header'
import { routes } from './routes'
import { menus } from './datas'
import styles from './index.module.less'
import './base.less'

const Document: React.FC = () => {
  const location = useLocation()
  const [type, setType] = useState<string>('')

  useEffect(() => {
    setType(location.pathname.split('/components')[1])
  }, [location])

  return (
    <div className={styles['component-container']}>
      <Header type={1} />
      <div className={styles['box']}>
        <div className={styles['left']}>
          <div className={styles['content']}>
            {menus.map((i, n) => {
              return (
                <ul key={`${i.title}-${n}`}>
                  <div className={styles['title']}>
                    <p>{i.title}</p>
                  </div>
                  <div className={styles['desc']}>
                    {i.lists.map((j) => {
                      return (
                        <li
                          key={j.id}
                          style={{ display: j.hidden ? 'none' : 'block' }}
                          className={type === j.url ? styles['active'] : ''}
                        >
                          <Link to={`/components${j.url}`}>{j.title}</Link>
                        </li>
                      )
                    })}
                  </div>
                </ul>
              )
            })}
          </div>
        </div>
        <div className={styles['right']}>
          <div className={styles['content']}>
            <Router routes={routes} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Document
