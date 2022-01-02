import { Input } from '@/components'
import React, { useState, useEffect } from 'react'

import './index.less'

interface InputControlProps {
  value: string
  title?: string
  onConfrim?: (val) => void
  onAdd?: () => void
  onReduce?: () => void
}

const InputControl: React.FC<InputControlProps> = (props) => {
  const { value, title, onConfrim, onAdd, onReduce } = props
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
        focus &&
        <Input value={valueState} onChange={handleChange} onBlur={handleConfirm} />
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