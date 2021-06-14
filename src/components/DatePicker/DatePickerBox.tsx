import React from 'react';
import ReactDOM from 'react-dom';
import moment, { Moment } from 'moment';

import { MonthDays } from './datas';
import "./index.less";

interface DatePickerBoxProps {
  picker: "week" | "month" | "quarter" | "year" | "date",
  value: string;
  defaultValue: string;
  onChange: (value) => void;
  open: boolean;
  top: number;
  left: number;
  disabledDate?: (current: Moment) => boolean;
}

interface DatePickerBoxState {
  picker: "week" | "month" | "quarter" | "year" | "date",
  activePicker: "week" | "month" | "quarter" | "year" | "date" | "decade" | "",
  date: string;
  options: Array<Array<any>>;
  activeYear: number;
  activeMonth: number;
  activeDay: number;
  activeYearRange: number[];
  activeDecadeRange: number[];
  activeIndex: number;
  today: string;
}

export default class DatePickerBox extends React.Component<DatePickerBoxProps, DatePickerBoxState> {
  private poupNode;

  constructor(props) {
    super(props);

    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
  
    this.state = {
      picker: "date",
      date: "",
      options: [[]],
      activePicker: "",
      activeYear: year,
      activeMonth: date.getMonth() + 1,
      activeDay: date.getDay(),
      activeYearRange: [parseInt(`${year}`.substring(0, 3) + '0'), parseInt(`${year}`.substring(0, 3) + '9')],
      activeDecadeRange: [parseInt(`${year}`.substring(0, 2) + '00'), parseInt(`${year}`.substring(0, 2) + '99')],
      activeIndex: 0,
      today: `${year}-${month}-${date.getDate()}`,
    }
  }

  componentDidMount() {
    const { picker, value, defaultValue } = this.props;

    if (!value && !defaultValue) {
      const dateObje = new Date;
      const year = dateObje.getFullYear();
      const month = dateObje.getMonth() + 1;
      const date = dateObje.getDate();
      let dateString = "";

      if (picker === 'date') {
        dateString = `${year}` + `${month}` + `${date}`
      } else if (picker === 'month') {
        dateString = `${year}` + `${month}`
      } else if (picker === 'year') {
        dateString = `${year}`
      }

      this.setState({
        date: dateString
      })
    } else {
      const date = (value || defaultValue).split('-');

      this.setState({
        date: value || defaultValue || '',
        activeYear: parseInt(date[0]),
        activeMonth: parseInt(date[1]),
        activeDay: parseInt(date[2]),
        activeYearRange: [parseInt(`${date[0]}`.substring(0, 3) + '0'), parseInt(`${date[0]}`.substring(0, 3) + '9')],
        activeDecadeRange: [parseInt(`${date[0]}`.substring(0, 2) + '00'), parseInt(`${date[0]}`.substring(0, 2) + '99')],
      })
    }

    this.setState({
      picker: this.props.picker,
      activePicker: this.props.picker === 'date' ? 'date' : ""
    }, () => {
      this.initItems();
    })
  
    ReactDOM.unstable_renderSubtreeIntoContainer(
      this,
      this.retContent(),
      this.retContainer(),
    )
  }

  componentDidUpdate() {
    ReactDOM.unstable_renderSubtreeIntoContainer(
      this,
      this.retContent(),
      this.retContainer(),
    )
  }

  initItems = () => {
    const { picker } = this.state;

    if (picker === "date") {
      this.initDate();
    } else if (picker === 'month') {
      this.initMonth();
    } else if (picker === 'year') {
      this.initYear();
    }
  }

  initDecade = () => {
    const { activeDecadeRange } = this.state;
    const items = [[]];

    let startDecade = activeDecadeRange[0];
    let endDecade = activeDecadeRange[1];

    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 3; j++) {
        if (i === 0 && j === 0) {
          items[i].push({
            value: `${startDecade - 10}-${startDecade - 1}`,
            label: `${startDecade - 10}-${startDecade - 1}`,
            self: false
          })
        } else if (startDecade < endDecade) {
          items[i].push({
            value: `${startDecade}-${startDecade + 9}`,
            label: `${startDecade}-${startDecade + 9}`,
            self: true
          })

          startDecade += 10 
        } else {
          items[i].push({
            value: `${startDecade}-${startDecade + 9}`,
            label: `${startDecade}-${startDecade + 9}`,
            self: false
          })
        }

        if (i < 3 && j === 2) {
          items[i+1] = [];
        }
      }
    }

    this.setState({
      options: items,
      activePicker: 'decade'
    })
  }

  initYear = () => {
    const { value, defaultValue } = this.props;
    const { activeYearRange } = this.state;
    const items = [[]];

    let startYear = activeYearRange[0];
    let endYear = activeYearRange[1];
    let activeIndex = undefined;

    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 3; j++) {
        if (i === 0 && j === 0) {
          items[i].push({
            value: startYear - 1,
            label: startYear - 1,
            self: false
          })
        } else if (startYear <= endYear) {
          if (startYear === parseInt((value || defaultValue))) {
            activeIndex = i * 3 + j
          }

          items[i].push({
            value: startYear,
            label: startYear,
            self: true
          })

          startYear++
        } else {
          items[i].push({
            value: endYear,
            label: endYear,
            self: false
          })
        }

        if (i < 3 && j === 2) {
          items[i+1] = [];
        }
      }
    }

    this.setState({
      options: items,
      activePicker: 'year',
      activeIndex
    })
  }

  initMonth = () => {
    const { value, defaultValue } = this.props;
    const monthValue = (value || defaultValue) ? parseInt((value || defaultValue).split('-')[1]) : "";
    const items = [[]];
    let activeIndex = undefined;

    for (let i = 0; i < 4; i++) {
      for (let j = 1; j < 4; j++) {
        const month = i * j + j;

        if (monthValue === month) {
          activeIndex = month - 1;
        }

        items[i].push({
          value: month,
          label: `${month}月`,
          self: true
        })

        if (j === 3 && i < 3) {
          items[i+1] = [];
        }
      }
    }

    this.setState({
      options: items,
      activePicker: "month",
      activeIndex,
    })
  }

  initDate = () => {
    const { activeYear, activeMonth } = this.state;
    const { value = '', defaultValue = '', disabledDate } = this.props;
    const res = new Date(activeYear, activeMonth - 1, 1);
    const weekDay = new Array(6, 0, 1, 2, 3, 4, 5);
    const dayIndex = weekDay[res.getDay()];
    const dayValue = (value || defaultValue) ? parseInt((value || defaultValue).split('-')[2]) : "";
    const preMonth = activeMonth - 1 === 0 ? 12 : activeMonth - 1;
    const newMonth = activeMonth + 1 === 13 ? 1 : activeMonth + 1;
    let activeIndex = undefined;

    let thisMonthDays = MonthDays[activeMonth];
    let preMonthIndex = MonthDays[activeMonth - 1 === 0 ? 12 : activeMonth - 1];

    if (activeYear % 4 === 0 && activeMonth === 2) {
      thisMonthDays = 29
    } else if (activeYear % 4 === 0 && activeMonth - 1 === 2) {
      preMonthIndex = 29
    }

    const items = [[]];
    let itemsIndex = 0;
    let nextDay = 1;
    let day = 1

    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 7; j++) {
        if (i === 0) {
          if (dayIndex <= j) {
            if (day === dayValue) {
              activeIndex = dayIndex + j
            }
            items[itemsIndex].push({
              value: day,
              label: day,
              self: true,
              disabled: disabledDate
                ? disabledDate(moment(`${activeYear}-${activeMonth}-${day}`))
                : false,
            });
            day += 1;
          } else {
            items[itemsIndex].push({
              value: preMonthIndex - dayIndex + 1,
              label: preMonthIndex - dayIndex + 1,
              self: false,
              disabled: disabledDate
                ? disabledDate(moment(`${activeYear}-${preMonth}-${preMonthIndex - dayIndex + 1}`))
                : false,
            });
            preMonthIndex += 1;
          }    
        } else if (day <= thisMonthDays) {
          if (dayValue === day) {
            activeIndex = i * 7 + j
          }
          items[itemsIndex].push({
            value: day,
            label: day,
            self: true,
            disabled: disabledDate
              ? disabledDate(moment(`${activeYear}-${activeMonth}-${day}`))
              : false,
          });
          day++
        } else {
          items[itemsIndex].push({
            value: nextDay,
            label: nextDay,
            self: false,
            disabled: disabledDate
              ? disabledDate(moment(`${activeYear}-${newMonth}-${nextDay}`))
              : false,
          });
          nextDay++;
        }

        if (j === 6 && i < 6) {
          itemsIndex++
          items[itemsIndex] = []
        }
      }
    }

    this.setState({
      options: items,
      activeIndex,
    })
  }

  handleNext = () => {
    const { activeYear, activeMonth, activePicker } = this.state;

    if (activePicker === 'date') {
      let newMonth = activeMonth;
      let newYear = activeYear;
      if (activeMonth === 12) {
        newMonth = 1;
        newYear++;
      } else {
        newMonth++;
      }

      this.setState({
        activeMonth: newMonth,
        activeYear: newYear
      }, () => {
        this.initDate()
      })
    }
  }

  handlePrev = () => {
    const { activePicker, activeMonth, activeYear } = this.state;

    if (activePicker === 'date') {
      let newMonth = activeMonth;
      let newYear = activeYear;
      if (activeMonth === 1) {
        newMonth = 12;
        newYear--;
      } else {
        newMonth--;
      }

      this.setState({
        activeMonth: newMonth,
        activeYear: newYear
      }, () => {
        this.initDate()
      })
    }
  }

  handleSuperNext = () => {
    const { activeYear, activeYearRange, activeDecadeRange, activePicker } = this.state;
    
    if (activePicker === 'month') {
      let newYear = activeYear + 1;

      this.setState({
        activeYear: newYear,
        activeYearRange: [parseInt(`${newYear}`.substring(0, 3) + '0'), parseInt(`${newYear}`.substring(0, 3) + '9')],
        activeDecadeRange: [parseInt(`${newYear}`.substring(0, 2) + '00'), parseInt(`${newYear}`.substring(0, 2) + '99')]
      })
    } else if (activePicker === 'date') {
      let newYear = activeYear + 1;

      this.setState({
        activeYear: newYear,
        activeYearRange: [parseInt(`${newYear}`.substring(0, 3) + '0'), parseInt(`${newYear}`.substring(0, 3) + '9')],
        activeDecadeRange: [parseInt(`${newYear}`.substring(0, 2) + '00'), parseInt(`${newYear}`.substring(0, 2) + '99')]
      }, () => {
        this.initDate()
      })
    } else if (activePicker === 'year') {
      let newYear = activeYear + 10;

      this.setState({
        activeYear: newYear,
        activeYearRange: [parseInt(`${newYear}`.substring(0, 3) + '0'), parseInt(`${newYear}`.substring(0, 3) + '9')],
        activeDecadeRange: [parseInt(`${newYear}`.substring(0, 2) + '00'), parseInt(`${newYear}`.substring(0, 2) + '99')]
      }, () => {
        this.initYear()
      })
    } else if (activePicker === 'decade') {
      let newYear = activeYear + 100;

      this.setState({
        activeYear: newYear,
        activeYearRange: [parseInt(`${newYear}`.substring(0, 3) + '0'), parseInt(`${newYear}`.substring(0, 3) + '9')],
        activeDecadeRange: [parseInt(`${newYear}`.substring(0, 2) + '00'), parseInt(`${newYear}`.substring(0, 2) + '99')]
      }, () => {
        this.initDecade()
      })
    }
  }

  handleClick = (value, label, index, self) => {
    const { picker } = this.props;
    const { activePicker, activeMonth, activeYear } = this.state;

    if (picker === 'date') {
      if (activePicker !== 'date') {
        if (activePicker === 'month') {
          this.setState({
            activeMonth: value,
            activePicker: 'date'
          }, () => {
            this.initDate();
          })
        }
        if (activePicker === 'year') {
          this.setState({
            activeYear: value,
            activePicker: 'month'
          }, () => {
            this.initMonth()
          })
        }
        if (activePicker === 'decade') {
          this.setState({
            activeYearRange: [value.split('-')[0], value.split('-')[1]],
            activePicker: 'year'
          }, () => {
            this.initYear()
          })
        }
      } else {
        const res = new Date(activeYear, activeMonth - 1, 1);
        const weekDay = new Array(6, 0, 1, 2, 3, 4, 5);
        const dayIndex = weekDay[res.getDay()];

        if (self) {
          this.setState({
            activeIndex: index
          })

          this.props.onChange([activeYear, activeMonth, value])
        } else {
          let newYear = activeYear;
          let newMonth = activeMonth;

          if (MonthDays[activeMonth] <= index) {
            this.setState({
              activeMonth: newMonth + 1 === 13 ? 1 : newMonth + 1,
              activeYear: newMonth + 1 === 13 ? newYear + 1 : newYear,
              activeIndex: index - Math.floor(index / 7) * 7
            }, () => {
              this.initDate()
            })
          } else {
            this.setState({
              activeMonth: newMonth - 1 === 0 ? 12 : newMonth - 1,
              activeYear: newMonth - 1 === 0 ? newYear - 1: newYear,
              activeIndex: index + MonthDays[newMonth - 1] - dayIndex
            }, () => {
              this.initDate()
            })
          }
        }
      }
    } else if (picker === 'month') {
      this.setState({
        activeIndex: index
      })

      this.props.onChange([activeYear, value])
    } else if (picker === 'year') {
      if (activePicker !== 'year') {
        if (self) {
          this.setState({
            activeYearRange: [parseInt(value.split('-')[0]), parseInt(value.split('-')[1])],
          }, () => {
            this.initYear()
          })
        } else {
          this.setState({
            activeDecadeRange: [parseInt(value.split('-')[0].substring(0, 2) + '00'), parseInt(value.split('-')[0].substring(0, 2) + '99')]
          }, () => {
            this.initDecade()
          })
        }
      } else {
        this.setState({
          activeIndex: index
        })

        this.props.onChange([value])
      }
    }
  }

  handleToday = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDay();
    
    this.setState({
      activeYear: year,
      activeMonth: month,
      activeDay: day
    })

    this.props.onChange([year, month, day])
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
    const { options, activePicker, activeYear, activeMonth, activeYearRange, activeDecadeRange, activeIndex, today } = this.state;
    const { open, top, left } = this.props;

    return (
      <div>
        <div 
          className={
            "wk-datepicker-dropdown" + 
            (!open ? " wk-datepicker-dropdown-hidden" : "")
          }
          style={{
            top, 
            left,
            height: open ? '308px' : '0px' 
          }}
        >
          <div className="wk-datepicker-panel-container">
            <div className="wk-datepicker-panel">
              <div 
                className={`wk-datepicker-${activePicker}-panel wk-datepicker-type-panel`}
              >
                <div className="wk-datepicker-header">
                  <button className="wk-datepicker-header-super-prev-btn">
                    <i className="iconfont wk-icon-dbarrow-left"/>
                  </button>
                  {
                    activePicker === 'date' &&
                    <button className="wk-datepicker-header-prev-btn" onClick={this.handlePrev}>
                      <i className="iconfont wk-icon-arrow-left"/>
                    </button>
                  }
                  <div className="wk-datepicker-header-view">
                    {
                      activePicker === 'year' && <button className="wk-datepicker-decade-btn" onClick={this.initDecade}>{activeYearRange[0]}-{activeYearRange[1]}</button>
                    }
                    {
                      (activePicker === 'month' || activePicker === 'date') && <button className="wk-datepicker-year-btn" onClick={this.initYear}>{activeYear}年</button>
                    }
                    {
                      activePicker === 'date' && <button className="wk-datepicker-month-btn" onClick={this.initMonth}>{activeMonth}月</button>
                    }
                    {
                      activePicker === 'decade' && `${activeDecadeRange[0]}-${activeDecadeRange[1]}`
                    }
                  </div>
                  {
                    activePicker === 'date' &&
                    <button className="wk-datepicker-header-next-btn" onClick={this.handleNext}>
                      <i className="iconfont wk-icon-arrow-right"/>
                    </button>
                  }
                  <button className="wk-datepicker-super-next-btn" onClick={this.handleSuperNext}>
                    <i className="iconfont wk-icon-dbarrow-right"/>
                  </button>
                </div>
                <div className="wk-datepicker-bodyer">
                  <table className="wk-datepicker-content">
                    {
                      activePicker === 'date' &&
                      <thead className="wk-datepicker-thead">
                        <tr className="wk-datepicker-tr">
                          <th className="wk-datepicker-th">一</th>
                          <th className="wk-datepicker-th">二</th>
                          <th className="wk-datepicker-th">三</th>
                          <th className="wk-datepicker-th">四</th>
                          <th className="wk-datepicker-th">五</th>
                          <th className="wk-datepicker-th">六</th>
                          <th className="wk-datepicker-th">日</th>
                        </tr>
                      </thead>
                    }
                    <tbody>
                      {
                        options.map((i, n)=>{
                          return (
                            <tr key={`tr-${n}`}>
                              {
                                i.map((j, d) => {
                                  return (
                                    <td 
                                      key={`td-${n * i.length + d}`}
                                      className={
                                        "wk-datepicker-cell" +
                                        (j.self ? " wk-datepicker-cell-in-view" : "") +
                                        (n * i.length + d === activeIndex ? " wk-datepicker-cell-selected" : "") +
                                        (j.disabled ? ' wk-datepicker-cell-disabled' : '')
                                      }
                                      onClick={() => this.handleClick(j.value, j.label,n * i.length + d, j.self)}
                                    >
                                      <div 
                                        className={
                                          "wk-datepicker-cell-inner" +
                                          (`${activeYear}-${activeMonth}-${j.self && j.value}` === today ? ' wk-datepicker-cell-today' : '')
                                        }
                                      >
                                        {j.label}
                                      </div>
                                    </td>
                                  )
                                })
                              }
                            </tr>
                          )   
                        })
                      }
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {
              activePicker === 'date' &&
              <div className="wk-datepicker-footer">
                <a href="javascript:void(0)" className="wk-datepicker-today-btn" onClick={this.handleToday}>
                  今天
                </a>
              </div>
            }
          </div>
        </div>
      </div>
    )
  }

  render() {
    return null
  }
}