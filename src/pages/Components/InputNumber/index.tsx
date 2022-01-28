import React, { useEffect } from 'react'
import { InputNumber } from '@/components';
import PageTitle from '../PageTitle';
import IntroduceBox from '../IntroduceBox';
import { HighlightCode } from '@/tool/func';
import InputNumberBaseMd from '@/assets/markdowns/InputNumber/base.md'

const InputNumberPage: React.FC = () => {
  const onChange = (value) => {
    console.log('changed', value);
  }

  useEffect(() => {
    HighlightCode()
  }, [])

  return (
    <div>
      <PageTitle title="Input输入框" description="通过鼠标或键盘输入内容，是最基础的表单域的包装。" />

      <IntroduceBox
        height={290}
        title="基本使用"
        description="基本使用。"
        demo={
          <div style={{marginBottom: '20px'}}>
            <InputNumber min={1} max={10} defaultValue={3} onChange={onChange} />
          </div>
        }
        markdown={
          <div className="gird-descrition" dangerouslySetInnerHTML={{ __html: InputNumberBaseMd.html }} />
        }
      />
    </div>
  )
}

export default InputNumberPage