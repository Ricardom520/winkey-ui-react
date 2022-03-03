import React, { Component } from 'react'
import { PaginationProps, PaginationState } from './interface'

import './index.less'

class Pagination extends Component<PaginationProps, PaginationState> {
  static defaultProps = {
    defaultCurrent: 1,
    defaultPageSize: 10,
    total: 0,
    size: 'default'
  }

  constructor(props) {
    super(props)

    this.state = {
      current: this.props.defaultCurrent,
      pageSize: this.props.defaultPageSize
    }
  }

  componentDidMount() {
    const { current } = this.props

    if (current) {
      this.setState({
        current
      })
    }
  }

  handleClickItem = (n: number) => {
    const { pageSize } = this.state
    const { onChange } = this.props
    if (onChange) {
      onChange(n, pageSize)
    }

    this.setState({
      current: n
    })
  }

  handleClickPrev = (disable: boolean) => {
    if (disable) return

    const { current, pageSize } = this.state
    const { onChange } = this.props
    const n = current - 1

    if (onChange) {
      onChange(n, pageSize)
    }

    this.setState({
      current: n
    })
  }

  handleClickNext = (disable: boolean) => {
    if (disable) return

    const { current, pageSize } = this.state
    const { onChange } = this.props
    const n = current + 1

    if (onChange) {
      onChange(n, pageSize)
    }

    this.setState({
      current: n
    })
  }

  render() {
    const { type, total, pageSize } = this.props
    const { current } = this.state
    const page = total ? Math.ceil(total / pageSize) : 1
    console.log(current)
    return (
      <ul
        className={
          'wk-pagination' +
          (type === 'table' ? ' wk-table-pagination wk-table-pagination-right' : '')
        }
      >
        <li className={'wk-pagination-prev' + (current === 1 ? ' wk-pagination-disabled' : '')}>
          <button
            className='wk-pagination-item-link'
            onClick={() => this.handleClickPrev(current === 1)}
          >
            <i className='iconfont wk-icon-arrow-left' />
          </button>
        </li>
        {new Array(page).fill(0).map((_, n: number) => {
          const index = n + 1
          return (
            <li
              key={`pg_${index}`}
              className={
                'wk-pagination-item' +
                ` wk-pagination-item-${index}` +
                (current === index ? ' wk-pagination-item-active' : '')
              }
              onClick={() => this.handleClickItem(index)}
            >
              {index}
            </li>
          )
        })}
        <li className={'wk-pagination-next' + (current === page ? ' wk-pagination-disabled' : '')}>
          <button
            className='wk-pagination-item-link'
            onClick={() => this.handleClickNext(current === page)}
          >
            <i className='iconfont wk-icon-arrow-right' />
          </button>
        </li>
      </ul>
    )
  }
}

export default Pagination
