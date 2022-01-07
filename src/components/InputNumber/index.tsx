import React, { Component } from 'react'

import { InputNumberProps } from './interface'
import './index.less'

class IndexNumber extends Component<InputNumberProps> {
  constructor(props) {
    super(props)
  }

  render(): React.ReactNode {
      return (
        <div className='wk-input-number'>
          <div className='wk-input-number-handler-wrap'>
            <span className='wk-input-number-handler wk-input-number-handler-up'>
              <i className='iconfont wk-icon-arrow-left'/>
            </span>
            <span className='wk-input-number-handler wk-input-number-handler-down'>
              <i className='iconfont wk-icon-arrow-left'/>
            </span>
          </div>
          <div className='wk-input-number-input-wrap'>
          <input className='wk-input-number-input'/>
          </div>
        </div>
      )
  }
}

export default IndexNumber