import React, { Component } from 'react';
import { ReactNode } from 'react';

import CheckboxGroup from './CheckboxGroup';
import './index.less';

interface CheckboxGroupChidlren extends CheckboxGroupProps {
  props: any;
  type: React.ComponentClass
}

export interface CheckboxGroupOptions {
  label: string;
  value: string | number;
}

export interface CheckboxGroupProps {
  children?: CheckboxGroupChidlren[];
  disabled?: boolean;
  options?: string[] | CheckboxGroupOptions[];
  direction?: "row" | "col";
  defaultValue?: string[] | number[] | any[];
  value?: string[] | number[] | any[];
  onChange?: (value) => void;
}

interface CheckboxProps {
  children?: ReactNode;
  disabled?: boolean;
  onChange?: (val) => void;
  value?: string | number | boolean;
  checked?: boolean;
  defaultChecked?: boolean;
}

interface CheckboxState {
  checked: boolean
}

class Checkbox extends Component<CheckboxProps, CheckboxState> {
  static Group = CheckboxGroup
  
  constructor(props) {
    super(props)
    
    this.state = {
      checked: false
    }
  }

  componentDidMount() {
    const { defaultChecked, checked } = this.props;

    this.setState({
      checked: checked || defaultChecked
    })
  }

  UNSAFE_componentWillReceiveProps(next) {
    const { checked, disabled } = next;
    
    if (!disabled && checked !== undefined) {
      this.setState({
        checked: checked
      })
    }
  }

  handleChange = (e) => {
    const { onChange, disabled } = this.props;
    if (!disabled) {
      if (onChange) {
        this.props.onChange(e)
      }
     
      this.setState({
        checked: !this.state.checked
      })
    }
  }

  render() {
    const { children, disabled } = this.props;
    const { checked } = this.state;
    
    return (
      <label 
        className={
          "wk-checkbox-wrapper" +
          (disabled ? " wk-ckeckbox-wrapper-disabled" : "")
        }
      >
        <span className={
          "wk-checkbox" + 
          (checked ? " wk-checkbox-checked" : "") +
          (disabled ? " wk-checkbox-disabled" : "")
        }>
          <input className="wk-checkbox-input" type="checkbox" onChange={this.handleChange} checked={checked} />
          <span className="wk-checkbox-inner"></span>
        </span>
        <span className="wk-checkbox-label">{children}</span>
      </label>
    )
  }
}

export default Checkbox