import React from 'react';

import TabsContext from './TabsContext';
import TabPane from './TabPane';
import Dropdown from './Dropdown';
import "./index.less";

interface TabsProps {
  defaultActiveKey?: string | number;
  activeKey?: string | number;
  onChange?: (key) => void;
  children?: any;
  centered?: boolean;
  tabPosition?: "left" | "top" | "right" | "bottom";
  style?: React.CSSProperties;
  className?: string;
}

interface TabsState {
  activeKey: string | number;
  activeIndex: number;
  widths: number[];
  isMore: boolean;
  left: number;
  top: number;
  moreChildren: any[];
  visible: boolean;
  marginLeft: number;
  width: number;
}

const moreCloseList = {
  "wk-tabs-nav-more": 1,
  "wk-tabs-dropdown-menu-item": 1
}

export default class Tabs extends React.Component<TabsProps, TabsState> {
  private tabs;
  private tabsContent;
  private tabsNavWrap;
  private tabsNavOperations;
  private tabsNavList;
  static TabPane = TabPane;

  constructor(props) {
    super(props);

    this.state = {
      activeKey: undefined,
      activeIndex: 0,
      widths: [],
      isMore: false,
      left: 0,
      top: 0,
      moreChildren: [],
      visible: false,
      marginLeft: 0,
      width: 0,
    }

    this.tabs = React.createRef();
    this.tabsContent = React.createRef();
    this.tabsNavWrap = React.createRef();
    this.tabsNavOperations = React.createRef();
    this.tabsNavList = React.createRef();
  }

  componentDidMount() {
    const { defaultActiveKey, activeKey, children } = this.props;

    if (activeKey || defaultActiveKey) {
      if (children.length) {
        children.forEach((i, n) => {
          if ((activeKey || defaultActiveKey) === i.key) {
            this.setState({
              activeIndex: n,
              marginLeft: n * -100,
            })
          }
        })
      }
      this.setState({
        activeKey: (activeKey || defaultActiveKey)
      })
    }

    const tabPanes = this.tabs.current.getElementsByClassName("wk-tabs-tab");

    const tabsNavList = this.tabs.current.getElementsByClassName("wk-tabs-nav-list")[0];

    let isMore = false;
    console.log(this.tabsNavList.current.clientWidth)
    console.log(this.tabsNavWrap.current.clientWidth)
    if (this.tabsNavList.current.clientWidth > this.tabsNavWrap.current.clientWidth) {
      isMore = true;

      this.setState({
        isMore: true,
      })
    }

    const widths = [];
    let widthSum = 0;
    const moreChildren = [];
    console.log(isMore);
    Array.prototype.slice.call(tabPanes).forEach((i, n) => {
      if (isMore) {
        widthSum += i.clientWidth + 32;
        if (widthSum > this.tabsNavWrap.current.clientWidth) {
          moreChildren.push({
            key: children[n].key,
            tab: children[n].props.tab,
            disabled: children[n].props.disabled,
            index: n
          });
        }
      }
      widths.push(i.clientWidth);
    })

    this.setState({
      widths,
      moreChildren,
      width: this.tabsContent.current.clientWidth,
    })
  }

  UNSAFE_componentWillReceiveProps(next) {
    const { activeKey, children } = next;

    if (activeKey !== undefined) {
      if (children.length) {
        children.forEach((i, n) => {
          if ((activeKey) === i.key) {
            this.setState({
              activeIndex: n,
              marginLeft: n * -100,
            })
          }
        })
      }
      this.setState({
        activeKey: (activeKey)
      })
    }
  }

  getWidth = () => {
    const { widths, activeIndex } = this.state;
  
    let width = 0;

    for (let i = 0; i <= activeIndex - 1; i++) {
      width += widths[i] + 32
    }

    return width;
  }

  handleOpenDropdown = () => {
    const target = this.tabsNavOperations.current;
    this.setState({
      left: target.offsetLeft + target.offsetParent.offsetLeft,
      top: target.offsetParent.offsetTop + target.clientHeight,
      visible: true
    })
  }

  handleCloseDropdown = () => {
    document.onmouseover = (e: any) => {
      if (!moreCloseList[e.target.className]) {
        this.setState({
          visible: false
        }, () => {
          document.onmouseover = null
        })
      }
    }
  }

  dropClick = (val, index) => {
    this.setState({
      activeKey: val,
      visible: false,
      activeIndex: index
    })
  }

  getContext = () => {
    const { activeKey, width } = this.state;
    const { children, onChange } = this.props;

    return {
      activeKey,
      setActiveKey: (val) => {
        if (onChange) {
          onChange(val)
        }

        if (children.length) {
          children.forEach((i, n) => {
            if (i.key === val) {
              
              this.setState({
                activeIndex: n,
                marginLeft: n * -100,
              })
            }
          })
        }

        this.setState({
          activeKey: val
        })
      }
    }
  } 

  render() {
    const { children, centered, style, className } = this.props;
    const { activeKey, isMore, left, top, moreChildren, visible, marginLeft, width } = this.state;

    return (
      <>
        <TabsContext.Provider value={this.getContext()}>
          <div style={style} ref={this.tabs} className={
            "wk-tabs" +
            " wk-tabs-top" +
            (centered ? " wk-tabs-centered" : "") +
            (className? ` ${className}` : "")
          }>
            <div className={
              "wk-tabs-nav" + " " +
              (isMore ? "wk-tabs-nav-is-more" : "")
            }>
              <div className={
                "wk-tabs-nav-wrap" +
                (isMore ? " wk-tabs-nav-wrap-ping-right" : "")
              } ref={this.tabsNavWrap}>
                <div 
                  className="wk-tabs-nav-list" 
                  style={{transform: 'translate(0px, 0px)'}}
                  ref={this.tabsNavList}
                >
                  {
                    children
                  }
                  <div className="wk-tabs-ink-bar wk-tabs-ink-bar-animated" style={{width: '34px', left: `${this.getWidth()}px`}} />
                </div>
              </div>
              {/* <div 
                className="wk-tabs-nav-operations" style={{display: isMore ? "flex" : "none"}} 
                ref={this.tabsNavOperations}
                onMouseEnter={this.handleOpenDropdown}
                onMouseLeave={this.handleCloseDropdown}
              >
                <button className="wk-tabs-nav-more">
                  <i className="iconfont wk-icon-ellipsis"/>
                </button>
              </div> */}
            </div>
            <div className="wk-tabs-content-holder">
              <div 
                className={
                  "wk-tabs-content" +
                  " wk-tabs-content-top"
                }
                ref={this.tabsContent}
              >
                <div className={
                  "wk-tabs-content-box" + " " +
                  'wk-tabs-content-animated'
                } style={{marginLeft: `${marginLeft}%`}}>
                  {
                    !children.length &&
                    <div className={
                      "wk-tabs-tabpane" +
                      " wk-tabs-tabpane-active"
                    }>
                      {children.props.children}
                    </div>
                  }
                  {
                    children.length &&
                    children.map((i, n) => {
                      return (
                        <div 
                          key={n}
                          className={
                            "wk-tabs-tabpane"
                          }
                          // style={activeKey !== i.key ? {display: "none"} : null}
                          style={{width: `${width}px`}}
                        >
                          {i.props.children}
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            </div>
          </div>
        </TabsContext.Provider>
        {/* {
          isMore &&
          <Dropdown 
            left={left} 
            top={top} 
            dataSource={moreChildren} 
            visible={visible} 
            onClick={this.dropClick}
          />
        } */}
      </>
    )
  }
}