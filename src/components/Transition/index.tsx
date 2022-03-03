import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import './index.less'

interface IProps {
  name: string
  time?: number
  enterTime?: number
  leaveTime?: number
}

/**
 * 组件进出动画
 */
const Transition: React.SFC<IProps> = ({ name, time = 400, enterTime, leaveTime, children }) => (
  <ReactCSSTransitionGroup
    transitionName={name}
    transitionEnterTimeout={enterTime || time}
    transitionLeaveTimeout={leaveTime || time}
  >
    {children}
  </ReactCSSTransitionGroup>
)

export default Transition
