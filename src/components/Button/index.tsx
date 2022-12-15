import React from 'react'
import { ButtonProps } from './model'
import './index.less'

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

const Button: React.FC<ButtonProps> = (props) => {
  const {
    style,
    disabled,
    block,
    danger,
    className,
    loading,
    ghost,
    href,
    children,
    icon,
    type = 'default',
    shape = '',
    size = '',
    htmlType = 'button',
    onClick
  } = props

  const _onClick = (event: React.MouseEvent) => {
    if (onClick) {
      onClick(event)
    }
  }

  return (
    <button
      type={htmlType}
      style={style}
      disabled={disabled}
      className={
        'wk-btn ' +
        WkBtnClass[type] +
        (shape ? WkBtnClass[shape] : '') +
        (icon && !children ? 'wk-btn-icon-only ' : '') +
        (block ? 'wk-btn-block ' : '') +
        (danger ? 'wk-btn-dangerous ' : '') +
        (className ? className : '') +
        (loading ? 'wk-btn-loading ' : '') +
        (ghost ? ' wk-btn-background-ghost' : '') +
        (size ? WkBtnClass[size] : '')
      }
      onClick={_onClick}
    >
      {href && (
        <a href={href}>
          <span className={(children && icon && 'wk-btn-animation') || ''}>
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
        <span className={(children && icon && 'wk-btn-animation') || ''}>
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

export default Button
