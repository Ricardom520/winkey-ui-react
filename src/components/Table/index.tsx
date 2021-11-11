import React, { Component } from 'react'
import { TableProps, TableState, Column, DataSource } from './interface'

import './index.less'

class Table extends Component<TableProps, TableState> {
  constructor(props) {
    super(props)

    this.state = {
      dataIndexMap: []
    }
  }
  componentDidMount() {
    const { columns } = this.props
    const dataIndexMap = []
    console.log(columns)
    columns.forEach((i: Column) => {
      dataIndexMap.push(i.dataIndex)
    })

    this.setState({
      dataIndexMap
    })
  }

  render() {
    const { columns = [], dataSource = [] } = this.props
    const { dataIndexMap } = this.state
    console.log(dataIndexMap)
    return (
      <div className='wk-table'>
        <div className='wk-table-container'>
          <div className='wk-table-content'>
            <table style={{ tableLayout: 'auto' }}>
              <colgroup/>
              <thead className='wk-table-thead'>
                <tr>
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
                      <tr className='wk-table-row'>
                        {
                          Object.keys(i).map((key: string, m: number) => {
                            console.log(i)
                            return <td className='wk-table-cell'>{i[dataIndexMap[m]]}</td>
                          })
                        }
                      </tr>
                    )
                  })
                }
                <tr>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default Table