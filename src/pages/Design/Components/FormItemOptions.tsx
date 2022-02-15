import React, { useEffect, useState } from 'react'
import InputControl from './InputControl'
import { LabelValue } from './interface'

import './index.less'

interface FormItemOptionsProps {
  datas: LabelValue[]
  onChange?: (val) => void
}

const FormItemOptions: React.FC<FormItemOptionsProps> = (props) => {
  const { datas, onChange } = props
  const [options, setOptions] = useState<LabelValue[]>(datas)

  const handleAdd = (index: number) => {
    options.splice(index + 1, 0, {
      label: '标题',
      value: '对应值'
    })

    setOptions(Object.assign([], options))
  }

  const handleDelte = (index: number) => {
    options.splice(index, 1)

    setOptions(Object.assign([], options))
  }

  const handleChange = (key: 'label' | 'value', index, val: string) => {
    options[index][key] = val

    setOptions(Object.assign([], options))
  }

  useEffect(() => {
    if (onChange) {
      console.log(options)
      onChange(options)
    }
  }, [options])

  return (
    <div className='formItemOptions-box'>
      <ul className='formItemOptions-content'>
        {
          options.map((item: LabelValue, index: number) => {
            return (
              <li className='formItemOptions-item' key={`option_${index}`}>
                <span className='formItemOptions-item__index'>{index + 1}</span>
                <div className='formItemOptions-item__content'>
                  <InputControl title='label' value={item.label} deleteabled={false} addabled={false} onConfrim={(val) => handleChange('label', index, val)} />
                  <InputControl title='value' value={item.value} deleteabled={false} addabled={false} onConfrim={(val) => handleChange('value', index, val)}/>
                </div>
                {
                  options.length !== 1 && <span className='iconfont wk-icon-dustbin' onClick={() => handleDelte(index)} />
                }
                <span className='iconfont wk-icon-add' onClick={() => handleAdd(index)} />
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default FormItemOptions