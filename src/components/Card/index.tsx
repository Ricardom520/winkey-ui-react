import React, { Component, ReactNode } from 'react';

import CardMeta from './Meta';
import './index.less';

interface CardProps {
  children?: ReactNode;
  title?: string | ReactNode | number;
  extra?: string | ReactNode | number;
  size?: "small";
  style?: React.CSSProperties
  bordered?: boolean;
  hoverable?: boolean;
  cover?: ReactNode;
  headStyle?: React.CSSProperties;
  bodyStyle?: React.CSSProperties;
}

const CardClass = {
  small: " wk-card-small",
  "": ""
}

export default class Card extends Component<CardProps> {
  static Meta = CardMeta;

  static defaultProps =  {
    bordered: true
  }

  render() {
    const { children, title, extra, size = "", style, bordered, hoverable, cover, headStyle, bodyStyle } = this.props;
    return (
      <div 
        className={
          "wk-card" +
          CardClass[size] +
          (bordered ? ' wk-card-bordered' : '') +
          (hoverable? ' wk-card-hoverable' : '')
        }
        style={style}
      >
        {
          (title || extra) && 
          <div className="wk-card-head" style={headStyle}>
            <div className="wk-card-wrapper">
              <div className="wk-card-head-title">
                {title}
              </div>
              <div className="wk-card-extra">
                {extra}
              </div>
            </div>
          </div>
        }
        {
          cover && 
          <div className="wk-card-cover">
            {cover}
          </div>
        }
        <div className="wk-card-body" style={bodyStyle}>
          {children}
        </div>
      </div>
    )
  }
}