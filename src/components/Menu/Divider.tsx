import React, { Component } from 'react';

interface DividerProps {
  prefixClassName?: string;
}

class Divider extends Component<DividerProps> {
  static defaultProps = {
    prefixClassName: "wk"
  }
  
  render () {
    const { prefixClassName } = this.props;

    return (
      <li className={`${prefixClassName}-menu-item-divider`}/>
    )
  }
}

export default Divider;