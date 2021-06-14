import React, { ReactNode } from 'react';

import "./index.less";

interface ColProps {
  span: number;
  children: ReactNode;
  className?: string;
  gutter?: number | Object;
  offset?: number;
}

interface ColState {
  style: React.CSSProperties
}

const ColClass = {
  col4: "wk-col-4",
  col14: "wk-col-14",
  col24: 'wk-col-24',
  col6 : 'wk-col-6',
  col8: 'wk-col-8',
  col12: 'wk-col-12',
  col16:'wk-col-16',
  offset8: ' wk-col-offset-8',
  offset6: ' wk-col-offset-6',
  offset4: " wk-col-offset-4",
  '': ''
}

export default class Col extends React.Component<ColProps, ColState> {
  static defaultProps = {
    span: 24,
    offset: ''
  }

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
          style: {marginLeft: `${gutter / 2}px`, marginRight: `${gutter / 2}px`}
        })
      } else if (Object.prototype.toString.call(gutter) === '[object Array]') {
        this.setState({
          style: {margin: `${gutter[1] / 2}px ${gutter[0] / 2}px ${gutter[1] / 2}px`}
        })
      }
    }
  }

  render () {
    const { span, children, className, gutter, offset } = this.props;
    const { style } = this.state;

    return (
      <div 
        style={gutter ? style : null}
        className={
          (span ? ColClass[`col${span}`] : "") +
          (className ? ` ${className}` : '') +
          (offset ? ColClass[`offset${offset}`] : '')
        }
      >
        {children}
      </div>
    )
  }
}