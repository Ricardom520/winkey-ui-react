import React from 'react';

import PickerViewBox from './PickerViewBox';
import "./index.less";

interface PickerViewProps {
  data?: any;
  defaultValue?: string[] | number[];
  value?: string[] | number[];
  onChange?: (val, label) => void;
  itemStyle?: React.CSSProperties;
  indicatorStyle?: React.CSSProperties;
  prefixCls?: string;
  disabled?: boolean;
}

interface PickerViewState {
  value: string[] | number[];
  boxs: any[];
  colsActive: number[];
  label: string[];
}

export default class PickerView extends React.Component<PickerViewProps, PickerViewState> {
  state = {
    value: [],
    boxs: [],
    colsActive: [],
    label: [],
  }

  componentDidMount() {
    const { defaultValue, value, data } = this.props;

    this.setState({
      value: value || defaultValue || []
    })

    this.init(data)
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const { value } = nextProps;

    if (value !== undefined) {
      this.setState({
        value
      })
    }
  }

  handleChange = () => {
    if (this.props.onChange) {
      this.props.onChange(this.state.value, this.state.label)
    }
  }

  async init(data) {
    if (data && data[0]) {
      const boxsCopy = Object.assign(this.state.boxs, []);
      const colsActiveCopy = Object.assign(this.state.colsActive, []);

      if (Array.prototype.toString.call(data[0]) === '[object Object]') {
        // 如果不是多维数组
        const items: any[] = [];
        this.initChildrenArray(data, colsActiveCopy, 0);

        if (colsActiveCopy.length > 0) {
          // 如果存在children的时候
          this.initChildren(colsActiveCopy, data, 0)
        } else {
          data.forEach(i => {
            items.push(i);
            boxsCopy.push(items);
          })
        }
      } else {
        data.forEach(i => {
          boxsCopy.push(i);
        })
      }

      this.setState({
        boxs: boxsCopy,
        colsActive: colsActiveCopy,
      })
    }

    return null
  }

  initChildren(arr, data, activeIndex) {
    const boxCopy = Object.assign(this.state.boxs, []);

    const items: any[] = [];
    let hasChildren: boolean = false;

    data.forEach((i, n) => {
      if (n === arr[activeIndex] && i.children) {
        hasChildren = true;
        this.initChildren(arr, i.children, activeIndex + 1);
      }
      items.push(i);
    })

    if (!hasChildren) {
      for (let i = activeIndex+1; i < arr.length; i++) {
        boxCopy[i] = [];
      }
    }

    boxCopy[activeIndex] = items;

    this.setState({
      boxs: boxCopy
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
        box[n] = j;
      } else {
        box[n] = box[n] === undefined ? 0 : box[n];
      }
    })
  }

  valueChange = (val, index, label, n) => {
    if (this.state.colsActive.length > 0) {
      // 如果是children模式
      this.state.colsActive[n] = index;

      this.setState({
        colsActive: this.state.colsActive,
      }, () => {
        this.changeChildren();
      })
    }

    this.state.value[n] = val;
    this.state.label[n] = label;

    this.setState({
      value: this.state.value,
      label: this.state.label
    }, () => {
      this.handleChange()
    })
  }

  changeChildren = () => {
    this.initChildren(this.state.colsActive, this.props.data, 0)
  }

  render() {
    const { boxs, value } = this.state;
    const { itemStyle, indicatorStyle, prefixCls, disabled } = this.props;
    
    return (
      <div style={{display: 'flex'}}>
        {
          boxs.map((i, n) => {
            return <PickerViewBox 
                key={n} 
                selectedValue={value[n]} 
                onValueChange={(val, index, label) => this.valueChange(val, index, label, n)}
                itemStyle={itemStyle}
                indicatorStyle={indicatorStyle}
                prefixCls={prefixCls}
                disabled={disabled}
              >
              {
                i.map(j=>{
                  return <PickerViewBox.Item value={j.value} key={j.value}>
                    {j.label}
                  </PickerViewBox.Item>
                })
              }
            </PickerViewBox>
          })
        }
      </div>
    )
  }
}