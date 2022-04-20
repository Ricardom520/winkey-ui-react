import React, { Component, ReactNode } from 'react'
import ReactDOM from 'react-dom'

import './index.less'

interface DropdownProps {
  overlay: ReactNode
  trigger?: ['click'] | ['hover']
  overlayClassName?: string
  overlayStyle?: React.CSSProperties
}

interface DropdownState {
  top: number
  left: number
  width: number
  open: boolean
}

class Dropdown extends Component<DropdownProps, DropdownState> {
  private poupNode

  static defaultProps = {
    trigger: ['hover']
  }

  constructor(props) {
    super(props)

    this.state = {
      top: -999,
      left: -999,
      width: 0,
      open: false
    }
  }

  componentDidMount() {
    ReactDOM.unstable_renderSubtreeIntoContainer(this, this.retContent(), this.retContainer())
  }

  componentDidUpdate() {
    ReactDOM.unstable_renderSubtreeIntoContainer(this, this.retContent(), this.retContainer())
  }

  UNSAFE_componentWillUpdate(_, nextState) {
    const { open } = nextState
    const { trigger } = this.props

    if (trigger[0] === 'click') {
      if (open) {
        document.addEventListener(
          'click',
          (e: any) => {
            if (e.target.className.indexOf('wk-dropdown') === -1) {
              this.setState({
                open: false
              })
            }
          },
          true
        )
      } else {
        document.removeEventListener('click', () => {}, false)
      }
    }
  }

  retContent() {
    const { top, left, width, open } = this.state
    const { overlay, overlayClassName, overlayStyle } = this.props

    return (
      <div
        style={{
          minWidth: width,
          top,
          left,
          ...overlayStyle
        }}
        className={
          'wk-dropdown' + (overlayClassName || '') + ' ' + (!open ? ' wk-dropdown-hidden' : '')
        }
        onMouseLeave={this.handleOnMouseLeave}
      >
        {overlay &&
          React.Children.map(overlay, (child: any, n: number) => {
            return React.cloneElement(child, {
              mode: 'vertical',
            })
          })}
      </div>
    )
  }

  retContainer() {
    if (!this.poupNode) {
      const popupNode = document.createElement('div')
      popupNode.style.position = 'absolute'
      popupNode.style.top = '0px'
      popupNode.style.left = '0px'
      popupNode.style.width = '100%'

      this.poupNode = popupNode
      document.body.appendChild(popupNode)
    }

    return this.poupNode
  }

  handleClick = (e) => {
    const { trigger } = this.props

    if (trigger[0] === 'click') {
      this.setState({
        left: e.target.getBoundingClientRect().left,
        top: e.target.getBoundingClientRect().top + e.target.offsetHeight + 5,
        width: e.target.offsetWidth,
        open: true
      })
    }
  }

  handleOnMouseEnter = (e) => {
    const { trigger } = this.props

    if (trigger[0] === 'hover') {
      this.setState({
        left: e.target.getBoundingClientRect().left,
        top: e.target.getBoundingClientRect().top + e.target.offsetHeight + 5,
        width: e.target.offsetWidth,
        open: true
      })
    }
  }

  handleOnMouseLeave = () => {
    const { trigger } = this.props

    if (trigger[0] === 'hover') {
      this.setState({
        open: false
      })
    }
  }

  render() {
    const { children } = this.props

    return (
      <>
        {children &&
          React.Children.map(children, (child: any, n: number) => {
            return React.cloneElement(child, {
              onClick: this.handleClick,
              onMouseEnter: this.handleOnMouseEnter
            })
          })}
      </>
    )
  }
}

export default Dropdown
