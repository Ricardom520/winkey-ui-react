import React from 'react';
import ReactDOM from 'react-dom';

import Button from '../Button';
import "./index.less";

interface TimePickerProps {
  top: number;
  left: number;
  width: number;
  datas: any[];
  onChange?: (value) => void;
  onOk?: (value) => void;
  height: number;
  activeIndex: number[];
  activeValue: string[] | number[];
  open: boolean;
  format: string;
  showNow: boolean;
  showFooter: boolean;
  isColChoose: boolean;
}

interface TimePickerPCState {
  activeIndex: number[];
  activeValue: string[] | number[];
}

class TimePickerBox extends React.Component<TimePickerProps, TimePickerPCState> {
  private poupNode

  constructor(props) {
    super(props);

    this.state = {
      activeIndex: [],
      activeValue: [],
    }
  }

  initSroll = (col, index, first?) => {
    if (this.poupNode) {
      const target = this.poupNode.getElementsByClassName(`wk-timepick-col-${col}`)[0];
      const targetTop =  28 * index;
 
      if (target) {
        let interval = target.scrollTop;

        if (!first) {
          let timmer = requestAnimationFrame(function fn(){
            if (interval < targetTop) {
              interval += 10;
              target.scrollTop = interval > targetTop ? targetTop : interval;
              timmer = requestAnimationFrame(fn)
            }
          })
        } else {
          target.scrollTop = targetTop;
        }
      }
    }
  }

  handleClick = (val, index, col) => {
    this.state.activeIndex[col] = index;
    this.state.activeValue[col] = val;

    this.setState({
      activeIndex: this.state.activeIndex,
      activeValue: this.state.activeValue
    })

    if (this.props.isColChoose) {
      this.props.onOk(this.state.activeValue)
    } else {
      this.props.onChange(this.state.activeValue);
    }

    this.initSroll(col, index)
  }

  handleNow = () => {
    const { format } = this.props;
    const activeValue = [];
    const nowDate = new Date();

    const hourFormat = format.split(":")[0];
    const minuteFormat = format.split(":")[1];
    const secondFormat = format.split(":")[2];
    
    let hour = nowDate.getHours()

    if (hourFormat === 'HH') {
      activeValue.push(hour < 10 ? `0${hour}` : hour);
    } else if (hourFormat === 'H') {
      activeValue.push(hour)
    } else if (hourFormat === 'hh') {
      hour = hour > 12 ? hour - 12 : hour;
      activeValue.push(hour < 10 ? `0${hour}` : hour);
    } else if (hourFormat === 'h') {
      hour = hour > 12 ? hour - 12 : hour;
      activeValue.push(hour)
    }

    const minute = nowDate.getMinutes();

    if (minuteFormat === 'mm') {
      activeValue.push(minute < 10 ? `0${minute}` : minute)
    } else {
      activeValue.push(minute)
    }

    const second = nowDate.getSeconds();

    if (secondFormat === 'ss') {
      activeValue.push(second < 10 ? `0${second}` : second)
    } else {
      activeValue.push(second)
    }

    this.props.onOk(activeValue)
  }

  handleSubmit = () => {
    this.props.onOk(this.state.activeValue)
  }

  retContainer() {
    if (!this.poupNode) {
      const popupNode = document.createElement('div');
      popupNode.style.position = "absolute";
      popupNode.style.top = "0px";
      popupNode.style.left = "0px";
      popupNode.style.width = "100%";
      
      this.poupNode = popupNode;
      document.body.appendChild(popupNode)
    }

    return this.poupNode;
  }

  retContent() {
    const { top, left, width, datas, open, showNow, showFooter } = this.props;
    const { activeIndex } = this.state;

    return (
      <div>
        <div 
          className={
            "wk-timepicker-dropdown" +
            (!open ? " wk-timepicker-dropdown-hidden" : "")
          }
          style={{
            minWidth: `${activeIndex.length * 56}px`, 
            width: `${width}px`, 
            top, 
            left,
            height: open ? showFooter ? '274px' : '232px' : '0px' 
          }}
          ref={el => this['test'] = el}
        >
          <div className="wk-timepicker-panel-container">
            <div className="wk-timepicker-panel">
              <div className="wk-timepicker-time-panel">
                <div className="wk-timepicker-content">
                  {
                    datas.map((i, n) => {
                      return (
                        <ul 
                          className={`wk-timepicker-time-panel-column wk-timepick-col-${n}`}
                          style={{position: 'relative'}} 
                          key={n}
                        >
                          {
                            i.map((j, d) => {
                              return (
                                <li 
                                  className={
                                    "wk-timepicker-time-panel-cell" +
                                    (activeIndex[n] === d ? " wk-timepicker-time-panel-cell-selected" : "")
                                  }
                                  key={`${j}-${n}`}
                                  onClick={()=>this.handleClick(j, d, n)}
                                >
                                  <div className="wk-timepicker-time-panel-cell-inner">{j}</div>
                                </li>
                              )
                            })
                          }
                        </ul>
                      )
                    })
                  }
                </div>
              </div>
              {
                showFooter && 
                <div className="wk-timepicker-footer">
                  <ul className="wk-timepicker-ranges">
                    <li className="wk-timepicker-now">
                      {
                        showNow && <a href="javascript:void(0)" className="wk-timepicker-now-btn" onClick={this.handleNow}>此刻</a>
                      }
                    </li>
                    <li className="wk-timepicker-ok">
                      <Button size="small" type="primary" onClick={this.handleSubmit}>确定</Button>
                    </li>
                  </ul>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    )
  }

  componentDidMount() {
    this.setState({
      activeIndex: this.props.activeIndex,
      activeValue: this.props.activeValue
    })

    ReactDOM.unstable_renderSubtreeIntoContainer(
      this,
      this.retContent(),
      this.retContainer(),
    )
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    nextProps.activeIndex.forEach((i, n) => {
      this.initSroll(n, i, true);
    })

    this.setState({
      activeIndex: nextProps.activeIndex,
      activeValue: nextProps.activeValue
    })
  }

  componentDidUpdate() {
    ReactDOM.unstable_renderSubtreeIntoContainer(
      this,
      this.retContent(),
      this.retContainer(),
    )
  }

  render() {
    return null;
  }
}

export default TimePickerBox;