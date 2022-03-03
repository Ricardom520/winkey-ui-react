import React, { useEffect } from 'react'

import { Editor } from '@/components'
import { HighlightCode } from '@/tool/func'
import PageTitle from '../PageTitle'
import IntroduceBox from '../IntroduceBox'

const EditorPage: React.FC = () => {
  useEffect(() => {
    HighlightCode()
  }, [])

  return (
    <div>
      <PageTitle title='Editor富文本编译器' description='编译文本内容' />

      <IntroduceBox
        title='基础使用'
        description='富文本编译器基础使用'
        height={400}
        demo={
          <div style={{ paddingBottom: '20px' }}>
            <Editor />
          </div>
        }
        // markdown={
        //   <div className="show-html" dangerouslySetInnerHTML={{ __html: DividerBaseMd.html }} />
        // }
      />
    </div>
  )
}

export default EditorPage
