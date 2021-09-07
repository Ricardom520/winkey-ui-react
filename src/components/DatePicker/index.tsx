import { Moment } from 'moment';
import React from 'react';

import DatePickerPC from './DatePickerPC';
import DatePickerMobile from './DatePickerMobile';

export interface DatePickerProps {
  isMobile?: boolean
  size?: "small" | "large" | "default",
  disabled?: boolean,
  bordered?: boolean,
  className?: string;
  placeholder?: string;
  allowClear?: boolean;
  showSuffixIcon?: boolean;
  format?: string;
  onChange?: (date, dateString) => void;
  picker?: "month" | "year" | "date",
  value?: Moment;
  defaultValue?: Moment;
  onOk?: (date, dateString) => void;
  okText?: string;
  dismissText?: string;
  title?: string;
  pickerClassName?: string;
  disabledDate?: (current: Moment) => boolean;
  showTime?: boolean;
}

export default class DatePicker extends React.Component<DatePickerProps> {
  static winkeyName = 'datepicker'
  static defaultProps = {
    bordered: true,
    showSuffixIcon: true,
    picker: "date",
    size: "",
    allowClear: true,
    title: "选择日期",
    okText: "确定",
    dismissText: "取消"
  }

  render() {
    const {
      isMobile,
      size,
      disabled,
      bordered,
      className,
      placeholder,
      allowClear,
      showSuffixIcon,
      format,
      picker,
      value,
      defaultValue,
      onChange,
      title,
      okText,
      dismissText,
      onOk,
      disabledDate,
      showTime,
      pickerClassName
    } = this.props;

    return (
      <>
        {
          !isMobile &&
          <DatePickerPC
            size={size}
            disabledDate={disabledDate}
            disabled={disabled}
            bordered={bordered}
            className={className}
            placeholder={placeholder}
            allowClear={allowClear}
            showSuffixIcon={showSuffixIcon}
            format={format}
            picker={picker}
            value={value}
            defaultValue={defaultValue}
            onChange={onChange}
          />
        }
        {
          isMobile &&
          <DatePickerMobile
            value={value}
            defaultValue={defaultValue}
            picker={picker}
            title={title}
            okText={okText}
            dismissText={dismissText}
            placeholder={placeholder}
            onOk={onOk}
            className={className}
            pickerClassName={pickerClassName}
            showTime={showTime}
          />
        }
      </>
    )
  }
}