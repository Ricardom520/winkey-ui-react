import React, { ReactNode } from 'react'

import './index.less'

interface SwitchProps {
  defaultChecked?: boolean
  checked?: boolean
  disabled?: boolean
  onChange?: (boolean) => void
  style?: React.CSSProperties
  checkedChildren?: ReactNode
  unCheckedChildren?: ReactNode
  size?: 'small'
  loading?: boolean
}

interface SwitchState {
  checked: boolean
  disabled: boolean
}

const switchClass = {
  'small': ' wk-switch-small',
  'default': '',
  '': ''
}

export default class Switch extends React.Component<SwitchProps, SwitchState> {
  static winkeyName = 'switch'
  static defaultProps = {
    size: ''
  }

  constructor(props) {
    super(props)

    this.state = {
      checked: false,
      disabled: false
    }
  }

  componentDidMount() {
    const { checked, defaultChecked, disabled, loading } = this.props

    this.setState({
      checked: checked || defaultChecked,
      disabled: loading || disabled
    })
  }

  UNSAFE_componentWillReceiveProps(next) {
    const { disabled, checked } = next

    if (disabled !== undefined) {
      this.setState({
        disabled
      })
    }

    if (checked !== undefined) {
      this.setState({
        checked
      })
    }
  }

  handleClick = () => {
    const { disabled, onChange, loading } = this.props

    if (!disabled && !loading) {
      if (onChange) {
        onChange(!this.state.checked)
      }

      this.setState({
        checked: !this.state.checked
      })
    }
  }

  initSwitch = () => {
    const { style, checkedChildren, unCheckedChildren, size, loading } = this.props
    const { checked, disabled } = this.state

    return (
      <button
        type='button'
        role='switch'
        className={
          'wk-switch' +
          (checked ? ' wk-switch-checked' : '') +
          (disabled ? ' wk-switch-disabled' : '') +
          (switchClass[size] ? switchClass[size] : '')
        }
        onClick={this.handleClick}
        style={style}
      >
        <div className='wk-switch-handle'>
          {loading && (
            <span className='wk-switch-loading-icon'>
              <i className='iconfont wk-icon-loading-line-round' />
            </span>
          )}
        </div>
        <span className='wk-switch-inner'>{checked ? checkedChildren : unCheckedChildren}</span>
      </button>
    )
  }

  render() {
    return <>{this.initSwitch()}</>
  }
}
