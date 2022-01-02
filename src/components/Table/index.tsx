import React, { Component, ReactNode } from 'react'
import { TableProps, TableState, Column, DataSource } from './interface'
import { Pagination, Spin, Checkbox, Radio } from '../index'

import './index.less'
import Empty from '../Empty'

const rowSelectionThType = (type, func1) => {
  const map = {
    checkbox: <th className='wk-table-cell wk-table-selection-column'>
      <div className='wk-table-selection'>
        <Checkbox onChange={func1} />
      </div>
    </th>,
    radio: <th className='wk-table-cell wk-table-selection-column'></th>
  }

  return map[type]
}

const rowSelectionTdType  = (props, i, n, selectedRowKeys, func1) => {
  const { type, getCheckboxProps } = props

  const map = {
    checkbox: <td className='wk-table-cell wk-table-selection-column'>
      <Checkbox checked={selectedRowKeys[n] === i.key} disabled={getCheckboxProps(i).disabled} onChange={() => func1(i)} />
    </td>,
    radio: <td className='wk-table-cell wk-table-selection-column'>
      <Radio checked={selectedRowKeys[0] === i.key} disabled={getCheckboxProps(i).disabled} onChange={() => func1(i)}/>
    </td>
  }
  return map[type]
}

class Table extends Component<TableProps, TableState> {
  static defaultProps = {
    dataSource: [],
    columns: [],
    pagination: true,
    loading: false,
    showEmpty: true
  }

  constructor(props) {
    super(props)

    this.state = {
      selectedRowKeys: [],
      selectedRows: [],
      total: 1,
      currentDataSource: [],
      currentPage: 1,
    }
  }

  componentDidMount() {
    const { dataSource = [] } = this.props

    if (dataSource.length) {
      const total = Math.floor(dataSource.length / 10)
    
      if (dataSource && dataSource.length > 10) {
        const datas = dataSource.slice(0, 10)
        this.setState({
          currentDataSource: datas
        })
      } else {
        this.setState({
          currentDataSource: dataSource
        })
      }

      this.setState({
        total
      })
    }
  }

  handleChange = (item: DataSource) => {
    let { selectedRowKeys, selectedRows } = this.state
    const { rowSelection: { onChange, type }  } = this.props

    if (type === 'checkbox') {
      selectedRowKeys.push(item.key)

      selectedRows.push(item)
    } else {
      selectedRows = [item]
      selectedRowKeys = [item.key]
    }

    if (onChange) {
      onChange(selectedRowKeys, selectedRows)
    }

    this.setState({
      selectedRowKeys,
      selectedRows
    })
  }

  handleAllChange = (e) => {
    const { dataSource, rowSelection: { onChange } } = this.props
    let { selectedRowKeys, selectedRows } = this.state

    if (e.target.checked) {

      dataSource.forEach((i: DataSource) => {
        selectedRowKeys.push(i.key)
        selectedRows.push(i)
      })
    } else {
      selectedRowKeys = []
      selectedRows = []
    }

    if (onChange) {
      onChange(selectedRowKeys, selectedRows)
    }

    this.setState({
      selectedRowKeys,
      selectedRows
    })
  }

  handleChangePage = (index) => {
    const { dataSource } = this.props
    const _start = (index - 1) * 10
    const _end = dataSource.length - _start > 10 ? 10 : dataSource.length
    const datas = dataSource.slice(_start, _end)

    this.setState({
      currentDataSource: datas
    })
  }

  render() {
    const { total, selectedRowKeys } = this.state
    const { columns = [], dataSource = [], rowSelection, pagination, loading, showEmpty } = this.props
    const { currentDataSource } = this.state

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
                        rowSelectionThType(rowSelection.type, this.handleAllChange)
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
                              rowSelectionTdType(rowSelection, i, n, selectedRowKeys, this.handleChange)
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