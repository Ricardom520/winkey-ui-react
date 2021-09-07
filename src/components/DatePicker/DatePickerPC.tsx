import React from 'react';
import moment from 'moment';

import { DatePickerProps } from './index';
import { PickerFormatNormal, PlaceholderNormal } from './datas';
import DatePickerBox from './DatePickerBox';
import "./index.less";

interface DatePickerPCState {
  isMouseEntry: number,
  valueString: string;
  open: boolean;
  offsetTop: number;
  offsetLeft: number;
  width: number;
  focus: boolean;
}

const DatePickerPCClass = {
  small: " wk-datepicker-small",
  large: " wk-datepicker-large",
  default: " ",
  "": ""
}

const suffixClass = {
  1: " wk-icon-close",
  2: " wk-icon-date"
}

const wkDatePicker = {
  "wk-datepicker-cell-inner": 1,
  "wk-datepicker-cell wk-datepicker-cell-in-view": 1,
  "wk-datepicker-decade-btn": 1,
  "wk-datepicker-year-btn": 1,
  "wk-datepicker-month-btn": 1,
  "wk-datepicker-date-btn": 1,
  "iconfont wk-icon-dbarrow-right": 1,
  "iconfont wk-icon-dbarrow-left": 1,
  "iconfont wk-icon-arrow-right": 1,
  "iconfont wk-icon-arrow-left": 1,
  "wk-datepicker-today-btn": 1,
  "wk-datepicker-footer": 1,
  "wk-datepicker-th": 1,
  "wk-datepicker-header-view": 1,
  "wk-datepicker-panel": 1,
  "wk-datepicker-bodyer": 1,
  "wk-datepicker-cell": 1,
  "wk-datepicker-header": 1,
  "wk-datepicker-header-super-prev-btn": 1
}

export default class DatePickerPC extends React.Component<DatePickerProps, DatePickerPCState> {
  private wkDatePicker
  
  constructor(props) {
    super(props);

    this.state = {
      isMouseEntry: 2,
      valueString: '',
      open: false,
      offsetLeft: -999,
      offsetTop: -999,
      width: 0,
      focus: false
    }

    this.wkDatePicker = React.createRef();
  }

  componentDidMount() {
    const { value, defaultValue, format, picker } = this.props;

    if (value || defaultValue) {
      this.setState({
        valueString: moment(value || defaultValue).format(format || PickerFormatNormal[picker])
      })
    }
  }

  UNSAFE_componentWillUpdate(_, nextState) {
    const { open } = nextState;

    if (open) {
      document.addEventListener('click', (e: any) => {
        if (!wkDatePicker[e.target.className]) {
          this.setState({
            open: false,
            focus: false,
          })
        }
      }, true)
    } else {
      document.removeEventListener('click', () => {

      }, false)
    }
  }

  handleSuffixEnter = () => {
    if (this.props.disabled) {
      return;
    }

    this.setState({
      isMouseEntry: 1
    })
  }

  handleSuffixLeave = () => {
    this.setState({
      isMouseEntry: 2
    })
  }

  handleClear = () => {
    const { allowClear } = this.props;

    if (!allowClear) {
      return;
    }

    this.setState({
      valueString: '',
    })
  }

  handleClick = () => {
    const { disabled } = this.props;

    if (disabled) {
      return;
    }

    const wkDatePicker: any = this.wkDatePicker.current;
    
    this.setState({
      offsetLeft: wkDatePicker.offsetLeft,
      offsetTop: wkDatePicker.getBoundingClientRect().top + wkDatePicker.clientHeight + 3,
      width: wkDatePicker.clientWidth,
      open: true
    })
  }

  handleFocus = () => {
    if (this.props.disabled) {
      return;
    }

    this.setState({
      focus: true
    })
  }

  handleBlur = () => {
    this.setState({
      focus: false,
    })
  }


  handleChange = (value) => {
    const { format, onChange, picker } = this.props;
    let valueString = "";

    value.map((i, n) => {
      if (n === value.length - 1) {
        valueString += i
      } else {
        valueString += `${i}-`
      }
    })

    const date =  moment(valueString, (format || PickerFormatNormal[picker]));

    this.setState({
      valueString: date.format((format || PickerFormatNormal[picker])),
      open: false
    })

    if (onChange) {
      this.props.onChange(date,  date.format((format || PickerFormatNormal[picker])))
    }
  }

  render() {
    const { size, disabled, className, bordered, placeholder, allowClear, showSuffixIcon, picker, disabledDate, format } = this.props;
    const { isMouseEntry, valueString, open, offsetLeft, offsetTop, focus } = this.state;

    return (
      <>
        <div 
          ref={this.wkDatePicker}
          className={
            "wk-datepicker" +
            (focus ? " wk-datepicker-focused" : "") +
            DatePickerPCClass[size] + 
            (disabled ? " wk-datepicker-disabled" : " wk-datepicker-abled") +
            (!bordered ? " wk-datepicker-borderless": "") + 
            (className? ` ${className}` : "")
          }
          onMouseEnter={this.handleSuffixEnter} 
          onMouseLeave={this.handleSuffixLeave}
        >
          <div className="wk-datepicker-input">
            {
              !valueString &&
              <span 
                className="wk-datepicker-placeholder"
              >
                {placeholder || PlaceholderNormal[picker]}
              </span>
            }
            {
              valueString &&
              <span className="wk-datepicker-value">
                {valueString}
              </span>
            }
            <input 
              readOnly
              onClick={this.handleClick}
              onFocus={this.handleFocus} 
              onBlur={this.handleBlur}
              placeholder={placeholder}
              value={valueString}
            />
          </div>
          <span className="wk-datepicker-suffix" onClick={this.handleClear} >
            {
              allowClear && showSuffixIcon &&
              <i className={
                "iconfont" +
                (valueString.length > 0 ? suffixClass[isMouseEntry] : " wk-icon-date")
              }/>
            }
            {
              !allowClear && showSuffixIcon &&
              <i className="iconfont wk-icon-date"/>
            }
            {
              !showSuffixIcon && allowClear && valueString.length > 0 && isMouseEntry === 1 &&  <i className="iconfont wk-icon-close"/>
            }
          </span>
        </div>
        <DatePickerBox 
          value={valueString} 
          defaultValue={valueString}
          picker={picker}
          onChange={this.handleChange}
          open={open}
          top={offsetTop}
          left={offsetLeft}
          disabledDate={disabledDate}
        />
      </>
    )
  }
}