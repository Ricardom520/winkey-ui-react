import React, { Component } from 'react';

import { TextareaProps } from './index';
import './index.less';

interface TextareaState {
  value: string;
  focus: boolean;
}

class Textarea extends Component<TextareaProps, TextareaState> {
  static winkeyName = 'textarea'
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      focus: false
    }
  }

  initTextarea = () => {
    const { className, isMobile, resize, style, placeholder, defaultValue, maxLength, disabled } = this.props;
    const { value } = this.state;

    return <textarea 
      disabled={disabled}
      className={
        "wk-input" +
        (isMobile ? " wk-input-mobile" : "") + 
        (className ? ` ${className}` : "")
      }
      placeholder={placeholder} 
      style={{resize, ...style}}
      onChange={this._onChange}
      defaultValue={defaultValue}
      value={value}
      maxLength={maxLength}
      onFocus={this.handleFocus}
      onBlur={this.handleBlur}
    />
  }

  _onChange = (e) => {
    if (this.props.onChange) {
      this.props.onChange(e)
    }
    
    this.setState({
      value: e.target.value
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

  handleBlur = (e) => {
    if (this.props.onBlur) {
      this.props.onBlur(e)
    }

    this.setState({
      focus: false
    })
  }

  handleClear = () => {
    this.setState({
      value: ''
    })
  }

  render() {
    const { showCount, maxLength, allowClear } = this.props;
    const { value, focus } = this.state;

    return (
      <>
        {
          showCount && 
          <div className="wk-input-textare wk-input-textarea-show-count" data-count={`${value.length}/${maxLength}`}>
            {this.initTextarea()}
          </div>
        }
        {
          allowClear &&
          <span 
            className=
              {
                "wk-input-affix-wrapper wk-input-affix-wrapper-textarea-with-clear-btn" +
                (focus ? " wk-input-affix-wrapper-textarea-focus" : "")
              }
          >
            {this.initTextarea()}
            {
              value.length > 0 &&
              <span className="wk-input-textarea-delete-icon" onClick={this.handleClear}>
                <i className="iconfont wk-icon-delete" style={{color: '#BFBFBF', fontSize: '12px', cursor: 'pointer'}}/>
              </span>
            }
          </span>
        }
        {
          !showCount && !allowClear && this.initTextarea()
        }
      </>
    )
  }
}

export default Textarea;