import React, { Component, ReactNode } from 'react'
import ReactDOM from 'react-dom'

import './index.less'

interface TooltipItemProps {
  top: number
  left: number
  title: ReactNode
  open: boolean
}

class TooltipItem extends Component<TooltipItemProps> {
  private poupNode

  constructor(props) {
    super(props)
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
    const { top, left, title, open } = this.props

    return (
      <div>
        <div
          style={{ top: top + 'px', left: left + 'px' }}
          className={
            'wk-tooltip' + ' wk-tooltip-placement-top' + (!open ? ' wk-tooltip-hidden' : '')
          }
        >
          <div className='wk-tooltip-content'>
            <div className='wk-tooltip-arrow'>
              <span className='wk-tooltip-arrow-content'></span>
            </div>
            <div className='wk-tooltip-inner'>{title}</div>
          </div>
        </div>
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

export default TooltipItem
