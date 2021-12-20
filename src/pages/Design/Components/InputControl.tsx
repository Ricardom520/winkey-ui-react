import { Input } from '@/components'
import React, { useState, useEffect } from 'react'

import './index.less'

interface InputControlProps {
  value: string
  title?: string
  onConfrim?: (val) => void
}

const InputControl: React.FC<InputControlProps> = (props) => {
  const { value, title, onConfrim } = props
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

  useEffect(() => {
    setValueState(value)
  }, [])

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
        <i className='iconfont wk-icon-dustbin' />
      </div>
    </div>
  )
}

export default InputControl