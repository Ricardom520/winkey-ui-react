import React, { Component } from 'react'

import { InputProps } from './index'

const InputClass = {
  'large': ' wk-input-lg',
  'small': ' wk-input-sm',
  'left': ' wk-input-left',
  'center': ' wk-input-center',
  'right': ' wk-input-right',
  '': ''
}

export default class Input extends Component<InputProps> {
  _onClick = (e) => {
    if (this.props.onClick) {
      this.props.onClick(e)
    }
  }

  _onChange = (e) => {
    if (this.props.onChange) {
      this.props.onChange(e)
    }
  }

  _onBlur = (e) => {
    if (this.props.onBlur) {
      this.props.onBlur(e)
    }
  }

  _onFocus = (e) => {
    if (this.props.onFocus) {
      this.props.onFocus(e)
    }
  }

  render() {
    const {
      placeholder,
      isMobile,
      readOnly,
      size = '',
      textAlign = '',
      className,
      style,
      value,
      defaultValue,
      type,
      maxLength,
      disabled,
      bordered
    } = this.props

    return (
      <input
        disabled={disabled}
        maxLength={maxLength}
        type={type}
        readOnly={readOnly}
        className={
          'wk-input' +
          (isMobile ? ' wk-input-mobile' : '') +
          InputClass[size] +
          InputClass[textAlign] +
          (className ? ` ${className}` : '') +
          (!bordered ? ' wk-input-borderless' : '')
        }
        placeholder={placeholder}
        defaultValue={defaultValue}
        value={value}
        onClick={this._onClick}
        onChange={this._onChange}
        style={style}
        onBlur={this._onBlur}
        onFocus={this._onFocus}
      />
    )
  }
}
