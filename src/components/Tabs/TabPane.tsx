import React, { ReactNode } from 'react';

import TabsContext from './TabsContext';

interface TabPaneProps {
  tab: ReactNode;
  disabled?: boolean;
}

export default class TabPane extends React.Component<TabPaneProps> {
  private _reactInternals;

  handeClick = (setActiveKey, key) => {
    const { disabled } = this.props;

    if (disabled) {
      return;
    }
    setActiveKey(key)
  }

  render() {
    const { tab, disabled } = this.props;

    return (
      <TabsContext.Consumer>
        {context => {
          const { activeKey, setActiveKey } = context;

          return (
            <div
              onClick={() => this.handeClick(setActiveKey, this._reactInternals.key)} 
              className={
                "wk-tabs-tab" +
                ( activeKey === this._reactInternals.key ? " wk-tabs-tab-active" : "") +
                ( disabled ? " wk-tabs-tab-disabled" : "")
              }
            >
              <div className="wk-tabs-tab-btn">
                {tab}
              </div>
            </div>
          )
        }}
      </TabsContext.Consumer>
    )
  }
}