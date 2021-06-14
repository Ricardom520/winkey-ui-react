import React from 'react';
import ReactDOM from 'react-dom';

import "./index.less";

interface DropdownProps {
  left: number;
  top: number;
  dataSource: any[];
  visible: boolean;
  onClick: (val, index) => void;
}

export default class Dropdown extends React.Component<DropdownProps> {
  private poupNode;

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
    const { top, left, dataSource, visible, onClick } = this.props;

    return (
      <div style={{position: 'absolute'}}>
        <div 
          className={
            "wk-tabs-dropdown" +
            (visible ? "" : " wk-tabs-dropdown-hidden")
          }
          style={{minWidth: '46px', top: top, left: left }}
        >
          <ul className={
            "wk-tabs-dropdown-menu" +
            " wk-tabs-dropdown-menu-root" +
            " wk-tabs-dropdown-menu-vertical"
          }>
            {
              dataSource.map((i, n) => {
                return (
                  <li key={n} className={
                    "wk-tabs-dropdown-menu-item"
                  } onClick={() => onClick(i.key, i.index)}>{i.tab}</li>
                )
              })
            }
          </ul>
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