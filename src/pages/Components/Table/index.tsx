import React, { useEffect, useState } from 'react'

import { Table, Radio, Divider } from '@/components'
import { HighlightCode } from '@/tool/func'
import PageTitle from '../PageTitle'
import IntroduceBox from '../IntroduceBox'
import { columns1, data1, columns2, data2 } from './columns'
import TableBaseMd from '@/assets/markdowns/Table/base.md'

interface DataType {
  key: React.Key
  name: string
  age: number
  address: string
}

const rowSelection2 = {
  onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows)
  },
  getCheckboxProps: (record: DataType) => ({
    disabled: record.name === 'Disabled User', // Column configuration not to be checked
    name: record.name
  })
}

const TablePage: React.FC = () => {
  const [selectionType2, setSelectionType2] = useState<'checkbox' | 'radio'>('checkbox')

  useEffect(() => {
    HighlightCode()
  }, [])

  return (
    <div>
      <PageTitle title='Table表格' description='展示行列数据。' />

      <IntroduceBox
        height={1640}
        title='基本用法'
        description='简单的表格，最后一列是各种操作。'
        demo={
          <div style={{ marginBottom: '20px' }}>
            <Table columns={columns1} dataSource={data1} />
          </div>
        }
        markdown={
          <div className='gird-descrition' dangerouslySetInnerHTML={{ __html: TableBaseMd.html }} />
        }
      />

      <IntroduceBox
        height={1640}
        title='可选择'
        description='第一列是联动的选择框。可以通过 rowSelection.type 属性指定选择类型，默认为 checkbox。'
        demo={
          <div style={{ marginBottom: '20px' }}>
            <Radio.Group
              onChange={(value) => {
                setSelectionType2(value)
              }}
              value={selectionType2}
            >
              <Radio value='checkbox'>Checkbox</Radio>
              <Radio value='radio'>radio</Radio>
            </Radio.Group>

            <Divider />

            <Table
              rowSelection={{
                type: selectionType2,
                ...rowSelection2
              }}
              columns={columns2}
              dataSource={data2}
            />
          </div>
        }
        markdown={
          <div className='gird-descrition' dangerouslySetInnerHTML={{ __html: TableBaseMd.html }} />
        }
      />
    </div>
  )
}

export default TablePage
