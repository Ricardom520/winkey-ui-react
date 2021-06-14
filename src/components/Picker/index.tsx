import React from 'react';

import Mask from '../Mask';
import PickerView from '../PickerView';
import Input from '../Input';
import "./index.less";

interface PickerProps {
  data?: any;
  placeholder?: string;
  onOk?: (val) => void;
  format?: string;
  onCancel?: () => void;
  title?: string;
  okText?: string;
  dismissText?: string;
  onChange?: (val) => void;
  value?: string[] | number[];
  itemStyle?: React.CSSProperties;
  indicatorStyle?: React.CSSProperties;
}

interface PickerState {
  visible: boolean;
  activeValue: string;
  value: string[] | number[];
  label: string[];
}

export default class Picker extends React.Component<PickerProps, PickerState> {
  static defaultProps = {
    placeholder: "请选择",
    format: ",",
    title: '',
    okText: "确定",
    dismissText: "取消"
  }

  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      activeValue: '',
      value: [],
      label: [],
    }
  }

  componentDidMount() {
    if (this.props.value) {
      this.init();
    }

    this.setState({
      value: this.props.value || [],
    })
  }

  init() {
    const { data, value, format } = this.props;
    const activeLabelCopy = Object.assign(this.state.label, []);
    let valueString = '';

    if (Array.prototype.toString.call(data[0]) === '[object Object]') {
      // 如果不是多维数组
      const colsActiveCopy = [];
      this.initChildrenArray(data, colsActiveCopy, 0);

      if (colsActiveCopy.length > 0) {
        // 如果存在children的时候
        colsActiveCopy.map((i, n) => {
          if (n === colsActiveCopy.length - 1) {
            valueString += i
          } else if (i) {
            valueString += `${i}${format}`
          }
        })

        if (valueString[valueString.length - 1] === `${format}`) {
          valueString = valueString.substring(0, valueString.length - 2);
        }

        this.setState({
          activeValue: valueString
        })

        return;
      } else {
        data.forEach(i => {
          if (i.value === value[0]) {
            activeLabelCopy.push(i.label)
          }
        })
      }
    } else {
      data.forEach((i,n) => {
          i.forEach(j => {
            if (j.value === value[n]) {
              activeLabelCopy.push(j.label)
            }
          })
      })
    }

    activeLabelCopy.map((i, n) => {
      if (n === activeLabelCopy.length - 1) {
        valueString += i
      } else {
        valueString += `${i}${format}`
      }
    })

    this.setState({
      activeValue: valueString
    })
  }

  initChildrenArray = (data, box, n) => {
    if (!data) {
      return;
    }

    data.forEach((i, j) => {
      if (i.children) {
        this.initChildrenArray(i.children, box, n+1);
      }

      if (this.props.value && this.props.value[n] === i.value) {
        box[n] = i.label;
      } else {
        box[n] = box[n] === undefined ? '' : box[n];
      }
    })
  }

  UNSAFE_componentWillReceiveProps(next) {
    this.setState({
      value: next.value || []
    })
  }

  handleChange = (val, label) => {
    if (this.props.onChange) {
      this.props.onChange(val);
    }

    this.setState({
      value: val,
      label,
    })
  }

  onOk = () => {
    const { value, label } = this.state;
    const { format } = this.props;

    let valueString: string = '';

    label.forEach((i, n) => {
      if (n === label.length - 1) {
        valueString += i || ''
      } else {
        valueString += `${i || ''}${format}`
      }
    })

    if (valueString[valueString.length - 1] === `${format}`) {
      valueString = valueString.substring(0, valueString.length - 2);
    }

    if (this.props.onOk) {
      this.props.onOk(value);
    }

    this.setState({
      activeValue: valueString,
      visible: false
    })
  }

  onCancel = () => {
    if (this.props.onCancel) {
      this.props.onCancel();
    }

    this.setState({
      visible: false
    })
  }

  render() {
    const { data, placeholder, title, okText, dismissText, itemStyle, indicatorStyle } = this.props;
    const { visible, activeValue, value } = this.state;
  
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
            <PickerView itemStyle={itemStyle} indicatorStyle={indicatorStyle} data={data} value={value} onChange={this.handleChange} />
          </div>
        </Mask>
      </>
    )
  }
}