import React, { ReactNode } from 'react';

import Option from './Option';
import SelectBox from './SelectBox';
import "./index.less";

interface SelectOptions {
  label: string;
  value: string | number;
}

interface SelectProps {
  mode?: "multiple";
  defaultValue?: string | number | string[] | number[];
  value?: string | number;
  style?: React.CSSProperties;
  options?: SelectOptions[];
  onChange?: (value) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  onSearch?: (val) => void;
  onClear?: () => void;
  filterOption?: (input, option) => void;
  disabled?: boolean;
  loading?: boolean;
  allowClear?: boolean;
  children?: ReactNode;
  placeholder?: string;
  showSearch?: boolean;
  optionFilterProp?: "children";
  size?: "small" | "large";
  bordered?: boolean;
  className?: string;
  dropdownClassName?: string;
  dropdownStyle?: React.CSSProperties;
}

interface SelectState {
  children: any;
  focus: boolean;
  open: boolean;
  offsetTop: number;
  offsetLeft: number;
  width: number,
  height: number,
  value: string | number | string[] | number[];
  label: string | string[];
  searchValue: string;
  firstFlag: boolean;
}

const selectClass = {
  multiple: " wk-select-multiple",
  single: " wk-select-single",
  large: " wk-select-lg",
  small: " wk-select-sm",
  default: "",
  "": ""
}

const whiteList = {
  "wk-select-item-option-content": 1,
  "iconfont wk-icon-close": 1,
  "wk-select-selection-overflow-item": 1, 
  "wk-select-selection-overflow": 1,
  "wk-select-item wk-select-item-option": 1,
  "iconfont wk-icon-hock": 1,
  "wk-select-item-option-state": 1,
  "wk-select-item wk-select-item-option wk-select-item-checked": 1
}

export default class Select extends React.Component<SelectProps, SelectState> {
  private wkSelect;
  static winkeyName = 'select'
  static Option = Option;

  static defaultProps = {
    placeholder: "请选择",
    mode: "single",
    bordered: true,
    size: ""
  }

  constructor(props) {
    super(props);

    this.state = {
      focus: false,
      open: false,
      offsetTop: -999,
      offsetLeft: -999,
      width: 0,
      height: 0,
      value: '',
      label: "",
      searchValue: "",
      children: undefined,
      firstFlag: true,
    }

    this.wkSelect = React.createRef();
  }

  componentDidMount() {
    const { value, defaultValue, children } = this.props;
    
    this.setState({
      value: value || defaultValue || '',
      children: children
    })

    this.initLabelAndValue(this.props)
  }

  UNSAFE_componentWillUpdate(_, nextState) {
    const { open } = nextState;

    if (open) {
      document.addEventListener('click', (e: any) => {
        if (!whiteList[e.target.className]) {
          this.setState({
            open: false,
            focus: false
          })
        }
      }, true)
    } else {
      document.removeEventListener('click', () => {

      }, false)
    }
  }

  UNSAFE_componentWillReceiveProps(next) {
    const { value } = next;

    if (value === undefined) {
      this.setState({
        searchValue: "",
        value: '',
        label: ''
      })
    }

    this.initLabelAndValue(next)

    this.setState({
      children: next.children
    })
  }

  initLabelAndValue = (props) => {
    const { value, defaultValue, children, options } = props;
    
    if ((children || options) && (value || defaultValue)) {
      const toArrayChildren = options || Array.prototype.slice.call(children)

      if ((typeof value !== 'object') && (typeof defaultValue !== 'object')) {
        toArrayChildren.forEach(i => {
          if ((i.value || i.props.value) === (value || defaultValue)) {
            this.setState({
              label: i.label || i.props.children
            })
          }
        })
      } else {
        const labels = [];
        const values = [];

        toArrayChildren.forEach(i => {
          (value || defaultValue).forEach(j => {
            if ((i.value || i.props.value) === j) {
              labels.push(i.label || i.props.children)
              values.push(j)
            }  
          })
        })

        this.setState({
          label: labels,
          value: values
        })
      }
    }
  }

  initSelect = () => {
    const { style, placeholder, disabled, loading, showSearch, allowClear, mode, size, bordered, className } = this.props;
    const { focus, open, label, searchValue } = this.state;

    return (
      <div
        ref={this.wkSelect}
        className={
          "wk-select" +
          " wk-select-show-arrow" +
          (focus ? " wk-select-focused" : "") +
          (open ? " wk-select-open" : "") +
          (disabled ? " wk-select-disabled" : "") +
          selectClass[mode] +
          selectClass[size] +
          (!bordered ? " wk-select-borderless" : "") +
          (className? ` ${className}` : "")
        }
        onClick={this.handleClick}
        style={style}
      >
        <div className="wk-select-selector">
          {
            mode === 'multiple' &&
            <div className="wk-select-selection-overflow">
              {
                typeof label !== 'string' && label.length > 0 && label.map((i,n) => {
                  return (
                    <div className="wk-select-selection-overflow-item" key={`${i}-${n}`} onClick={(e) => this.handleRemoveItem(e, n)}>
                      <span className="wk-select-selection-item">
                        <span className="wk-select-selection-item-content">{i}</span>
                        <span className="wk-select-selection-item-remove">
                          <i className="iconfont wk-icon-close" />
                        </span>
                      </span>
                    </div>
                  )
                })
              }
              {
                label.length === 0 &&
                <span 
                  className="wk-select-selection-item-placeholder"
                >
                  {placeholder}
                </span>
              }
              <div className="wk-select-selection-overflow-item wk-select-selection-overflow-item-suffix" style={{opacity: 1}}>
                <div className="wk-select-selection-search" style={{width: '4px'}}>
                  <input 
                    autoComplete="off" 
                    type="search"
                    className="wk-select-selection-search-input"
                    style={{opacity: showSearch ? 1 : 0}}
                    onBlur={this.handleBlur}
                    onFocus={this.handleFocus}
                    onChange={this.handleSearch}
                    value={searchValue}
                  />
                  <span className="wk-select-selection-search-mirror" aria-hidden>&nbsp;</span>
                </div>
              </div>
            </div>
          }
          {
            mode !== "multiple" &&
            <>
              <span className="wk-select-selection-search">
              <input 
                autoComplete="off" 
                type="search"
                className="wk-select-selection-search-input"
                style={{opacity: showSearch ? 1 : 0}}
                onBlur={this.handleBlur}
                onFocus={this.handleFocus}
                onChange={this.handleSearch}
                value={searchValue}
              />
            </span>
            <span 
              className={
                "wk-select-selection-item" +
                ((!searchValue && !label) ? " wk-select-selection-item-placeholder" : "")
              } 
            >
              {!searchValue 
                ? 
              (label 
                ? 
              typeof label === 'string' 
              ?
              label
              : label.map(i => {
                return i + '、'
              })
              : placeholder) 
              : ""}
            </span>
            </>
          }
        </div>
        {
          allowClear &&
          <span className="wk-select-clear" style={{userSelect: 'none', opacity: label ? 1 : 0}} onClick={this.handleClear}>
            <i className="iconfont wk-icon-close"/>
          </span>
        }
        {
          !allowClear &&
          <span className="wk-select-arrow" style={{userSelect: 'none'}}>
            <span className="wk-select-arrow-icon">
              {
                loading && <i className="iconfont wk-icon-loading-line-round wk-select-loading-icon"/>
              }
              {
                !loading && !showSearch && <i className="iconfont wk-icon-arrow-right" style={{transform: 'rotate(90deg)'}}/>
              }
              {
                showSearch && 
                (open ?
                <i className="iconfont wk-icon-search"/> :
                <i className="iconfont wk-icon-arrow-right" style={{transform: 'rotate(90deg)'}}/>)
              }
            </span>
          </span> 
        }
      </div>
    )
  }

  handleClick = () => {
    const { disabled } = this.props;
    const wkSelect: any = this.wkSelect.current;

    this.setState({
      offsetLeft: wkSelect.getBoundingClientRect().left,
      offsetTop: wkSelect.getBoundingClientRect().top + wkSelect.clientHeight + 3,
      width: wkSelect.clientWidth,
      height: wkSelect.clientHeight,
      firstFlag: false
    })

    if (!disabled) {
      this.setState({
        focus: true,
        open: true
      })
    }
  }

  handleBlur = () => {
    this.setState({
      focus: false,
    })

    if (this.props.onBlur) {
      this.props.onBlur()
    }
  }

  handleFocus = () => {
    const { disabled } = this.props;

    if (!disabled) {
      this.setState({
        focus: true,
      })
    }

    if (this.props.onFocus) {
      this.props.onFocus();
    }
  }

  handleChange = (value, label, boolean) => {
    const { onChange, mode } = this.props;

    if (mode !== 'multiple') {
      this.setState({
        open: false,
        value: value,
        label: label
      })

      if (onChange) {
        onChange(value)
      }
    } else {
      if (typeof this.state.value === 'object') {
        let newValue = [];
        let newLabel = [];
        if (boolean) {
          // 添加
          newValue = [...this.state.value, value];
          newLabel = [...this.state.label, label];
        } else {
          // 减少
          this.state.value.forEach((i, n) => {
            if (i !== value) {
              newLabel.push(this.state.label[n])
              newValue.push(i)
            }
          })
        }

        this.setState({
          value: newValue,
          label: newLabel
        })

        if (onChange) {
          onChange(newValue)
        }
      }
    }

    this.setState({
      searchValue: ''
    })
  }

  handleSearch = (e) => {
    const { filterOption, onSearch, optionFilterProp, showSearch } = this.props;
    const { children } = this.props;

    if (!showSearch) {
      return;
    }

    let filterChildren;

    const value = e.target.value;

    if (onSearch) {
      onSearch(value)
    }

    if (value) {
      Array.prototype.slice.call(children).forEach(i => {
        if (i.props.children.includes(value)) {
          if (filterOption) {
            if (optionFilterProp) {
              if (optionFilterProp === 'children') {
                filterOption(value, i.props)
              } else {
                filterOption(value, i)
              } 
            }
          }

          if (!filterChildren) {
            filterChildren = i
          } else {
            filterChildren = Object.assign([], filterChildren)
          }
        }
      })

      this.setState({
        searchValue: value,
        children: filterChildren
      })
    } else {
      this.setState({
        searchValue: '',
        children: this.props.children
      })
    }
  }

  handleRemoveItem = (e, index) => {
    const { label, value } = this.state;
    
    if (typeof label === 'object') {
      label.splice(index, 1)

      this.setState({
        label,
      })
    }

    if (typeof value === 'object') {
      value.splice(index, 1)

      this.setState({
        value
      })
    }

    if (this.props.onChange) {
      this.props.onChange(value)
    }

    e.stopPropagation()
  }

  handleClear = () => {
    if (this.props.onClear) {
      this.props.onClear()
    }

    if (this.props.mode === 'multiple') {
      this.setState({
        value: [],
        label: []
      })
    } else {
      this.setState({
        value: '',
        label: ''
      })
    }
  }

  render() {
    const { mode, dropdownClassName, dropdownStyle, options } = this.props;
    const { offsetLeft, offsetTop, width, value, open, height, children } = this.state;

    return (
      <>
        {this.initSelect()}
        <SelectBox 
          ref="selectBox"
          dropdownClassName={dropdownClassName}
          dropdownStyle={dropdownStyle}
          top={offsetTop} 
          left={offsetLeft}
          width={width} 
          onChange={this.handleChange} 
          value={value} 
          open={open} 
          height={height}
          mode={mode}
        >
          {children ? children : options && options.map((item: SelectOptions) => {
              return <Option value={item.value} key={`${item.label}_${item.value}`}>{item.label}</Option>
            })}
        </SelectBox>
      </>
    )
  }
}1