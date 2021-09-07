import React, { Component, ReactNode } from 'react';

import Textarea from './Textarea';
import Password from './Password';
import "./index.less";

export interface InputProps {
  placeholder?: string;
  isMobile?: boolean;
  readOnly?: boolean;
  value?: string;
  onClick?: (event) => void;
  size?: "large" | "small",
  textAlign?: "left" | "center" | "right";
  onChange?: (event) => void;
  className?: string;
  suffix?: string;
  addonBefore?: string;
  defaultValue?: string;
  style?: React.CSSProperties;
  prefix?: ReactNode;
  onFocus?: (event) => void;
  onBlur?: (event) => void;
  addonAfter?: string;
  type?: "password" | "text";
  maxLength?: number;
  disabled?: boolean;
  allowClear?: boolean;
  bordered?: boolean;
  onPressEnter?: () => void;
}

export interface TextareaProps extends InputProps {
  placeholder?: string;
  resize?: "none" | "vertical" ;
  showCount?: boolean;
}

export interface InputState {
  value: string;
}

interface IndexState {
  focus: boolean;
  indexValue: string;
}

export const inputPreClass = {
  large: " wk-input-affix-wrapper-lg",
  small: " wk-input-affix-wrapper-sm",
  "": ""
}

const InputClass = {
  large: " wk-input-lg",
  small: " wk-input-sm",
  left: " wk-input-left",
  center: " wk-input-center",
  right: " wk-input-right",
  default: "",
  "": ""
}

export default class Input extends Component<InputProps, IndexState> {
  static TextArea = Textarea
  static Password = Password
  static winkeyName = 'input'
  input: HTMLInputElement;

  static defaultProps = {
    placeholder: "input text",
    prefix: '',
    size: "",
    textAlign: "",
    bordered: true
  }

  constructor(props) {
    super(props);

    this.state = {
      focus: false,
      indexValue: '',
    }
  }

  initInput = () => {
    const { disabled, maxLength, type, readOnly, isMobile, className, bordered, placeholder, defaultValue, value, style, size, textAlign  } = this.props;

    return (
      <input
        ref={input=>this.input = input}
        disabled={disabled}
        maxLength={maxLength}
        type={type}
        readOnly={readOnly}
        className={
          "wk-input" +
          (isMobile ? " wk-input-mobile" : "") + 
          InputClass[size] + 
          InputClass[textAlign] +
          (className ? ` ${className}` : "") +
          (!bordered ? ' wk-input-borderless' : "")
        } 
        placeholder={placeholder} 
        defaultValue={defaultValue}
        value={value}
        onClick={this.onClick}
        onChange={this.onChange}
        style={style}
        onBlur={this.onBlur}
        onFocus={this.onFocus}
      />
    )
  }

  onClick = (e) => {
    if (this.props.onClick) {
      this.props.onClick(e)
    }
  }

  onChange = (e) => {
    if (this.props.onChange) {
      this.props.onChange(e)
    }

    this.setState({
      indexValue: e.target.value
    })
  }

  onFocus = (e) => {
    const { addonBefore, suffix, prefix, addonAfter, allowClear, onFocus } = this.props;
    
    if (onFocus) {
      onFocus(e)
    }

    this.setState({
      focus: true
    })

    if (!addonBefore && !suffix && !prefix && !addonAfter && !allowClear) {
      const input: any = this.input;
      input.focus();
    }
  }

  onBlur = (e) => {
    if (this.props.onBlur) {
      this.props.onBlur(e)
    }

    this.setState({
      focus: false
    })
  }

  handleClear = () => {
    this.setState({
      indexValue: ''
    })
  }

  render() {
    const {  disabled, isMobile,  size,  addonBefore, suffix, prefix, addonAfter, allowClear } = this.props;
    const { focus, indexValue } = this.state;

    return (
      <>
        {
          (!addonBefore && !suffix && !prefix && !addonAfter && !allowClear) && 
          this.initInput()
        }
        {
          (addonAfter || addonBefore) &&
          <span className={
            "wk-input-group-wrapper" + 
            (isMobile ? " wk-input-group-wrapper-ismobile" : "") +
            (disabled ? " wk-input-affix-wrapper-disabled" : "")
            }>
            <span className="wk-input-wrapper wk-input-group">
              {addonBefore && <span className="wk-input-group-addon">{addonBefore}</span>}
              <span className="wk-input-affix-wrapper">
                {this.initInput()}
                <span className="wk-input-suffix">{suffix}</span>
              </span>
            </span>
          </span>
        }
        {
          (!addonBefore && !addonAfter && (prefix || suffix || allowClear)) &&
          <span className={
            "wk-input-affix-wrapper" +
            inputPreClass[size] +
            (focus ? " wk-input-affix-wrapper-focus" : "") +
            (disabled ? " wk-input-affix-wrapper-disabled" : "")
          }>
            <span className="wk-input-prefix">
              {
                typeof prefix === 'string' && 
                prefix.includes('wk') ? 
                <i className={`iconfont ${prefix} wk-input-prefix-icon`} /> :
                prefix
              }
              {typeof prefix !== 'string' && prefix}
              {this.initInput()}
              {
                suffix && 
                suffix.includes('wk') ?
                <i className={`iconfont ${suffix}`} /> :
                <span className="wk-input-suffix">{suffix}</span>
              }
              {
                allowClear && indexValue.length > 0 && 
                <span className="wk-input-suffix" onClick={this.handleClear}>
                  <i className="iconfont wk-icon-delete" style={{color: '#BFBFBF', fontSize: '12px', cursor: 'pointer'}}/>
                </span>
              }
            </span>
          </span>
        }
      </>
    )
  }
}