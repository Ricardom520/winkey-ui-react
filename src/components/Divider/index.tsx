import React, { ReactNode } from 'react';

import "./index.less";

interface DividerProps {
  dashed?: boolean;
  type?: 'vertical' | 'horizontal',
  orientation?: 'left' | 'right',
  plain?: boolean;
  children?: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const DividerClass = {
  horizontal: ' wk-divider-horizontal',
  vertical: ' wk-divider-vertical',
  left: ' wk-divider-with-text-left',
  right: ' wk-divider-with-text-right',
  "": ''
}

export default class Divder extends React.Component<DividerProps> {
  static defaultProps = {
    type: 'horizontal',
    orientation: '',
  }

  render() {
    const { children, type, dashed, orientation, plain, className, style } = this.props;

    return (
      <div style={style} className={
        "wk-divider" +
        (DividerClass[type]) +
        (dashed ? ' wk-divider-dashed' : '') +
        (DividerClass[orientation]) + 
        (children ? ' wk-divider-with-text' : '') +
        (plain ? ' wk-divider-plain' : '') +
        (className? ` ${className}` : '')
      }>
        {
          children && <span className="wk-divider-inner-text">{children}</span>
        }
      </div>
    )
  }
}