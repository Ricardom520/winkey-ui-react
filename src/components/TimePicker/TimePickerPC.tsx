import React from 'react'
import moment from 'moment'

import { TimePickerProps } from './index'
import TimePickerBox from './TimePickerBox'
import './index.less'

const whiteList = {
  'wk-timepicker-time-panel-cell-inner': 1,
  'wk-timepicker-ranges': 1,
  'wk-timepicker-now-btn': 1
}

const hourFormatValue = {
  HH: '00',
  H: '0',
  hh: '00',
  h: '0'
}

const minuteFormatValue = {
  mm: '00',
  m: '0'
}

const secondFormatValue = {
  ss: '00',
  s: '0'
}

const suffixClass = {
  1: ' wk-icon-close',
  2: ' wk-icon-time'
}

interface TimePickerPCState {
  focus: boolean
  offsetTop: number
  offsetLeft: number
  width: number
  height: number
  activeItem: number[]
  datas: any[]
  value: string[]
  valueString: string
  browseValue: string
  open: boolean
  isMouseEntry: number
}

const TimePickerPCClass = {
  'small': ' wk-timepicker-small',
  'large': ' wk-timepicker-large',
  'default': '',
  '': ''
}

export default class TimePickerPC extends React.Component<TimePickerProps, TimePickerPCState> {
  private wkTimePicker

  constructor(props) {
    super(props)

    this.state = {
      focus: false,
      offsetTop: 0,
      offsetLeft: 0,
      width: 0,
      height: 0,
      activeItem: [],
      datas: [],
      value: [],
      valueString: '',
      browseValue: '',
      open: false,
      isMouseEntry: 2
    }

    this.wkTimePicker = React.createRef()
  }

  componentDidMount() {
    const { value, defaultValue, format } = this.props

    this.initHour(value || defaultValue)
    this.initMinute(value || defaultValue)
    this.initSecond(value || defaultValue)

    const wkTimePicker: any = this.wkTimePicker.current

    this.setState({
      offsetLeft: wkTimePicker.offsetLeft,
      offsetTop: wkTimePicker.getBoundingClientRect().top + wkTimePicker.clientHeight + 3,
      width: wkTimePicker.clientWidth,
      valueString: value || defaultValue ? moment(value || defaultValue).format(format) : ''
    })
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const { value } = nextProps

    if (value !== undefined) {
      this.setState(
        {
          datas: [],
          value: [],
          activeItem: []
        },
        () => {
          this.initHour(value)
          this.initMinute(value)
          this.initSecond(value)
        }
      )
    }
  }

  UNSAFE_componentWillUpdate(_, nextState) {
    const { open } = nextState

    if (open) {
      document.addEventListener(
        'click',
        (e: any) => {
          if (!whiteList[e.target.className]) {
            this.setState({
              open: false,
              focus: false,
              browseValue: ''
            })
          }
        },
        true
      )
    } else {
      document.removeEventListener('click', () => {}, false)
    }
  }

  initHour = (value) => {
    const hour: any[] = []
    const { format, hourStep } = this.props
    const formats = format.split(':')
    let hourFormat = ''
    let hourValue = ''
    let hourIndex = 0

    formats.forEach((i, n) => {
      if (i === 'HH' || i === 'H' || i === 'hh' || i === 'h') {
        hourFormat = i
        hourIndex = n
      }
    })

    if (!hourFormat) {
      return
    }

    hourValue = value ? moment(value).format(format).split(':')[hourIndex] : ''

    if (hourValue) {
      this.state.value.push(hourValue)
    } else {
      hourValue = ''
      this.state.value.push(hourFormatValue[hourFormat])
    }

    if (hourFormat === 'HH') {
      for (let i = 0; i < 24; i += hourStep) {
        const valueHour = i < 10 ? `0${i}` : `${i}`
        if (valueHour === hourValue) {
          this.state.activeItem.push(i)

          this.setState({
            activeItem: this.state.activeItem
          })
        }

        hour.push(valueHour)
      }
    } else if (hourFormat === 'hh') {
      for (let i = 0; i < 12; i += hourStep) {
        const valueHour = i < 10 ? `0${i}` : `${i}`

        if (valueHour === hourValue) {
          this.state.activeItem.push(i)

          this.setState({
            activeItem: this.state.activeItem
          })
        }

        hour.push(valueHour)
      }
    } else if (hourFormat === 'H') {
      for (let i = 0; i < 24; i += hourStep) {
        if (i === parseInt(hourValue)) {
          this.state.activeItem.push(i)

          this.setState({
            activeItem: this.state.activeItem
          })
        }

        hour.push(i)
      }
    } else {
      for (let i = 0; i < 12; i += hourStep) {
        if (i === parseInt(hourValue)) {
          this.state.activeItem.push(i)

          this.setState({
            activeItem: this.state.activeItem
          })
        }

        hour.push(i)
      }
    }

    if (!hourValue) {
      this.state.activeItem.push(0)
      this.setState({
        activeItem: this.state.activeItem
      })
    }

    this.state.datas.push(hour)

    this.setState({
      datas: this.state.datas,
      value: this.state.value
    })
  }

  initMinute = (value) => {
    const minute: any[] = []
    const { format, minuteStep } = this.props
    const formats = format.split(':')
    let minuteValue = ''
    let minuteFormat = ''
    let minuteIndex = 0

    formats.forEach((i, n) => {
      if (i === 'mm' || i === 'm') {
        minuteFormat = i
        minuteIndex = n
      }
    })

    if (!minuteFormat) {
      return
    }

    minuteValue = value ? moment(value).format(format).split(':')[minuteIndex] : ''

    if (minuteValue) {
      this.state.value.push(minuteValue)
    } else {
      minuteValue = ''
      this.state.value.push(minuteFormatValue[minuteFormat])
    }

    if (minuteFormat === 'mm') {
      for (let i = 0; i < 64; i += minuteStep) {
        const valueMinute = i < 10 ? `0${i}` : `${i}`

        if (valueMinute === minuteValue) {
          this.state.activeItem.push(i)

          this.setState({
            activeItem: this.state.activeItem
          })
        }

        minute.push(valueMinute)
      }
    } else {
      for (let i = 0; i < 64; i += minuteStep) {
        if (i === parseInt(minuteValue)) {
          this.state.activeItem.push(i)

          this.setState({
            activeItem: this.state.activeItem
          })
        }

        minute.push(i)
      }
    }

    if (!minuteValue) {
      this.state.activeItem.push(0)

      this.setState({
        activeItem: this.state.activeItem
      })
    }

    this.state.datas.push(minute)

    this.setState({
      datas: this.state.datas,
      value: this.state.value
    })
  }

  initSecond = (value) => {
    const second: any[] = []
    const { format, secondStep } = this.props
    const formats = format.split(':')
    let secondValue = ''
    let secondFormat = ''
    let secondIndex = 0

    formats.forEach((i, n) => {
      if (i === 'ss' || i === 's') {
        secondFormat = i
        secondIndex = n
      }
    })

    if (!secondFormat) {
      return
    }

    secondValue = value ? moment(value).format(format).split(':')[secondIndex] : ''

    if (secondValue) {
      this.state.value.push(secondValue)
    } else {
      secondValue = ''
      this.state.value.push(secondFormatValue[secondFormat])
    }

    if (secondFormat.includes('ss')) {
      for (let i = 0; i < 64; i += secondStep) {
        const valueScond = i < 10 ? `0${i}` : `${i}`

        if (valueScond === secondValue) {
          this.state.activeItem.push(i)

          this.setState({
            activeItem: this.state.activeItem
          })
        }

        second.push(valueScond)
      }
    } else if (secondFormat.includes('s')) {
      for (let i = 0; i < 64; i += secondStep) {
        if (i === parseInt(secondValue)) {
          this.state.activeItem.push(i)

          this.setState({
            activeItem: this.state.activeItem
          })
        }

        second.push(i)
      }
    } else {
      return
    }

    if (!secondValue) {
      this.state.activeItem.push(0)

      this.setState({
        activeItem: this.state.activeItem
      })
    }

    this.state.datas.push(second)

    this.setState({
      datas: this.state.datas
    })
  }

  handleFocus = () => {
    if (this.props.disabled) {
      return
    }

    this.setState({
      focus: true
    })
  }

  handleBlur = () => {
    this.setState({
      focus: false
    })
  }

  handleOk = (value) => {
    let valueString = ''

    value.forEach((i, n) => {
      if (n === value.length - 1) {
        valueString += i
      } else {
        valueString += `${i}:`
      }
    })

    if (this.props.onChange) {
      this.props.onChange(value, valueString)
    }

    this.setState(
      {
        valueString,
        browseValue: '',
        open: false,
        datas: [],
        activeItem: [],
        value: []
      },
      () => {
        this.initHour(moment(valueString, this.props.format))
        this.initMinute(moment(valueString, this.props.format))
        this.initSecond(moment(valueString, this.props.format))
      }
    )
  }

  handleChange = (value) => {
    let browseValue = ''

    value.forEach((i, n) => {
      if (n === value.length - 1) {
        browseValue += i
      } else {
        browseValue += `${i}:`
      }
    })

    this.setState({
      browseValue,
      value: this.state.value
    })
  }

  handleSuffixEnter = () => {
    if (this.props.disabled) {
      return
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
    const { format, allowClear } = this.props
    const value = []
    const activeItem = []

    if (!allowClear) {
      return
    }

    if (format.includes('HH')) {
      value.push(hourFormatValue['HH'])
      activeItem.push(0)
    } else if (format.includes('H')) {
      value.push(hourFormatValue['H'])
      activeItem.push(0)
    } else if (format.includes('hh')) {
      value.push(hourFormatValue['hh'])
      activeItem.push(0)
    } else if (format.includes('h')) {
      value.push(hourFormatValue['h'])
      activeItem.push(0)
    }

    if (format.includes('mm')) {
      value.push(minuteFormatValue['mm'])
      activeItem.push(0)
    } else if (format.includes('m')) {
      value.push(minuteFormatValue['m'])
      activeItem.push(0)
    }

    if (format.includes('ss')) {
      value.push(secondFormatValue['ss'])
      activeItem.push(0)
    } else if (format.includes('s')) {
      value.push(secondFormatValue['s'])
      activeItem.push(0)
    }

    this.setState({
      valueString: '',
      value,
      activeItem
    })
  }

  render() {
    const {
      focus,
      width,
      height,
      offsetLeft,
      offsetTop,
      activeItem,
      datas,
      value,
      valueString,
      browseValue,
      open,
      isMouseEntry
    } = this.state
    const {
      placeholder,
      format,
      size,
      disabled,
      bordered,
      className,
      allowClear,
      showNow,
      showSuffixIcon,
      showFooter,
      isColChoose
    } = this.props

    return (
      <>
        <div
          ref={this.wkTimePicker}
          className={
            'wk-timepicker' +
            (focus ? ' wk-timepicker-focused' : '') +
            TimePickerPCClass[size] +
            (disabled ? ' wk-timepicker-disabled' : ' wk-timepicker-abled') +
            (!bordered ? ' wk-timepicker-borderless' : '') +
            (className ? ` ${className}` : '')
          }
          onMouseEnter={this.handleSuffixEnter}
          onMouseLeave={this.handleSuffixLeave}
        >
          <div className='wk-timepicker-input'>
            {!valueString && !browseValue && (
              <span className='wk-timepicker-placeholder'>{placeholder}</span>
            )}
            {(browseValue || valueString) && (
              <span className='wk-timepicker-value'>{browseValue || valueString}</span>
            )}
            <input
              onClick={this.handleClick}
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
              placeholder={placeholder}
              value={valueString}
            />
          </div>
          <span className='wk-timepicker-suffix' onClick={this.handleClear}>
            {allowClear && showSuffixIcon && (
              <i
                className={
                  'iconfont' +
                  (valueString.length > 0 ? suffixClass[isMouseEntry] : ' wk-icon-time')
                }
              />
            )}
            {!allowClear && showSuffixIcon && <i className='iconfont wk-icon-time' />}
            {!showSuffixIcon && allowClear && valueString.length > 0 && isMouseEntry === 1 && (
              <i className='iconfont wk-icon-close' />
            )}
          </span>
        </div>
        <TimePickerBox
          width={width}
          height={height}
          top={offsetTop}
          left={offsetLeft}
          datas={datas}
          activeIndex={activeItem}
          activeValue={value}
          open={open}
          onChange={this.handleChange}
          onOk={this.handleOk}
          format={format}
          showNow={showNow}
          showFooter={showFooter}
          isColChoose={isColChoose}
        />
      </>
    )
  }

  handleClick = () => {
    const { disabled } = this.props

    if (disabled) {
      return
    }

    const wkTimePicker: any = this.wkTimePicker.current

    this.setState({
      offsetLeft: wkTimePicker.offsetLeft,
      offsetTop: wkTimePicker.getBoundingClientRect().top + wkTimePicker.clientHeight + 3,
      width: wkTimePicker.clientWidth,
      height: wkTimePicker.clientHeight,
      open: true
    })
  }
}
