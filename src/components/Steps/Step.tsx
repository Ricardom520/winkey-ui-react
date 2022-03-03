import React, { Component } from 'react'

import { StepProps } from './interface'

const statusClassName = {
  process: ' wk-steps-item-process',
  finish: ' wk-steps-item-finish',
  wait: ' wk-steps-item-wait',
  error: ' wk-steps-item-error'
}

class Step extends Component<StepProps> {
  handleChange = () => {
    const { disabled, onChange } = this.props
    if (disabled) return

    onChange()
  }
  render() {
    const { title, description, subTitle, index, status, icon, progressDot, disabled } = this.props

    return (
      <div
        className={
          'wk-steps-item' + statusClassName[status] + (disabled ? ' wk-steps-item-disabled' : '')
        }
        onClick={this.handleChange}
      >
        <div className='wk-steps-item-container'>
          <div className='wk-steps-item-tail'></div>
          <div className='wk-steps-item-icon'>
            <span className='wk-steps-icon'>
              {!progressDot && (
                <>
                  {icon && icon}
                  {!icon && (
                    <>
                      {status === 'wait' && index}
                      {status === 'finish' && <i className='iconfont wk-icon-hock'></i>}
                      {status === 'process' && index}
                      {status === 'error' && <i className='iconfont wk-icon-close' />}
                    </>
                  )}
                </>
              )}
              {progressDot && <span className='wk-steps-icon-dot' />}
            </span>
          </div>
          <div className='wk-steps-item-content'>
            <div className='wk-steps-item-title'>
              {title}
              {subTitle && <div className='wk-steps-item-subtitle'>{subTitle}</div>}
            </div>
            <div className='wk-steps-item-description'>{description}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Step
