import React, { ReactNode } from 'react';

import Input from './Input';
import { inputPreClass } from './index';

interface PasswordProps {
  placeholder?: string;
  iconRender?: (visible) => ReactNode;
  defaultValue?: string;
  value?: string;
  onChange?: (event) => void;
  onBlur?: (event) => void;
  onFocus?: (event) => void;
  size?: "small" | "large";
  style?: React.CSSProperties;
  className?: string;
  maxLength?: number;
  disabled?: boolean;
}

interface PasswordState {
  visible: boolean;
  focus: boolean;
  type: "text" | "password";
}

export default class Password extends React.Component<PasswordProps, PasswordState> {
  static defaultProps = {
    placeholder: "Input your password",
    size: ""
  }

  constructor(props) {
    super(props)

    this.state = {
      visible: false,
      focus: false,
      type: "password"
    }
  }

  handleBlur = (e) => {
    if (this.props.onBlur) {
      this.props.onBlur(e)
    }

    this.setState({
      focus: false
    })
  }

  handleFocus = (e) => {
    if (this.props.onFocus) {
      this.props.onFocus(e)
    }

    this.setState({
      focus: true
    })
  }

  render() {
    const { placeholder, defaultValue, value, onChange, size, style, className, iconRender, maxLength, disabled } = this.props;
    const { visible, focus, type } = this.state;

    return (
      <span 
        style={style}
        className={
          "wk-input-affix-wrapper" +
          inputPreClass[size] +
          (focus ? " wk-input-affix-wrapper-focus" : "")
        }
      >
        <Input
          disabled={disabled}
          placeholder={placeholder}
          type={type}
          defaultValue={defaultValue}
          value={value}
          onChange={onChange}
          onBlur={this.handleBlur}
          onFocus={this.handleFocus}
          className={className}
          maxLength={maxLength}
        />
        <span className="wk-input-suffix" style={{cursor: 'pointer'}} onClick={() => {
          this.setState({
            visible: !this.state.visible,
            type: type === 'password' ? 'text' : 'password'
          })
        }}>
          {
            !iconRender && <i className={`iconfont ${visible ? "wk-icon-open-eyes" : "wk-icon-close-eyes"}`} />
          }
          {
            iconRender && iconRender(visible)
          }
        </span>
      </span>
    )
  }
}