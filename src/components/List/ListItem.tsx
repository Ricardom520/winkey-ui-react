import React, { Component } from 'react';

import { ListItemProps, ListItemMetaProps } from './index';
import ListItemMeta from './ListItemMeta';
import "./index.less"

export default class ListItem extends Component<ListItemProps> {
  static Meta = ListItemMeta as React.ClassicComponentClass<ListItemMetaProps>
 
  render() {
    const { children, extra, require, arrow, flexDirection, onClick, className, name } = this.props;
    
    return (
      <div 
        id={name}
        className={
          "wk-list-item" + 
          (require ? ' wk-list-item-require' : '') + 
          (flexDirection === "column" ? " wk-list-item-col" : "") +
          (className ? ' ' + className : '')
        }
        onClick={onClick}
      >
        <div className="wk-list-item-content">
          {children}
        </div>
        <div className="wk-list-item-extra">
          {extra}
        </div>
        {
          arrow && <div className="wk-list-item-arrow" />
        }
      </div>
    )
  }
}