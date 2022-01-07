import React, { Component } from 'react';
import { ReactNode } from 'react';

import RadioGroup from "./RadioGroup";
import RadioBtn from './RadioBtn';
import "./index.less";

interface RadioGroupChidlren extends RadioGroupProps {
  props: any;
  type: React.ComponentClass
}

export interface RadioGroupOptions {
  label: string;
  value: string | number;
  disabled?: boolean;
}

interface Target extends EventTarget {
  value: string
}

export interface RadioGroupProps {
  children?: RadioGroupChidlren[] | RadioGroupChidlren;
  options?: RadioGroupOptions[] | string[];
  direction?: "row" | "col";
  value?: string | number;
  onChange?: (value, target: Target) => void;
  className?: React.CSSProperties;
  optionType?: "button";
  buttonStyle?: "outline" | "solid";
  defaultValue?: string | number;
  style?: React.CSSProperties;
  disabled?: boolean;
  name?: string;
  size?: "large" | "small"
}

interface RadioProps {
  children?: ReactNode;
  disabled?: boolean;
  value?: string | number;
  checked?: boolean;
  onChange?: (value) => void;
  defaultChecked?: boolean;
  style?: React.CSSProperties;
  name?: string;
}

interface RadioState {
  checked: boolean
}

class Radio extends Component<RadioProps, RadioState> {
  static winkeyName = 'radio'
  static Group = RadioGroup
  static Button = RadioBtn

  static defaultProps = {
    name: '',
    value: '',
  }

  constructor(props) {
    super(props)

    this.state = {
      checked: false
    }
  }

  componentDidMount() {
    const { checked, defaultChecked } = this.props;
    
    if (checked !== undefined && defaultChecked !== undefined) {
      this.setState({
        checked: checked || defaultChecked
      })
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.checked !== undefined) {
      this.setState({
        checked: nextProps.checked
      })
    }
  }

  handleChange = (e) => {
    const { onChange, disabled } = this.props;

    if (!disabled) {
      if (onChange) {
        onChange(e)
      }
  
      this.setState({
        checked: e.target.checked
      })
    }
  }

  render() {
    const { children, disabled, value, name } = this.props;
    const { checked } = this.state;

    return (
      <label 
        htmlFor={name || ''}
        className={
          "wk-radio-wrapper" + 
          (disabled ? " wk-radio-wrapper-disabled" : "")
        }
      >
        <span className={
          "wk-radio" +
          (checked ? " wk-radio-checked" : "") +
          (disabled ? " wk-radio-disabled" : "")
        }>
          <input className="wk-radio-input" type="radio" onChange={this.handleChange} value={value} checked={checked} name={name} />
          <span className="wk-radio-inner"/>
        </span>
        <span className="wk-radio-label">{children}</span>
      </label>
    )
  }
}

export default Radio