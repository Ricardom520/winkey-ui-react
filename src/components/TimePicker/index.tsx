import { Moment } from 'moment'
import React from 'react'

import TimePickerPC from './TimePickerPC'
import TimePickerMobile from './TimePickerMobile'

export interface TimePickerProps {
  isMobile?: boolean
  onChange?: (time, timeString) => void
  placeholder?: string
  disabled?: boolean
  defaultValue?: Moment
  value?: Moment
  format?: string
  size?: 'small' | 'large'
  bordered?: boolean
  dismissText?: string
  title?: string
  okText?: string
  onOk?: (val) => void
  className?: string
  allowClear?: boolean
  hourStep?: number
  minuteStep?: number
  secondStep?: number
  showNow?: boolean
  showSuffixIcon?: boolean
  showFooter?: boolean
  isColChoose?: boolean
}

export default class TimePicker extends React.Component<TimePickerProps> {
  static winkeyName = 'timepicker'
  static defaultProps = {
    placeholder: '请选择时间',
    format: 'HH:mm:ss',
    size: '',
    bordered: true,
    dismissText: '取消',
    okText: '确定',
    title: '选择时间',
    allowClear: true,
    hourStep: 1,
    minuteStep: 1,
    secondStep: 1,
    showNow: true,
    showSuffixIcon: true,
    showFooter: true
  }

  render() {
    const {
      isMobile,
      placeholder,
      format,
      value,
      defaultValue,
      onChange,
      size,
      disabled,
      bordered,
      okText,
      dismissText,
      title,
      className,
      allowClear,
      hourStep,
      minuteStep,
      secondStep,
      showNow,
      showSuffixIcon,
      showFooter,
      isColChoose
    } = this.props

    return (
      <>
        {!isMobile && (
          <TimePickerPC
            placeholder={placeholder}
            format={format}
            value={value}
            defaultValue={defaultValue}
            onChange={onChange}
            size={size}
            disabled={disabled}
            bordered={bordered}
            className={className}
            allowClear={allowClear}
            hourStep={hourStep}
            minuteStep={minuteStep}
            secondStep={secondStep}
            showNow={showNow}
            showSuffixIcon={showSuffixIcon}
            showFooter={showFooter}
            isColChoose={isColChoose}
          />
        )}
        {isMobile && (
          <TimePickerMobile
            value={value}
            defaultValue={defaultValue}
            format={format}
            placeholder={placeholder}
            okText={okText}
            title={title}
            dismissText={dismissText}
            className={className}
            allowClear={allowClear}
            hourStep={hourStep}
            minuteStep={minuteStep}
            secondStep={secondStep}
          />
        )}
      </>
    )
  }
}
