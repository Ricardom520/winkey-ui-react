import React, { ReactNode } from 'react'

import './index.less'

interface ButtonProps {
  block?: boolean
  children?: ReactNode
  className?: string
  danger?: boolean
  disabled?: boolean
  loading?: boolean
  icon?: ReactNode
  type?: 'default' | 'primary' | 'dashed' | 'text' | 'link'
  shape?: 'circle'
  style?: React.CSSProperties
  size?: 'large' | 'small' | ''
  ghost?: boolean
  onClick?: (EventTarget) => void
  htmlType?: 'button' | 'submit' | 'reset'
  href?: string
}

const WkBtnClass = {
  'default': '',
  'primary': 'wk-btn-primary ',
  'success': 'wk-btn-success',
  'info': 'wk-btn-info',
  'warning': 'wk-btn-warning',
  'danger': 'wk-btn-danger',
  'dashed': 'wk-btn-dashed ',
  'text': 'wk-btn-text ',
  'link': 'wk-btn-link ',
  'circle': 'wk-btn-circle ',
  'large': 'wk-btn-lg ',
  'small': 'wk-btn-sm ',
  '': ''
}

export default class Button extends React.Component<ButtonProps> {
  static winkeyName = 'button'
  static defaultProps = {
    type: 'default',
    shape: '',
    size: '',
    className: '',
    htmlType: 'button'
  }

  _onClick = (e) => {
    if (this.props.onClick) {
      this.props.onClick(e)
    }
  }

  render() {
    const {
      children,
      type,
      shape,
      icon,
      block,
      danger,
      disabled,
      style,
      size,
      className,
      loading,
      htmlType,
      ghost,
      href
    } = this.props

    return (
      <button
        type={htmlType}
        style={style}
        disabled={disabled}
        className={
          'wk-btn ' +
          WkBtnClass[type] +
          WkBtnClass[shape] +
          (icon && !children ? 'wk-btn-icon-only ' : '') +
          (block ? 'wk-btn-block ' : '') +
          (danger ? 'wk-btn-dangerous ' : '') +
          (className ? className : '') +
          (loading ? 'wk-btn-loading ' : '') +
          (ghost ? ' wk-btn-background-ghost' : '') +
          WkBtnClass[size]
        }
        onClick={this._onClick}
      >
        {href && (
          <a href={href}>
            <span className={children && icon && 'wk-btn-animation'}>
              {icon && !loading && typeof icon === 'string' ? (
                <i className={'iconfont ' + icon} />
              ) : (
                icon
              )}
              {loading && (
                <i
                  className={
                    'iconfont wk-icon-loading-line-round wk-btn-loading-icon' +
                    (!children ? ' wk-btn-loading-icon-only' : '')
                  }
                />
              )}
              {children}
            </span>
          </a>
        )}
        {!href && (
          <span className={children && icon && 'wk-btn-animation'}>
            {icon && !loading && typeof icon === 'string' ? (
              <i className={'iconfont ' + icon} />
            ) : (
              icon
            )}
            {loading && (
              <i
                className={
                  'iconfont wk-icon-loading-line-round wk-btn-loading-icon' +
                  (!children ? ' wk-btn-loading-icon-only' : '')
                }
              />
            )}
            {children}
          </span>
        )}
      </button>
    )
  }
}
