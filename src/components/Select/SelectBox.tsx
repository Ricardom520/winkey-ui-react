import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom';

import "./index.less";

interface SelectBoxProps {
  top: number;
  left: number;
  width: number;
  children: any;
  onChange: (value, label, boolean) => void;
  value: any;
  open: boolean;
  height: number;
  mode: "single" | "multiple"
  dropdownClassName: string;
  dropdownStyle: React.CSSProperties;
}

class SelectBox extends React.Component<SelectBoxProps> {
  private poupNode

  constructor(props) {
    super(props);
  }

  handleClick = (val, label, boolean) => {
    this.props.onChange(val, label, boolean)
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
    const { top, left, width, children, value, open, height, mode, dropdownClassName, dropdownStyle } = this.props;

    return (
      <div style={{position: 'absolute'}}>
        <div 
          className={
            "wk-select-dropdown" +
            (!open ? " wk-select-dropdown-hidden" : "") +
            (dropdownClassName ? ` ${dropdownClassName}` : "")
          }
          style={{minWidth: '120px', width: `${width}px`, top: top, left: left, ...dropdownStyle }}
        >
          <div>
            <div className="wk-virtual-list" style={{position: 'relative'}}>
              {
                children && 
                <div
                  className="wk-virtual-list-holder" 
                  style={{
                    maxHeight: '256px', 
                    overflowY: height * (children.length ? children.length : 1) > 256 ? 'scroll' : 'hidden', 
                    overflowAnchor: 'none', 
                    height: open ? `${height * (children.length ? children.length : 1)}px` : 0
                  }}>
                  <div>
                    <div className="wk-virtual-list-holder-inner" style={{display: 'flex', flexDirection: 'column'}}>
                      {
                        React.Children.map(children, (child: any) => {
                          return React.cloneElement(child, {
                            onClick: this.handleClick,
                            checked: typeof value === 'object' ?
                            value.includes(child.props.value) :
                            child.props.value === value,
                            disabled: child.props.disabled,
                            mode: mode
                          })
                        })
                      }
                    </div>
                  </div>
                </div>
              }
              {
                !children &&
                <div>暂无数据</div>
              }
            </div>
          </div>
        </div>
      </div>
    )
  }

  componentDidMount() {
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

  render() {
    return null;
  }
}

export default SelectBox;