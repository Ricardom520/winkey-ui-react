import React, { useEffect, useState, ReactNode } from 'react'

import { Tree } from '@/components'
import InputControl from './InputControl'

interface TreeDataProps {
  data: any
  onChange: (val) => void
}

const TreeData: React.SFC<TreeDataProps> = (props) => {
  const { data, onChange } = props
  const [treeData, setTreeData] = useState([])

  const handleChangeTreeData = (val, { index, key }) => {
    console.log(val)
    console.log(index)
    console.log(key)
    data[index][key] = val
    onChange(data)
  }

  useEffect(() => {
    const arr = []

    data.forEach((item: any, n) => {
      const children = []
      const obj: {
        title?: ReactNode
        key?: string
        children?: any
      } = {}

      Object.keys(item).forEach((_item: string) => {
        if (_item !== 'title') {
          children.push({
            title: <InputControl title={_item} value={item[_item]} onConfrim={(val: string) => handleChangeTreeData(val, {index: n, key: _item})} />,
            key: `columns_kid_${_item}`
          })
        } else {
          obj.title = <InputControl value={item[_item]} onConfrim={(val: string) => handleChangeTreeData(val, {index: n, key: _item})} />
          obj.key = `columns_${n}`
        }
      })

      obj.children = children

      arr.push(obj)
    })

    setTreeData(arr)
  }, [])

  return (
    <Tree
      treeData={treeData}
    />
  )
}

export default TreeData