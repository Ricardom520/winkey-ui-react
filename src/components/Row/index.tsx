import React, { ReactNode } from 'react';

import Col from '../Col';
import "./index.less";

interface RowProps {
  children: ReactNode;
  className?: string;
  gutter?: number | Object
}

interface RowState {
  style: React.CSSProperties
}

export default class Row extends React.Component<RowProps, RowState> {
  constructor(props) {
    super(props);
    this.state = {
      style: null,
    }
  }

  componentDidMount() {
    const { gutter } = this.props;

    if (gutter) {
      if (typeof gutter === 'number') {
        this.setState({
          style: {marginLeft: `-${gutter / 2}px`, marginRight: `-${gutter / 2}px`}
        })
      } else if (Object.prototype.toString.call(gutter) === '[object Array]') {
        this.setState({
          style: {margin: `-${gutter[1] / 2}px ${gutter[0] / 2}px ${gutter[1] / 2}px`}
        })
      }
    }
  }

  render () {
    const { children, className, gutter } = this.props;
    const { style } = this.state;

    return (
      <div 
        style={gutter ? style : null}
        className={
        "wk-row" +
        (className ? ` ${className}` : '')
      }>
        <>
          {
            children
          }
        </>
      </div>
    )
  }
}