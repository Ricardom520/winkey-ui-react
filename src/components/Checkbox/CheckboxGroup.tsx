import React, { Component } from 'react'

import Checkbox, { CheckboxGroupProps, CheckboxGroupOptions } from './index'

const CheckboxGroupClass = {
  'row': ' wk-checkbox-group-row',
  'col': ' wk-checkbox-group-col',
  '': ''
}

interface CheckboxGroupState {
  value: any[]
}

export default class CheckboxGroup extends Component<CheckboxGroupProps, CheckboxGroupState> {
  static winkeyName = 'checkGroup'
  static defaultProps = {
    defaultValue: []
  }

  constructor(props) {
    super(props)

    this.state = {
      value: []
    }
  }

  componentDidMount() {
    const { value, defaultValue } = this.props

    this.setState({
      value: value || defaultValue
    })
  }

  initCheckbox = (datas, defaultValue) => {
    if (typeof datas[0] === 'string') {
      return datas.map((i: string, n: number) => {
        return (
          <Checkbox
            key={`${i}`}
            onChange={(e) => {
              this.handleChange(e.target.checked, n)
            }}
            value={i}
            defaultChecked={defaultValue.includes(i)}
          >
            {i}
          </Checkbox>
        )
      })
    } else {
      return datas.map((i: CheckboxGroupOptions) => {
        return (
          <Checkbox
            key={`${i.label}-${i.value}`}
            onChange={(e) => {
              this.handleChange(e.target.checked, i.value)
            }}
            value={i.value}
            defaultChecked={defaultValue.includes(i.value)}
          >
            {i.label}
          </Checkbox>
        )
      })
    }
  }

  handleChange = (checked, value) => {
    if (checked) {
      this.setState({
        value: [...this.state.value, value]
      })

      if (this.props.onChange) {
        this.props.onChange([...this.state.value, value])
      }
    } else {
      const arrs = this.state.value.filter((i) => {
        if (i !== value) {
          return i
        }
      })

      this.setState({
        value: arrs
      })

      if (this.props.onChange) {
        this.props.onChange(arrs)
      }
    }
  }

  render() {
    const { options, direction = 'col', value, children, defaultValue } = this.props

    return (
      <div className={'wk-checkbox-group' + CheckboxGroupClass[direction]}>
        {children &&
          React.Children.map(children, (child: any) => {
            return React.cloneElement(child, {
              value: child.props.value,
              defaultChecked: (value || defaultValue).includes(child.props.value),
              onChange: (e) => {
                this.handleChange(e.target.checked, child.props.value)
              }
            })
          })}
        {options && this.initCheckbox(options, defaultValue)}
      </div>
    )
  }
}
