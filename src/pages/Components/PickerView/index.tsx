import React, { useEffect } from 'react'

import { PickerView } from '@/components'
import { HighlightCode } from '@/tool/func'
import PageTitle from '../PageTitle'
import IntroduceBox from '../IntroduceBox'
import PickerViewBaseMd from '@/assets/markdowns/PickerView/base.md'
import PickerViewReadMd from '@/assets/markdowns/PickerView/read.md'

const datas = [
  [
    {
      label: '2013',
      value: '2013'
    },
    {
      label: '2014',
      value: '2014'
    }
  ],
  [
    {
      label: '春',
      value: '春'
    },
    {
      label: '夏',
      value: '夏'
    }
  ]
]

const PickerViewPage: React.FC = () => {
  useEffect(() => {
    HighlightCode()
  }, [])

  return (
    <div style={{ paddingBottom: '20px' }}>
      <PageTitle
        title='PickerView 选择器'
        description='PickerView 的功能类似于 Picker ，但它是直接渲染在区域中，而不是弹出窗口。'
      />

      <IntroduceBox
        height={650}
        title='基本'
        description='最简单的用法。'
        demo={
          <div style={{ marginBottom: '20px' }}>
            <PickerView data={datas} value={['2014', '春']} />
          </div>
        }
        markdown={
          <div
            className='gird-descrition'
            dangerouslySetInnerHTML={{ __html: PickerViewBaseMd.html }}
          />
        }
      />

      <IntroduceBox
        height={650}
        title='API'
        table={
          <div
            className='gird-descrition'
            dangerouslySetInnerHTML={{ __html: PickerViewReadMd.html }}
          />
        }
      />
    </div>
  )
}

export default PickerViewPage
