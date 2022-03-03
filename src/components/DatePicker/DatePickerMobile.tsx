import React from 'react'
import moment from 'moment'

import { DatePickerProps } from './index'
import { PlaceholderNormal, MonthDays, PickerFormatNormal } from './datas'
import PickerView from '../PickerView'
import Input from '../Input'
import Mask from '../Mask'

interface DatePickerMobileState {
  datas: any[]
  visible: boolean
  value: any[]
  activeValue: string
}

export default class TimePickerMobile extends React.Component<
  DatePickerProps,
  DatePickerMobileState
> {
  constructor(props) {
    super(props)

    this.state = {
      datas: [],
      visible: false,
      value: [],
      activeValue: ''
    }
  }

  componentDidMount() {
    const { value, defaultValue, picker, format, showTime } = this.props

    if (value || defaultValue) {
      const date = moment(value || defaultValue).format(
        PickerFormatNormal[showTime ? 'showTime' : picker]
      )

      let dateArrs

      if (!showTime) {
        dateArrs = date.split('-')
      } else {
        dateArrs = [...date.split(' ')[0].split('-'), ...date.split(' ')[1].split(':')]
      }

      this.initValueString(dateArrs)

      this.setState({
        value: dateArrs
      })
    } else {
      const date = new Date()
      const monthFormat =
        (format || PickerFormatNormal[showTime ? 'showTime' : picker]).split('-')[1] || ''
      const dayFormat =
        (format || PickerFormatNormal[showTime ? 'showTime' : picker]).split('-')[2] || ''
      const year = date.getFullYear()
      let month: number | string = date.getMonth() + 1
      let day: number | string = date.getDay()
      let hour: number | string = date.getHours()
      let minute: number | string = date.getMinutes()

      if (monthFormat === 'MM') {
        month = month < 10 ? `0${month}` : `${month}`
      } else {
        month = `${month}`
      }

      if (dayFormat === 'DD') {
        day = day < 10 ? `0${day}` : `${day}`
      } else {
        day = `${day}`
      }

      if (showTime) {
        if ((format || PickerFormatNormal['showTime']).indexOf('HH') > -1) {
          hour = hour < 10 ? `0${hour}` : `${hour}`
        } else {
          hour = `${hour}`
        }

        if ((format || PickerFormatNormal['showTime']).indexOf('mm') > -1) {
          minute = minute < 10 ? `0${minute}` : `${minute}`
        } else {
          minute = `${minute}`
        }
      }

      this.setState({
        value: showTime ? [`${year}`, month, day, hour, minute] : [`${year}`, month, day]
      })
    }

    this.years()
  }

  years = () => {
    const { picker } = this.props
    const date = new Date()
    const activeYear = date.getFullYear()
    const startYear = activeYear - 10
    const endYear = activeYear + 10
    const options = []

    let activeIndex = 0

    for (let i = startYear; i < endYear; i++) {
      options.push({
        label: `${i}年`,
        value: `${i}`
      })

      if (picker === 'month' || picker === 'date') {
        options[activeIndex].children = this.initMonths(i)
      }

      activeIndex++
    }

    this.setState({
      datas: options
    })
  }

  initMonths = (year) => {
    const { picker, format } = this.props
    const options = []
    const monthFormat = (format || PickerFormatNormal[picker]).split('-')[1]

    for (let i = 1; i < 13; i++) {
      options.push({
        label: `${i}月`,
        value: monthFormat === 'MM' ? (i < 10 ? `0${i}` : `${i}`) : `${i}`
      })

      if (picker === 'date') {
        options[i - 1].children = this.initDate(i, year)
      }
    }

    return options
  }

  initDate = (month, year) => {
    const { format, picker, showTime } = this.props
    const options = []
    const monthDays = year % 4 === 0 && month === 2 ? 29 : MonthDays[month]
    const dateFormat = (format || PickerFormatNormal[picker]).split('-')[2]
    let hours

    if (showTime) {
      hours = this.initHour()
    }

    for (let i = 1; i <= monthDays; i++) {
      options.push({
        label: `${i}日`,
        value: dateFormat === 'DD' ? (i < 10 ? `0${i}` : `${i}`) : `${i}`
      })

      if (showTime) {
        options[i - 1].children = hours
      }
    }

    return options
  }

  initHour = () => {
    const { format, showTime, picker } = this.props
    const options = []
    const isHH = (format || PickerFormatNormal[picker]).indexOf('HH') > -1

    for (let i = 0; i < 24; i++) {
      options.push({
        label: `${i}时`,
        value: isHH ? `0${i}` : `${i}`
      })

      if (showTime) {
        options[i].children = this.initMinute()
      }
    }

    return options
  }

  initMinute = () => {
    const { format, picker } = this.props
    const options = []
    const isMM = (format || PickerFormatNormal[picker]).indexOf('mm') > -1

    for (let i = 0; i < 60; i++) {
      options.push({
        label: `${i}分`,
        value: isMM ? `0${i}` : `${i}`
      })
    }

    return options
  }

  initValueString = (date) => {
    const { format, picker, showTime } = this.props
    let valueString = ''
    let format_real = format || PickerFormatNormal[showTime ? 'showTime' : picker]

    if (showTime) {
      const len = format_real.split(' ')[0].split('-').length

      for (let i = 0; i < len; i++) {
        if (i === len - 1) {
          valueString += date[i]
        } else {
          valueString += `${date[i]}-`
        }
      }

      valueString += ` ${date[len]}:${date[len + 1]}`
    } else {
      date.map((i, n) => {
        if (n === date.length - 1) {
          valueString += i
        } else {
          valueString += `${i}-`
        }
      })
    }

    valueString = moment(valueString, format_real).format(format_real)

    this.setState({
      activeValue: valueString
    })

    if (this.props.onOk) {
      this.props.onOk(moment(valueString, format_real), valueString)
    }
  }

  handleChange = (val, label) => {
    this.setState({
      value: val
    })
  }

  onOk = () => {
    const { value } = this.state

    this.initValueString(value)

    this.setState({
      visible: false
    })
  }

  onCancel = () => {
    this.setState({
      visible: false
    })
  }

  render() {
    const { datas, visible, value, activeValue } = this.state
    const { placeholder, dismissText, title, okText, picker, className, pickerClassName } =
      this.props

    return (
      <>
        <Input
          placeholder={placeholder || PlaceholderNormal[picker]}
          value={activeValue}
          size='small'
          textAlign='right'
          readOnly
          isMobile
          className={className}
          onClick={() => {
            this.setState({
              visible: true
            })
          }}
        />
        <Mask visible={visible} kind='picker'>
          <div className={'wk-picker-container' + (pickerClassName ? ` ${pickerClassName}` : '')}>
            <div className='wk-picker-header'>
              <div
                className='wk-picker-header-item wk-picker-header-item-left'
                onClick={this.onCancel}
              >
                {dismissText}
              </div>
              <div className='wk-picker-header-item wk-picker-header-item-title'>{title}</div>
              <div
                className='wk-picker-header-item wk-picker-header-item-right'
                onClick={this.onOk}
              >
                {okText}
              </div>
            </div>
            <PickerView data={datas} value={value} onChange={this.handleChange} />
          </div>
        </Mask>
      </>
    )
  }
}
