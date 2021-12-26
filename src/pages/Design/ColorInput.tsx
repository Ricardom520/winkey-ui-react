import React, { useState } from 'react'
import { SketchPicker } from 'react-color'
import { Dropdown, Input } from '@/components'

interface ColorInputProps {
  value: string
}

const ColorInput: React.SFC<ColorInputProps> = (props) => {
  const { value } = props
  const [color, setColor] = useState<string>('')

  return (
    <Dropdown overlay={<SketchPicker color={color} onChange={setColor} />} trigger={['click']}>
      <Input placeholder='请输入宽度' value={value || '#000'}/>
    </Dropdown>
  )
}

export default ColorInput