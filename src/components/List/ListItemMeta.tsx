import React, { Component } from 'react';

import { ListItemMetaProps } from './index';
import './index.less';

export default class ListItemMeta extends Component<ListItemMetaProps> {
  render() {
    const { title, description, avatar } = this.props;

    return (
      <div className="wk-list-item-meta">
        <div className="wk-list-item-meta-avatar">
          {avatar}
        </div>
        <div className="wk-list-item-meta-content">
          <h4 className="wk-list-item-meta-title">{title}</h4>
          <div className="wk-list-item-meta-description">{description}</div>
        </div>
      </div>
    )
  }
}