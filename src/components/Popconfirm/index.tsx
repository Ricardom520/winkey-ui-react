import React, { ReactNode } from 'react'

import PopconfirmBox from './PopconfirmBox'

interface PopconfirmProps {
  title: string
  onConfirm: Function
  onCancel: Function
  okText: string
  cancelText: string
  children?: ReactNode
  placement?: string
}

interface PopconfirmState {
  left: number
  top: number
  open: boolean
}

export default class Popconfirm extends React.Component<PopconfirmProps, PopconfirmState> {
  private wkPopconfirm
  private wkPopconfirmBox

  static defaultProps = {
    placement: 'top',
    title: 'Title',
    okText: '确定',
    cancelText: '取消'
  }

  constructor(props) {
    super(props)

    this.state = {
      left: 0,
      top: 0,
      open: false
    }

    this.wkPopconfirmBox = React.createRef()
  }

  attachRef = (node) => {
    this.wkPopconfirm = node
  }

  handleClick = async () => {
    const { placement } = this.props
    const target: any = this.wkPopconfirm._reactInternals.child.stateNode
    const targetBox: any = this.wkPopconfirmBox.current.poupNode.childNodes[0]

    await this.setState({
      open: !this.state.open
    })

    const leftMap = {
      topLeft: target.offsetLeft + target.scrollLeft,
      top:
        target.offsetLeft + target.scrollLeft - targetBox.clientWidth / 4 - target.clientWidth / 2
    }

    const topMap = {
      topLeft: target.offsetTop + target.scrollTop - targetBox.clientHeight - 5,
      top: target.offsetTop + target.scrollTop - targetBox.clientHeight - 5
    }

    await this.setState({
      left: leftMap[placement],
      top: topMap[placement]
    })
  }

  render() {
    const { children, placement, title, okText, cancelText } = this.props
    const { left, top, open } = this.state

    return (
      <>
        {React.Children.map(children, (child: any) => {
          return React.cloneElement(child, {
            onClick: this.handleClick,
            ref: this.attachRef
          })
        })}
        <PopconfirmBox
          title={title}
          okText={okText}
          cancelText={cancelText}
          placement={placement}
          left={left}
          top={top}
          ref={this.wkPopconfirmBox}
          open={open}
        />
      </>
    )
  }
}
