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
      pageSize: this.props.defaultPageSize,
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

  render() {
    const { type, total } = this.props
    const { current } = this.state
    console.log(current)
    return (
      <ul 
        className={
          'wk-pagination' +
          (type === 'table' ? ' wk-table-pagination wk-table-pagination-right' : '')
        }
      >
        <li 
          className={
            'wk-pagination-prev' +
            (current === 1 ? ' wk-pagination-disabled' : '')
          }
        >
          <button className='wk-pagination-item-link'>
            <i className="iconfont wk-icon-arrow-left"/>
          </button>
        </li>
        {
          new Array(total || 1).fill(0).map((_, n: number) => {
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
          })
        }
        <li 
          className={
            'wk-pagination-next' +
            (current === (total || 1) ? ' wk-pagination-disabled' : '')
          }
        >
          <button className='wk-pagination-item-link'>
            <i className="iconfont wk-icon-arrow-right"/>
          </button>
        </li>
      </ul>
    )
  }
}

export default Pagination