import React, { Component, ReactNode } from 'react'
import { TableProps, TableState, Column, DataSource } from './interface'
import { Pagination, Spin, Checkbox, Radio } from '../index'

import './index.less'

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
  console.log(getCheckboxProps)
  console.log(getCheckboxProps(i))
  console.log(getCheckboxProps(i).disabled)
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
  constructor(props) {
    super(props)

    this.state = {
  
    }
  }
  componentDidMount() {

  }

  handleChange = (item: DataSource) => {
    console.log(item)
  }

  render() {
    const { columns = [], dataSource = [], rowSelection } = this.props
    console.log(rowSelection)
    return (
      <div className='wk-table-wrapper'>
        <Spin spinning={dataSource.length === 0}>
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
                      dataSource.map((i: DataSource, n: number) => {
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
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <Pagination 
            type='table'
          />
        </Spin>
      </div>
    )
  }
}

export default Table