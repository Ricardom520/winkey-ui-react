import React, { useEffect } from 'react'

import { Table } from '@/components'
import { HighlightCode } from '@/tool/func';
import PageTitle from '../PageTitle';
import IntroduceBox from '../IntroduceBox';
import { columns1, data1 } from './columns';

const TablePage: React.FC = () => {
  useEffect(() => {
    HighlightCode()
  }, [])

  return (
    <div>
      <PageTitle title="Table表格" description="展示行列数据。" />

      <IntroduceBox
        height={540}
        title="基本用法"
        description="简单的表格，最后一列是各种操作。"
        demo={
          <div style={{marginBottom: '20px'}}>
            <Table columns={columns1} dataSource={data1} />
          </div>
        }
        // markdown={
        //   <div className="gird-descrition" dangerouslySetInnerHTML={{ __html: TabsBaseMd.html }} />
        // }
      />
    </div>
  )
}

export default TablePage