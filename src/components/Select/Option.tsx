import React, { Component, ReactNode } from 'react'

import './index.less'

interface OptionProps {
  disabled?: boolean
  value?: string | number
  children?: ReactNode
  open?: boolean
  onClick?: (value, label, boolean) => void
  checked?: boolean
  mode?: 'single' | 'multiple'
}

export default class Option extends Component<OptionProps> {
  constructor(props) {
    super(props)
  }

  handleClick = () => {
    const { disabled, onClick, value, children, checked } = this.props

    if (disabled) {
      return
    }

    onClick(value, children, !checked)
  }

  render() {
    const { children, checked, disabled, mode } = this.props

    return (
      <div
        className={
          'wk-select-item wk-select-item-option' +
          (checked ? ' wk-select-item-checked' : '') +
          (disabled ? ' wk-select-item-disabled' : '')
        }
        onClick={this.handleClick}
      >
        <div className='wk-select-item-option-content'>{children}</div>
        {mode === 'multiple' && checked && (
          <span className='wk-select-item-option-state'>
            <i className='iconfont wk-icon-hock' />
          </span>
        )}
        <span className='wk-select-item-option-state' style={{ userSelect: 'none' }} />
      </div>
    )
  }
}
