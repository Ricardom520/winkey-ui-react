import React, { ReactNode } from 'react'

import './index.less'

interface RadioBtnProps {
  children?: ReactNode
  checked?: boolean
  value?: string | number
  onChange?: (e) => void
  defaultChecked?: boolean
  disabled?: boolean
  name?: string
}

interface RadioBtnState {
  checked?: boolean
}

export default class RadioBtn extends React.Component<RadioBtnProps, RadioBtnState> {
  static winkeyName = 'radioBtn'
  static defaultProps = {
    name: ''
  }
  constructor(props) {
    super(props)
    this.state = {
      checked: false
    }
  }

  componentDidMount() {
    const { checked, defaultChecked } = this.props

    this.setState({
      checked: checked || defaultChecked
    })
  }

  UNSAFE_componentWillReceiveProps(next) {
    if (next.checked !== undefined) {
      this.setState({
        checked: next.checked
      })
    }
  }

  render() {
    const { children, value, onChange, disabled, name } = this.props
    const { checked } = this.state

    return (
      <label
        className={
          'wk-radio-button-wrapper' +
          (checked ? ' wk-radio-button-wrapper-checked' : '') +
          (disabled ? ' wk-radio-button-wrapper-disabled' : '')
        }
      >
        <span className={'wk-radio-button' + (checked ? ' wk-radio-button-checked' : '')}>
          <input
            className='wk-radio-button-input'
            type='radio'
            value={value || ''}
            onChange={onChange}
            checked={checked}
            disabled={disabled || false}
            name={name}
          />
          <span className='wk-radio-button-inner' />
        </span>
        <span>{children}</span>
      </label>
    )
  }
}
