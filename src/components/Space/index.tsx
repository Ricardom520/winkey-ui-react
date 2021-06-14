import React, { ReactNode } from 'react';

import "./index.less";

interface SpaceProps {
  children?: ReactNode;
  align?: "start" | "center" | "end" | "baseline";
  direction?: "vertical" | "horizontal",
  size?: "small" | "middle" | "large" | number;
  split?: ReactNode;
}

interface SpaceState {
  children: any;
}

const spaceClass = {
  start: " wk-space-align-start",
  center: " wk-space-align-center",
  end: " wk-space-align-end",
  baseline: " wk-space-align-baseline",
  vertical: " wk-space-vertical",
  horizontal: " wk-space-horizontal",
  "": ""
}

const spaceMargin = {
  small: "8px",
  middle: "16px",
  large: "24px"
}

export default class Space extends React.Component<SpaceProps, SpaceState> {
  static defaultProps = {
    align: 'center',
    direction: "horizontal",
    size: "small"
  }

  constructor(props) {
    super(props);

    this.state = {
      children: []
    }
  }

  componentDidMount() {
    if (Array.prototype.toString.call(this.props.children) === '[object Object]') {
      this.state.children.push(this.props.children);
      this.setState({
        children: this.state.children
      })
    } else {
      this.setState({
        children: this.props.children
      })
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({
      children: []
    }, () => {
      if (Array.prototype.toString.call(nextProps.children) === '[object Object]') {
        this.state.children.push(nextProps.children);
        this.setState({
          children: this.state.children
        })
      } else {
        this.setState({
          children: nextProps.children
        })
      }
    })
  }

  render() {
    const { align, direction, size, split } = this.props;
    const { children } = this.state;

    return (
      <div 
        className={
          "wk-space" +
          spaceClass[align] +
          spaceClass[direction]
        }
      >
        {
          Array.prototype.slice.call(children).map((i, n) => {
            return (
              <React.Fragment key={`${new Date()}-${n}`} >
                <div 
                  className="wk-space-item" 
                  style={{[direction === 'horizontal' ? 'marginRight' : 'marginBottom']: (typeof size === 'string' ? spaceMargin[size] : `${size}px`)}}>
                  {i}
                </div>
                {
                  split && n !==  Array.prototype.slice.call(children).length - 1 &&
                  <div 
                    className="wk-space-item-split"
                    style={{[direction === 'horizontal' ? 'marginRight' : 'marginBottom']: (typeof size === 'string' ? spaceMargin[size] : `${size}px`)}}
                  >
                    {split}
                  </div>
                }
              </React.Fragment> 
            )
          })
        }
      </div>
    )
  }
}