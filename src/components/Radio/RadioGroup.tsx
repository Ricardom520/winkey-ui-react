import React, { Component } from 'react';

import { RadioGroupProps, RadioGroupOptions } from './index';
import Radio from './index';
import Button from './RadioBtn';
import "./index.less";

interface RadioGroupState {
  value: string | number;
}

const RadioGroupClass = {
  row: " wk-radio-group-row",
  col: " wk-radio-group-col",
  solid: " wk-radio-group-solid",
  outline: "",
  small: " wk-radio-group-small",
  large: " wk-radio-group-large",
  "": ""
}

export default class RadioGroup extends Component<RadioGroupProps, RadioGroupState> {
  static defaultProps = {
    buttonStyle: "",
    size: ""
  }

  constructor(props) {
    super(props);

    this.state = {
      value: undefined
    }
  }

  componentDidMount() {
    const { value, defaultValue } = this.props;

    this.setState({
      value: value || defaultValue
    })
  }

  UNSAFE_componentWillReceiveProps(next) {
    const { value } = next;

    if (value !== undefined) {
      this.setState({
        value
      })
    }
  }
  
  initRadios = (datas) => {
    const { optionType } = this.props;
    const { value } = this.state;

    if (typeof datas[0] === 'string') {
      return datas.map((i: string, n) => {
        if (optionType === 'button') {
          return <Button
            key={`${i}-${n}`} 
            checked={i === value}
            value={i}
            onChange={(e)=>this.handleChange(e, i)} 
          >
            {i}
          </Button>
        } else {
          return <Radio 
              key={`${i}-${n}`} 
              onChange={(e)=>this.handleChange(e, i)} 
              defaultChecked={i === value} 
              checked={i === value}
              value={i}
            >
              {i}
            </Radio>
        }
      })
    } else {
      return datas.map((i: RadioGroupOptions) => {
        if (optionType === 'button') {
          return <Button
            key={`${i.label}-${i.value}`} 
            checked={i.value === value}
            value={i.value}
            onChange={(e)=>this.handleChange(e, i.value)} 
            disabled={i.disabled}
          >
            {i.label}
          </Button>
        } else {
          return <Radio 
            key={`${i.label}-${i.value}`} 
            onChange={(e)=>this.handleChange(e, i.value)} 
            defaultChecked={i.value === value} 
            checked={i.value === value}
            value={i.value}
            disabled={i.disabled}
          >
            {i.label}
          </Radio>
        }
      })
    }
  }

  handleChange = (e, value) => {
    if (e.target.checked) {
      this.setState({
        value: value
      })
    }

    if (this.props.onChange) {
      this.props.onChange(e)
    }
  }

  render() {
    const { options, direction = "row", name, className, buttonStyle, style, disabled, size } = this.props;
    const { value } = this.state;

    return (
      <div 
        style={style}  
        className={
          "wk-radio-group" +
          RadioGroupClass[direction] + 
          (className ? ` ${className}` : "") +
          RadioGroupClass[buttonStyle] +
          RadioGroupClass[size]
        }
      >
        {
          this.props.children && React.Children.map(this.props.children, (child: any) => {
            return React.cloneElement(child, {
              value: child.props.value,
              checked: child.props.value === value,
              onChange: !child.props.disabled && ((e) => this.handleChange(e, child.props.value)),
              disabled: disabled,
              name: name
            })
          })
        }
        {
          options && this.initRadios(options)
        }
      </div>
    )
  }
}