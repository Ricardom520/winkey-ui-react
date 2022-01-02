import React, { useEffect, useState, ReactNode } from 'react'
import { toJS } from 'mobx'
import { useLocalStore } from 'mobx-react'
import { observer } from 'mobx-react-lite'

import { FocusElementBaseStruct } from '@/stores/EditorMange'
import store from '@/stores'
import { Tree } from '@/components'
import InputControl from './InputControl'

interface TreeDataProps {
  data: any
  onChange: (val) => void
}

const TreeData: React.SFC<TreeDataProps> = observer((props) => {
  const localStore = useLocalStore(() => store)
  const { focusElement } = localStore.editorMange
  const { data, onChange } = props
  const [treeData, setTreeData] = useState([])

  const handleChangeTreeData = (val, { index, key }) => {
    data[index][key] = val
    onChange(data)
  }

  const handleAddTreeData = (index: number) => {
    const _focusElement: FocusElementBaseStruct = toJS(focusElement)
    const columns = _focusElement.columns
    
    columns.splice(index + 1, 0, {title: '新增属性', dataIndex: '新增属性'})
    onChange(columns)
  }

  const handleReduceTreeData = (index: number) => {
    const _focusElement: FocusElementBaseStruct = toJS(focusElement)
    const columns = _focusElement.columns
    
    columns.splice(index, 1)
    onChange(columns)
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
            title: <InputControl 
                    onAdd={() => handleAddTreeData(n)} 
                    onReduce={() => handleReduceTreeData(n)}
                    title={_item} 
                    value={item[_item]} 
                    onConfrim={(val: string) => handleChangeTreeData(val, {index: n, key: _item})} 
                  />,
            key: `columns_kid_${_item}`
          })
        } else {
          obj.title = <InputControl 
                        onAdd={() => handleAddTreeData(n)} 
                        onReduce={() => handleReduceTreeData(n)}
                        value={item[_item]} 
                        onConfrim={(val: string) => handleChangeTreeData(val, {index: n, key: _item})} 
                      />
          obj.key = `columns_${n}`
        }
      })

      obj.children = children

      arr.push(obj)
    })

    setTreeData(arr)
  }, [data])

  return (
    <Tree
      treeData={treeData}
    />
  )
})

export default TreeData