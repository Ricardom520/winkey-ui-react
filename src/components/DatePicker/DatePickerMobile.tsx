import React from 'react';
import moment from 'moment';

import { DatePickerProps } from './index';
import { PlaceholderNormal, MonthDays, PickerFormatNormal } from './datas';
import PickerView from '../PickerView';
import Input from '../Input';
import Mask from '../Mask';

interface DatePickerMobileState {
  datas: any[];
  visible: boolean;
  value: any[];
  activeValue: string;
}

export default class TimePickerMobile extends React.Component<DatePickerProps, DatePickerMobileState> {
  constructor(props) {
    super(props);

    this.state = {
      datas: [],
      visible: false,
      value: [],
      activeValue: ''
    }
  }

  componentDidMount() {
    const { value, defaultValue, picker, format } = this.props;

    if (value || defaultValue) {
      const date = moment((value || defaultValue)).format(PickerFormatNormal[picker]);

      this.initValueString(date.split('-'))

      this.setState({
        value: date.split('-')
      })
    } else {
      const date = new Date();
      const monthFormat = (format || PickerFormatNormal[picker]).split('-')[1] || '';
      const dayFormat = (format || PickerFormatNormal[picker]).split('-')[2] || '';
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDay();

      this.setState({
        value: [`${year}`, monthFormat === 'MM' ? month < 10 ? `0${month}` : `${month}` : `${month}`, dayFormat === 'DD' ? day < 10 ? `0${day}` : `${day}` : `${day}`]
      })
    }

    this.years();
  }

  years = () => {
    const { picker } = this.props;
    const date = new Date();
    const activeYear = date.getFullYear();
    const startYear = activeYear - 10;
    const endYear = activeYear + 10;
    const options = [];

    let activeIndex = 0;
    
    for (let i = startYear; i < endYear; i++) {
      options.push({
        label: `${i}年`,
        value: `${i}`
      })

      if (picker === 'month' || picker === 'date') {
        options[activeIndex].children = this.initMonths(i);
      }

      activeIndex++;
    }

    this.setState({
      datas: options
    })
  }

  initMonths = (year) => {
    const { picker, format } = this.props;
    const options = [];
    const monthFormat = (format || PickerFormatNormal[picker]).split('-')[1];

    for (let i = 1; i < 13; i++) {
      options.push({
        label: `${i}月`,
        value: monthFormat === 'MM' ? i < 10 ? `0${i}` : `${i}` : `${i}`
      })

      if (picker === 'date') {
        options[i - 1].children = this.initDate(i, year);
      }
    }

    return options;
  }

  initDate = (month, year) => {
    const { format, picker } = this.props;
    const options = [];
    const monthDays = year % 4 === 0 && month === 2 ? 29 : MonthDays[month];
    const dateFormat = (format || PickerFormatNormal[picker]).split('-')[2];

    for (let i = 1; i <= monthDays; i++) {
      options.push({
        label: `${i}日`,
        value: dateFormat === 'DD' ? i < 10 ? `0${i}` : `${i}` : `${i}`
      })
    }

    return options;
  }

  initValueString = (date) => {
    const { format, picker } = this.props;
    let valueString = '';

    date.map((i, n) => {
      if (n === date.length - 1) {
        valueString += i
      } else {
        valueString += `${i}-`
      }
    })

    valueString = moment(valueString, (format || PickerFormatNormal[picker])).format(format || PickerFormatNormal[picker])

    this.setState({
      activeValue: valueString
    })

    if (this.props.onOk) {
      this.props.onOk(moment(valueString, (format || PickerFormatNormal[picker])),valueString)
    }
  }

  handleChange = (val, label) => {
    this.setState({
      value: val
    })
  }

  onOk = () => {
    const { value } = this.state;
    
    this.initValueString(value);

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
    const { datas, visible, value, activeValue } = this.state;
    const { placeholder, dismissText, title, okText, picker } = this.props;

    return (
      <>
        <Input 
          placeholder={placeholder || PlaceholderNormal[picker]}
          value={activeValue}
          size="small"
          textAlign="right"
          readOnly 
          isMobile 
          onClick={()=> {
            this.setState({
              visible: true
            })
          }} 
        />
        <Mask visible={visible} kind="picker">
          <div className="wk-picker-container">
            <div className="wk-picker-header">
              <div className="wk-picker-header-item wk-picker-header-item-left" onClick={this.onCancel}>{dismissText}</div>
              <div className="wk-picker-header-item wk-picker-header-item-title">{title}</div>
              <div className="wk-picker-header-item wk-picker-header-item-right" onClick={this.onOk}>{okText}</div>
            </div>
            <PickerView data={datas} value={value} onChange={this.handleChange} />
          </div>
        </Mask>
      </>
    )
  }
}