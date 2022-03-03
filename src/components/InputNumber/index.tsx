import React, { Component } from 'react'

import { InputNumberProps, InputNumberState } from './interface'
import './index.less'

class IndexNumber extends Component<InputNumberProps, InputNumberState> {
  static defaultProps = {
    min: Number.MIN_SAFE_INTEGER,
    max: Number.MAX_SAFE_INTEGER
  }

  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
  }

  componentDidMount(): void {
    const { defaultValue, value } = this.props

    if (value || defaultValue) {
      this.setState({
        value: `${value || defaultValue}`
      })
    }
  }

  handleAddValue = () => {
    const { onChange, min, max } = this.props
    const { value } = this.state
    let newValue: number = parseInt(value, 10)

    if (min <= newValue && newValue <= max) {
      newValue = newValue + 1
    }

    if (onChange) {
      onChange(newValue)
    }

    this.setState({
      value: `${newValue}`
    })
  }

  handleReduceValue = () => {
    const { onChange, min, max } = this.props
    const { value } = this.state
    let newValue: number = parseInt(value, 10)

    if (min <= newValue || newValue <= max) {
      newValue = newValue - 1
    }

    if (onChange) {
      onChange(newValue)
    }

    this.setState({
      value: `${newValue}`
    })
  }

  handleChangeValue = (e) => {
    const { onChange, max, min } = this.props
    let value = parseInt(e.target.value)

    if (value > max) {
      value = max
    }

    if (value < min) {
      value = min
    }

    if (onChange) {
      onChange(value)
    }

    this.setState({
      value: value ? `${value}` : ''
    })
  }

  render(): React.ReactNode {
    const { value } = this.state

    return (
      <div className='wk-input-number'>
        <div className='wk-input-number-handler-wrap'>
          <span
            className='wk-input-number-handler wk-input-number-handler-up'
            onClick={this.handleAddValue}
          >
            <i className='iconfont wk-icon-arrow-left' />
          </span>
          <span
            className='wk-input-number-handler wk-input-number-handler-down'
            onClick={this.handleReduceValue}
          >
            <i className='iconfont wk-icon-arrow-left' />
          </span>
        </div>
        <div className='wk-input-number-input-wrap'>
          <input
            className='wk-input-number-input'
            value={value}
            onChange={this.handleChangeValue}
          />
        </div>
      </div>
    )
  }
}

export default IndexNumber
