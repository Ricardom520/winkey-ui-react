import React from 'react'

import PageTitle from '../PageTitle'
import IntroduceBox from '../IntroduceBox'
import { icons } from './datas'

import './index.less'

const IconPage: React.SFC = () => {
  return (
    <div className='IconPage'>
      <PageTitle title='Icon 图标' description='提供了一套常用的图标集合' />
      <IntroduceBox
        title='图标集合'
        demo={
          <ul className='iconsBox'>
            {icons.map((i) => {
              return (
                <li key={i.index}>
                  <p className='icon'>
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
