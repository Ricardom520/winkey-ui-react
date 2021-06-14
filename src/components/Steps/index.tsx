import React, { Component } from 'react';

import {
  StepsProps,
  StepsState
} from './interface';
import Step from './Step';
import './index.less';

const directionClassName = {
  horizontal: ' wk-steps-horizontal',
  vertical: ' wk-steps-vertical',
}

const sizeClassName = {
  default: '',
  small: ' wk-steps-small'
}

class Steps extends Component<StepsProps, StepsState> {
  static Step = Step;
  static defaultProps = {
    direction: "horizontal",
    size: 'default'
  }

  constructor(props) {
    super(props);

    this.state = {
      current: 0,
    }
  }

  componentDidMount() {
    const { current } = this.props;

    if (current !== undefined) {
      this.setState({
        current
      })
    }
  }

  handleChange = (current: number) => {
    console.log(current);
    if (this.props.onChange) {
      this.props.onChange(current);
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const { current } = nextProps;

    if (current !== undefined) {
      this.setState({
        current
      })
    }
  }

  render() {
    const { direction, children, size, progressDot, status } = this.props;
    const { current } = this.state;

    return (
      <div 
        className={
          'wk-steps' + 
          directionClassName[direction] +
          sizeClassName[size] +
          (progressDot ? ' wk-steps-label-vertical wk-steps-dot' : ' wk-steps-label-horizontal')
        }
      >
        {
          children && React.Children.map(children, (child: any, n : number) => {
            return React.cloneElement(child, {
              index: n,
              status: child.props.status || (
                current === n ? status || 'process' :
                (n < current ? 'finish' : 'wait')
              ),
              progressDot,
              onChange: () => this.handleChange(n)
            })
          })
        }
      </div>
    )
  }
}

export default Steps;