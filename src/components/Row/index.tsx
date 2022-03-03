import React, { ReactNode } from 'react'

import Col from '../Col'
import './index.less'

interface RowProps {
  children: ReactNode
  className?: string
  gutter?: number | Object
  style?: React.CSSProperties
}

interface RowState {
  styleState: React.CSSProperties
}

export default class Row extends React.Component<RowProps, RowState> {
  constructor(props) {
    super(props)
    this.state = {
      styleState: null
    }
  }

  componentDidMount() {
    const { gutter } = this.props

    if (gutter) {
      if (typeof gutter === 'number') {
        this.setState({
          styleState: {
            marginLeft: `-${gutter / 2}px`,
            marginRight: `-${gutter / 2}px`
          }
        })
      } else if (Object.prototype.toString.call(gutter) === '[object Array]') {
        this.setState({
          styleState: {
            margin: `-${gutter[1] / 2}px ${gutter[0] / 2}px ${gutter[1] / 2}px`
          }
        })
      }
    }
  }

  render() {
    const { children, className, gutter, style = {} } = this.props
    const { styleState } = this.state

    return (
      <div
        style={gutter ? Object.assign(style, styleState) : style}
        className={'wk-row' + (className ? ` ${className}` : '')}
      >
        <>{children}</>
      </div>
    )
  }
}
