import React from 'react'

import PageTitle from '../../components/pageTitle'
import IntroduceBox from '../../components/introduceBox'
import {
  baseIcons,
  lifeIcons,
  trafficIcons,
  appIcons,
  personIcons,
  fontIcons,
  statusIcons
} from './datas'

import styles from './index.module.less'

const IconPage: React.FC = () => {
  return (
    <div className='component-page'>
      <PageTitle title='Icon 图标' description='提供了一套常用的图标集合' />
      <IntroduceBox
        title='基础图标'
        demo={
          <ul className={styles['icons-box']}>
            {baseIcons.map((i, n) => {
              return (
                <li key={n}>
                  <p className={styles['icon']}>
                    <i className={`iconfont ${i.icon}`} />
                  </p>
                  <p>
                    <span>{i.icon}</span>
                  </p>
                </li>
              )
            })}
          </ul>
        }
      />

      <IntroduceBox
        title='生活图标'
        demo={
          <ul className={styles['icons-box']}>
            {lifeIcons.map((i, n) => {
              return (
                <li key={n}>
                  <p className={styles['icon']}>
                    <i className={`iconfont ${i.icon}`} />
                  </p>
                  <p>
                    <span>{i.icon}</span>
                  </p>
                </li>
              )
            })}
          </ul>
        }
      />

      <IntroduceBox
        title='交通图标'
        demo={
          <ul className={styles['icons-box']}>
            {trafficIcons.map((i, n) => {
              return (
                <li key={n}>
                  <p className={styles['icon']}>
                    <i className={`iconfont ${i.icon}`} />
                  </p>
                  <p>
                    <span>{i.icon}</span>
                  </p>
                </li>
              )
            })}
          </ul>
        }
      />

      <IntroduceBox
        title='APP图标'
        demo={
          <ul className={styles['icons-box']}>
            {appIcons.map((i, n) => {
              return (
                <li key={n}>
                  <p className={styles['icon']}>
                    <i className={`iconfont ${i.icon}`} />
                  </p>
                  <p>
                    <span>{i.icon}</span>
                  </p>
                </li>
              )
            })}
          </ul>
        }
      />

      <IntroduceBox
        title='人物图标'
        demo={
          <ul className={styles['icons-box']}>
            {personIcons.map((i, n) => {
              return (
                <li key={n}>
                  <p className={styles['icon']}>
                    <i className={`iconfont ${i.icon}`} />
                  </p>
                  <p>
                    <span>{i.icon}</span>
                  </p>
                </li>
              )
            })}
          </ul>
        }
      />

      <IntroduceBox
        title='文案图标'
        demo={
          <ul className={styles['icons-box']}>
            {fontIcons.map((i, n) => {
              return (
                <li key={n}>
                  <p className={styles['icon']}>
                    <i className={`iconfont ${i.icon}`} />
                  </p>
                  <p>
                    <span>{i.icon}</span>
                  </p>
                </li>
              )
            })}
          </ul>
        }
      />

      <IntroduceBox
        title='状态图标'
        demo={
          <ul className={styles['icons-box']}>
            {statusIcons.map((i, n) => {
              return (
                <li key={n}>
                  <p className={styles['icon']}>
                    <i className={`iconfont ${i.icon}`} />
                  </p>
                  <p>
                    <span>{i.icon}</span>
                  </p>
                </li>
              )
            })}
          </ul>
        }
      />
    </div>
  )
}

export default IconPage
