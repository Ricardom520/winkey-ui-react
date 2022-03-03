import React from 'react'
import { Table } from '@/components'

import '../index.less'

const TableTml = () => {
  return (
    <div className='base_demo'>
      <Table
        columns={[
          {
            title: 'table'
          },
          {
            title: '属性1'
          },
          {
            title: '属性2'
          }
        ]}
        dataSource={[]}
        pagination={false}
        showEmpty={false}
      />
    </div>
  )
}

export default TableTml
