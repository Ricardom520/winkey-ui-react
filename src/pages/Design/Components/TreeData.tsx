import React, { useEffect, useState, ReactNode } from 'react'
import { toJS } from 'mobx'
import { useLocalStore } from 'mobx-react'
import { observer } from 'mobx-react-lite'

import { FocusElementBaseStruct } from '@/stores/EditorMange'
import store from '@/stores'
import { Tree } from '@/components'
import InputControl from './InputControl'
import { FormItemPlaceHolderMap } from '../datas'

interface TreeDataProps {
  data: any
  onChange: (val) => void
  type: string
  content: {
    [props: string]:
      | string
      | {
          [props: string]: string
        }
  }
  inputWay: 'input' | 'select'
  filterKey?: string[]
}

const TreeData: React.SFC<TreeDataProps> = observer((props) => {
  const { type, content, inputWay, data, onChange, filterKey } = props
  const localStore = useLocalStore(() => store)
  const { focusElement } = localStore.editorMange
  const [treeData, setTreeData] = useState([])

  const initTree = (dataSource) => {
    const arr = []

    dataSource.forEach((item: any, n) => {
      const children = []
      const obj: {
        title?: ReactNode
        key?: string
        children?: any
      } = {}

      Object.keys(item).forEach((_item: string) => {
        if (_item === 'title') {
          obj.title = (
            <InputControl
              onAdd={() => handleAddTreeData(n)}
              onReduce={() => handleReduceTreeData(n)}
              value={item[_item]}
              onConfrim={(val: string) => handleChangeTreeData(val, { index: n, key: _item })}
            />
          )
        } else if (filterKey && filterKey.includes(_item)) {
          obj.key = `columns_${n}`
          children.push({
            title: (
              <InputControl
                type={inputWay}
                onAdd={() => handleAddTreeData(n)}
                onReduce={() => handleReduceTreeData(n)}
                title={_item}
                value={item[_item]}
                onConfrim={(val: string) => handleChangeTreeData(val, { index: n, key: _item })}
              />
            ),
            key: `columns_kid_${_item}`
          })
        } else if (!filterKey) {
          obj.key = `columns_${n}`
          children.push({
            title: (
              <InputControl
                type={inputWay}
                onAdd={() => handleAddTreeData(n)}
                onReduce={() => handleReduceTreeData(n)}
                title={_item}
                value={item[_item]}
                onConfrim={(val: string) => handleChangeTreeData(val, { index: n, key: _item })}
              />
            ),
            key: `columns_kid_${_item}`
          })
        }
      })

      obj.children = children

      arr.push(obj)
    })

    return arr
  }

  const handleChangeTreeData = (val, { index, key }) => {
    if (key === 'type') {
      // 修改formItem的类型特殊对待
      data[index].placeholder = data[index].placeholder || FormItemPlaceHolderMap[val]
      data[index].options = data[index].options || [{ label: '标题', value: '选择项' }]
    }
    data[index][key] = val

    onChange(data)
  }

  const handleAddTreeData = (index: number) => {
    const _focusElement: FocusElementBaseStruct = toJS(focusElement)
    const arrs = _focusElement[type]

    arrs.splice(index + 1, 0, content)

    onChange(arrs)
  }

  const handleReduceTreeData = (index: number) => {
    const _focusElement: FocusElementBaseStruct = toJS(focusElement)
    const arrs = _focusElement[type]

    arrs.splice(index, 1)
    onChange(arrs)
  }

  useEffect(() => {
    const res = initTree(data)

    setTreeData(res)
  }, [data])

  return <Tree treeData={treeData} />
})

export default TreeData
