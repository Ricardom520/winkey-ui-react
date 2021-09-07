import React, { Component } from 'react';
import { ReactNode } from 'react';

import ListItem from './ListItem';

import './index.less';

interface ListProps {
  children?: any;
  size?: "small" | "large";
  header?: ReactNode;
  footer?: ReactNode;
  bordered?: boolean;
  dataSource?: any[];
  renderItem?: (item) => ReactNode;
  itemLayout?: "vertical" | "horizontal";
  split?: boolean;
}

export interface ListItemProps {
  children?: ReactNode;
  extra?: ReactNode;
  required?: boolean;
  arrow?: boolean;
  flexDirection?: "row" | "column";
  onClick?: (event) => void;
  className?: React.CSSProperties;
  name?: string;
}

export interface ListItemMetaProps {
  avatar?: string | ReactNode;
  title?: string | number | ReactNode;
  description?: string | number | ReactNode;
}

const ListClass = {
  small: " wk-list-sm",
  large: " wk-list-lg",
  vertical: " wk-list-vertical",
  horizontal: "",
  "": "",
}

export default class List extends Component<ListProps> {
  static Item = ListItem

  render() {
    const { children, size = "", header, footer, bordered, dataSource, renderItem, itemLayout = "", split } = this.props;

    return (
      <div className={
        "wk-list-items" +
        ListClass[size] +
        (bordered ? ' wk-list-bordered' : '') + 
        (split ? ' wk-list-split' : '') +
        ListClass[itemLayout]
      }>
        {
          header &&  <div className="wk-list-header">
            {header}
          </div>
        }
        <div
          className="wk-spin-nested-loading"
        >
          <div className="wk-spin-container">
            {
              renderItem && dataSource.map(i=>renderItem(i))
            }
            {children}
          </div>
        </div>
        {
          footer && <div className="wk-list-footer">
            {footer}
          </div>
        }
      </div>
    )
  }
}