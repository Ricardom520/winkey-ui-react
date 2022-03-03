import React from 'react'
import ReactDOM from 'react-dom'

import Button from '../Button'
import './index.less'

interface PopconfirmBoxProps {
  left: number
  top: number
  open: boolean
  placement: string
  title: string
  okText: string
  cancelText: string
}

const popconfirmBoxClass = {
  top: ' wk-popover-placement-top',
  topLeft: ' wk-popover-placement-topLeft'
}

export default class PopconfirmBox extends React.Component<PopconfirmBoxProps> {
  private poupNode

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
    const { left, top, open, placement, title, okText, cancelText } = this.props

    return (
      <div
        className={
          'wk-popover' + popconfirmBoxClass[placement] + (!open ? ' wk-popover-hidden' : '')
        }
        style={{
          left: `${left || -9999}px`,
          top: `${top || -9999}px`,
          transformOrigin: `50% 104px`
        }}
      >
        <div className='wk-popover-content'>
          <div className='wk-popover-arrow'>
            <span className='wk-popover-arrow-content'></span>
          </div>
          <div className='wk-popover-inner'>
            <div className='wk-popover-inner-content'>
              <div className='wk-popover-message'>
                <span className='wk-popover-message-icon'>
                  <i className='iconfont wk-icon-sigh' />
                </span>
                <div className='wk-popover-message-title'>{title}</div>
              </div>
              <div className='wk-popover-buttons'>
                <Button size='small'>
                  <span>{cancelText}</span>
                </Button>
                <Button size='small' type='primary'>
                  <span>{okText}</span>
                </Button>
              </div>
            </div>
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
