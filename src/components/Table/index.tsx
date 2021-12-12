import React, { Component, ReactNode } from 'react'
import { TableProps, TableState, Column, DataSource } from './interface'
import { Pagination, Spin, Checkbox, Radio } from '../index'

import './index.less'
import Empty from '../Empty'

const rowSelectionThType = (type) => {
  const map = {
    checkbox: <th className='wk-table-cell wk-table-selection-column'>
      <div className='wk-table-selection'>
        <Checkbox/>
      </div>
    </th>,
    radio: <th className='wk-table-cell wk-table-selection-column'></th>
  }

  return map[type]
}

const rowSelectionTdType  = (props, i, func1) => {
  const { type, getCheckboxProps } = props

  const map = {
    checkbox: <td className='wk-table-cell wk-table-selection-column'>
      <Checkbox disabled={getCheckboxProps(i).disabled} onChange={() => func1(i)} />
    </td>,
    radio: <td className='wk-table-cell wk-table-selection-column'>
      <Radio disabled={getCheckboxProps(i).disabled} onChange={() => func1(i)}/>
    </td>
  }
  return map[type]
}

class Table extends Component<TableProps, TableState> {
  static defaultProps = {
    pagination: true,
    loading: false,
    showEmpty: true
  }

  constructor(props) {
    super(props)

    this.state = {
      currentDataSource: [],
      currentPage: 1,
    }
  }

  componentDidMount() {
    const { dataSource = [] } = this.props

    if (dataSource && dataSource.length > 10) {
      const datas = dataSource.slice(0, 10)
      console.log(datas)
      this.setState({
        currentDataSource: datas
      })
    } else {
      this.setState({
        currentDataSource: dataSource
      })
    }
  }

  handleChange = (item: DataSource) => {
    console.log(item)
  }

  handleChangePage = (index) => {
    console.log(index)
    const { dataSource } = this.props
    const _start = (index - 1) * 10
    const _end = dataSource.length - _start > 10 ? 10 : dataSource.length
    const datas = dataSource.slice(_start, _end)
      console.log(datas)
      this.setState({
        currentDataSource: datas
      })
  }

  render() {
    const { columns = [], dataSource = [], rowSelection, pagination, loading, showEmpty } = this.props
    const { currentDataSource } = this.state
    console.log(rowSelection)
    console.log(loading)
    return (
      <div className='wk-table-wrapper'>
        <Spin spinning={loading}>
          <div className='wk-table'>
            <div className='wk-table-container'>
              <div className='wk-table-content'>
                <table style={{ tableLayout: 'auto' }}>
                  <colgroup/>
                  <thead className='wk-table-thead'>
                    <tr>
                      {
                        rowSelection && 
                        rowSelection.type &&
                        rowSelectionThType(rowSelection.type)
                      }
                      {
                        columns.map((i: Column, n: number) => {
                          return (
                            <th className='wk-table-cell' key={i.key || `th_${n}`}>{i.title}</th>
                          )
                        })
                      }
                    </tr>
                  </thead>
                  <tbody className='wk-table-tbody'>
                    {
                      dataSource.length !== 0 && currentDataSource.map((i: DataSource, n: number) => {
                        return (
                          <tr key={`tr_${n}`} className='wk-table-row'>
                            {
                              rowSelection &&
                              rowSelection.type &&
                              rowSelectionTdType(rowSelection, i, this.handleChange)
                            }
                            {
                              columns.map((j: Column, m: number) => {
                                return <td key={`tr_${n}_td_${m}`} className='wk-table-cell'>{i[j.dataIndex] ? j.render ? j.render(i[j.dataIndex], i) : i[j.dataIndex] : j.render && j.render(i, dataSource)}</td>
                              })
                            }
                          </tr>
                        )
                      })
                    }
                    {
                      dataSource.length === 0 && showEmpty &&
                      <tr className='wk-table-row'>
                        <td colSpan={columns.length} className='wk-table-cell'>
                          <Empty/>
                        </td>
                      </tr>
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {
            pagination && dataSource.length !== 0 &&
            <Pagination 
              type='table'
              pageSize={10}
              total={dataSource.length}
              onChange={this.handleChangePage}
            />
          }
        </Spin>
      </div>
    )
  }
}

export default Table