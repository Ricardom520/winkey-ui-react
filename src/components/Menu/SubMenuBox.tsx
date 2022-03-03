import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import './submenuBox.less'

interface SubMenuBoxProps {
  top: number
  left: number
  width: number
  menudownStyle?: React.CSSProperties
  open: boolean
}

interface SubMenuBoxState {
  activeKey: string
}

class SubMenuBox extends Component<SubMenuBoxProps, SubMenuBoxState> {
  private poupNode

  constructor(props) {
    super(props)

    this.state = {
      activeKey: undefined
    }
  }

  handleChange = (key: string) => {
    console.log(key)
    this.setState({
      activeKey: key
    })
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

  retContent() {
    const { top, left, width, menudownStyle, open, children } = this.props
    const { activeKey } = this.state

    return (
      <div
        className={
          'wk-menu-submenu' +
          ' wk-menu-submenu-popup' +
          ' wk-menu' +
          ' wk-menu-light' +
          ' wk-menu-submenu-placement-bottomleft' +
          (!open ? ' wk-menu-submenu-hidden' : '')
        }
        style={{
          minWidth: '120px',
          width: `${width}px`,
          top: top,
          left: left,
          ...menudownStyle
        }}
      >
        <ul className={'wk-menu' + ' wk-menu-sub' + ' wk-menu-vertical'}>
          {children &&
            React.Children.map(children, (child: any, n: number) => {
              console.log(child)
              return React.cloneElement(child, {
                onClick: this.handleChange,
                selectedKeys: activeKey ? [activeKey] : []
              })
            })}
        </ul>
      </div>
    )
  }

  componentDidMount() {
    ReactDOM.unstable_renderSubtreeIntoContainer(this, this.retContent(), this.retContainer())
  }

  componentDidUpdate() {
    ReactDOM.unstable_renderSubtreeIntoContainer(this, this.retContent(), this.retContainer())
  }

  render() {
    return null
  }
}

export default SubMenuBox
