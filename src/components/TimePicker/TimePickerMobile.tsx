import React from 'react';
import moment from 'moment';

import { TimePickerProps } from './index'
import PickerView from '../PickerView';
import Input from '../Input';
import Mask from '../Mask';

interface TimePickerMobileState {
  datas: any[];
  visible: boolean;
  value: any[];
  activeValue: string;
}

export default class TimePickerMobile extends React.Component<TimePickerProps, TimePickerMobileState> {
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
    const { value, defaultValue, format } = this.props;

    if (value || defaultValue) {
      const time = moment((value || defaultValue)).format(format);

      this.initValueString(time.split(':'))

      this.setState({
        value: time.split(':')
      })
    }

    this.initHour();
    this.initMinute();
    this.initSecond();
  }

  initValueString = (data, toParent?) => {
    let valueString = '';

    data.map((i, n) => {
      if (n === data.length - 1) {
        valueString += i
      } else {
        valueString += `${i}:`
      }
    })

    this.setState({
      activeValue: valueString
    })

    if (this.props.onOk && toParent) {
      this.props.onOk(valueString)
    }
  }

  initHour = () => {
    const { format, hourStep } = this.props;
    const hourItems = [];
    const hourFormat = format.split(':');

    if (!hourFormat) {
      return;
    }

    if (hourFormat.includes('HH')) {
      for (let i = 0; i < 24; i += hourStep) {
        hourItems.push({
          label: `${i}小时`,
          value: i < 10 ? `0${i}` : `${i}`,
        })
      }
    } else if (hourFormat.includes('H')) {
      for (let i = 0; i < 24; i += hourStep) {
        hourItems.push({
          label: `${i}小时`,
          value: `${i}`,
        })
      }
    } else if (hourFormat.includes('hh')) {
      for (let i = 0; i < 12; i += hourStep) {
        hourItems.push({
          label: `${i}小时`,
          value: i < 10 ? `0${i}` : `${i}`,
        })
      }
    } else if (hourFormat.includes('h')) {
      for (let i = 0; i < 12; i += hourStep) {
        hourItems.push({
          label: `${i}小时`,
          value: `${i}`,
        })
      }
    } else {
      return;
    }

    this.state.datas.push(hourItems);

    this.setState({
      datas: this.state.datas,
    })
  }

  initMinute = () => {
    const { format, minuteStep } = this.props;
    const minuteItems = [];
    const minuteFormat = format.split(':');

    if (minuteFormat.includes('mm')) {
      for (let i = 0; i < 60; i += minuteStep) {
        minuteItems.push({
          label: `${i}分`,
          value: i < 10 ? `0${i}` : `${i}`
        })
      }
    } else if (minuteFormat.includes('m')) {
      for (let i = 0; i < 60; i += minuteStep) {
        minuteItems.push({
          label: `${i}分`,
          value: `${i}`
        })
      }
    } else {
      return;
    }

    this.state.datas.push(minuteItems);

    this.setState({
      datas: this.state.datas
    })
  }

  initSecond = () => {
    const { format, secondStep } = this.props;
    const secondItems = [];
    const secondFormat = format.split(':');

    if (secondFormat.includes('ss')) {
      for (let i = 0; i < 60; i += secondStep) {
        secondItems.push({
          label: `${i}秒`,
          value: i < 10 ? `0${i}` : `${i}`
        })
      }
    } else if (secondFormat.includes('s')) {
      for (let i = 0; i < 60; i += secondStep) {
        secondItems.push({
          label: `${i}秒`,
          value: `${i}`
        })
      }
    } else {
      return;
    }

    this.state.datas.push(secondItems);

    this.setState({
      datas: this.state.datas
    })
  }

  handleChange = (val, label) => {
    this.setState({
      value: val
    })
  }

  onOk = () => {
    const { value } = this.state;
    
    this.initValueString(value, true);

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
    const { placeholder, dismissText, title, okText } = this.props;

    return (
      <>
        <Input 
          placeholder={placeholder}
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