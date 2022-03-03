import React, { Component, ReactNode } from 'react'

import TooltipItem from './Tooltip'

interface TooltipProps {
  title: ReactNode
}

interface TooltipState {
  top: number
  left: number
  open: boolean
}

class Tooltip extends Component<TooltipProps, TooltipState> {
  constructor(props) {
    super(props)

    this.state = {
      top: -999,
      left: -999,
      open: false
    }
  }

  componentDidMount() {
    const wkTooltip: any = this.refs.wkTooltip

    if (wkTooltip) {
      const element = wkTooltip.getBoundingClientRect()

      this.setState({
        top: element.top - 44,
        left: element.left + wkTooltip.offsetWidth / 4
      })
    }
  }

  handleMouseEnter = (e) => {
    this.setState({
      open: true
    })
  }

  handleMouseLeave = () => {
    document.onmousemove = (e: any) => {
      const className: string = e.target.className

      if (className.indexOf('wk-tooltip') === -1) {
        this.setState({
          open: false
        })

        document.onmousemove = null
      }
    }
  }

  render() {
    const { children, title } = this.props
    const { left, top, open } = this.state

    return (
      <>
        {React.Children.map(children, (child: any) => {
          return React.cloneElement(child, {
            ref: 'wkTooltip',
            onMouseEnter: this.handleMouseEnter,
            onMouseLeave: this.handleMouseLeave
          })
        })}
        <TooltipItem left={left} top={top} title={title} open={open} />
      </>
    )
  }
}

export default Tooltip
