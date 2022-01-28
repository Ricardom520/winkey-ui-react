import { Input, Select } from '@/components'
import React, { useState, useEffect } from 'react'

import './index.less'

interface InputControlProps {
  value: string
  title?: string
  onConfrim?: (val) => void
  onAdd?: () => void
  onReduce?: () => void
  type?: 'input' | 'select'
}

const inputWays = [
  {
    label: 'input',
    value: 'input'
  },
  {
    label: 'select',
    value: 'select'
  },
  {
    label: 'radio',
    value: 'radio'
  },
  {
    label: 'datepicker',
    value: 'datepicker'
  },
  {
    label: 'checkbox',
    value: 'checkbox'
  }
]

const InputControl: React.FC<InputControlProps> = (props) => {
  const { value, title, onConfrim, onAdd, onReduce, type = 'input' } = props
  const [valueState, setValueState] = useState<string>()
  const [focus, setFocus] = useState<boolean>(false)

  const handleChange = (e) => {
    setValueState(e.target.value)
  }

  const handleConfirm = () => {
    setFocus(false)

    if (onConfrim) {
      onConfrim(valueState)
    }
  }

  const inputs = {
    input: <Input value={valueState} onChange={handleChange} onBlur={handleConfirm} />,
    select: <Select 
      value={valueState} 
      options={inputWays}
      onChange={val => setValueState(val)} 
    />
  }

  const handleAddConlum = () => {
    onAdd()
  }

  const handleDeleteConlum = () => {
    onReduce()
  }

  useEffect(() => {
    setValueState(value)
  }, [value])

  return (
    <div className='inputControl'>
      {title && `${title}：`}
      {
        !focus &&
        <p className={title ? 'inputControl-value' : ''}>{valueState}</p>
      }
      {
        focus && inputs[type]
      }
      <div className='inputControl-btn'>
        {
          !focus &&
          <i className='iconfont wk-icon-write' onClick={() => setFocus(true)} />
        }
        {
          focus &&
          <i className='iconfont wk-icon-hock' onClick={handleConfirm} />
        }
        <i className='iconfont wk-icon-dustbin' onClick={handleDeleteConlum} />
        <i className='iconfont wk-icon-add' onClick={handleAddConlum} />
      </div>
    </div>
  )
}

export default InputControl