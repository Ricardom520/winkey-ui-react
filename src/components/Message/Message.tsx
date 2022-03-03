import React, { Component } from 'react'

import './index.less'

interface MessageState {
  notices: any[]
}

const icons = {
  info: 'wk-icon-sigh wk-message-icon-info',
  success: 'wk-icon-hock wk-message-icon-success',
  error: 'wk-icon-fail wk-message-icon-error',
  warning: 'wk-icon-sigh wk-message-icon-warning',
  loading: 'wk-icon-loading-line-round wk-message-icon-loading'
}

export default class Message extends Component<any, MessageState> {
  private transitionTime: number

  constructor(props) {
    super(props)

    this.transitionTime = 300

    this.state = {
      notices: []
    }
  }

  getNoticeKey() {
    const { notices } = this.state
    return `notice-${new Date().getTime()}-${notices.length}`
  }

  async addNotice(notice) {
    const { notices } = this.state
    notice.key = this.getNoticeKey()
    notices.push(notice) // 展示所有的提示
    // notices[0] = notice; // 仅展示最后一个提示

    this.setState({
      notices
    })

    if (notice.duration > 0) {
      setTimeout(() => {
        this.removeNotice(notice.key)
      }, notice.duration)
    }

    return () => this.removeNotice(notice.key)
  }

  removeNotice(key) {
    const { notices } = this.state
    this.setState({
      notices: notices.filter((notice) => {
        if (notice.key === key) {
          if (notice.onClose) setTimeout(notice.onClose, this.transitionTime)
          return false
        }
        return true
      })
    })
  }

  render() {
    const { notices } = this.state

    return (
      <div className='wk-message'>
        {notices.map((notice, n) => {
          return (
            <div key={`${n}-message`}>
              <div className='wk-message-notice'>
                <div className='wk-message-notice-content'>
                  <div className='wk-message-custom-content'>
                    <i className={`wk-message-icon iconfont ${icons[notice.type]}`}></i>
                    <span>{notice.content}</span>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}
