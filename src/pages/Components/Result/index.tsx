import React, { useEffect } from 'react'

import { HighlightCode } from '@/tool/func'
import PageTitle from '../PageTitle'
import IntroduceBox from '../IntroduceBox'

const ResultPage: React.FC = () => {
  useEffect(() => {
    HighlightCode()
  }, [])

  return (
    <div style={{ paddingBottom: '20px' }}>
      <PageTitle title='Result结果' description='用于反馈一系列操作任务的处理结果。' />

      <IntroduceBox
        height={690}
        title='Success'
        description='成功的结果。'
        demo={<div style={{ marginBottom: '20px' }} className='select-demo-item'></div>}
        // markdown={
        //   <div className="gird-descrition" dangerouslySetInnerHTML={{ __html: SelectBaseMd.html }} />
        // }
      />
    </div>
  )
}

export default ResultPage
