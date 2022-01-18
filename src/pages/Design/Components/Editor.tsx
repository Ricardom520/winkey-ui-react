import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { toJS } from 'mobx'
import { useLocalStore } from 'mobx-react'
import { observer } from 'mobx-react-lite'

import { ElementStruct } from '@/stores/EditorMange'
import BgTable from './BgTable'
import AdditionalTool from './AdditionalTool'
import store from '@/stores'
import './index.less'
import { Card, Form, Table, Input, Select, Radio, Checkbox, DatePicker } from '@/components'
import EmptyPlaceholder from './EmplyPlaceholder'
import { HandleNextNodeId } from '@/tool/utils'

const FormTypeMap = [
  'input'
]

interface ParentAttributes {
  type: string
  layout?: {
    labelCol?: { span: number },
    wrapperCol?: { span: number },
  }
}

const Editor: React.FC = observer((props) => {
  const localStore = useLocalStore(() => store)
  const { elements, focusElement } = localStore.editorMange
  const [width, setWidth] = useState<number>(0)
  const [height, setHeight] = useState<number>(0)
  const [elementsObjClone, setElementsObjClone] = useState<ElementStruct[]>()

  const handleFocusClick = (item: ElementStruct) => {
    localStore.editorMange.setFocusElement(item)
  }

  const handleDeleteItem = async (id: string) => {
    const paths = id.split('_')
    const _zIndex: number = paths.length - 2
    const _index: number = parseInt(paths[paths.length - 1])

    const deepTreeData = (arr: ElementStruct, zIndex: number) => {
      if (zIndex === _zIndex) {
        if (_index === 0) {
          // 如果只有一个元素，则清空children
          arr.children = []
        } else {
          const __index = 2 * _index + 1
          arr.children.splice(__index, 2)

          HandleNextNodeId(__index, arr.children, false)
        }

        localStore.editorMange.setElementsObj(elementsObjClone)
        localStore.editorMange.setFocusElement(null)
        return
      }

      deepTreeData(arr[paths[zIndex]], zIndex + 1)
    }

    deepTreeData(elementsObjClone[paths[1]], 1)
  }

  const handleMoveItem = (id: string, event: MouseEvent) => {
    const target = document.getElementById(id)
    const copyElement: any = target.cloneNode(true)

    copyElement.style.position = "absolute"
    copyElement.style.zIndex = '2'
    copyElement.style.width = target.clientWidth + 'px'
    copyElement.style.top = event.clientY - 36 + "px"
    copyElement.style.left = event.clientX + 12 + "px"
    copyElement.style.pointerEvents = "none"

    document.body.appendChild(copyElement)

    window.onmousemove = (e) => {
      copyElement.style.top = e.clientY - 36 + "px"
      copyElement.style.left = e.clientX + 12 + "px"
    }

    handleDeleteItem(id)
  }

  const judgeIsForm = (arr: ElementStruct[]) => {
    for (let i = 0; i < arr.length; i++) {
      if (FormTypeMap.indexOf(arr[i].type) > -1) {
        return true
      }
    }

    return false
  }

  const instantiateElement = (arr: ElementStruct, zIndex, parent?: ParentAttributes) => {
    if (!arr) {
      return null
    }

    if (arr.type === 'block') {
      return <div 
        id={arr.id}
        data-alt={`${arr.id}`}
        className={focusElement ? focusElement.id === arr.id ? 'focusElement' : '' : ''}
        style={{
          minWidth: arr.minWidth, 
          minHeight: arr.minHeight,
          padding: '20px 40px 20px 40px',
          backgroundColor: arr.backgroundColor
        }} 
        key={arr.id}>
          {
            arr.children && arr.children.map((item: ElementStruct) => {
              return instantiateElement(item, zIndex + 1)
            })
          }
        </div>
    } else if (arr.type === 'card') {
      return (
        <div 
          id={arr.id}
          data-alt={`${arr.id}`} 
          key={arr.id} 
          className={focusElement ? focusElement.id === arr.id ? 'focusElement' : '' : ''}
          onDoubleClick={() => handleFocusClick(arr)}
        >
          {
            focusElement && focusElement.id === arr.id && <AdditionalTool id={arr.id} onDelete={handleDeleteItem} onMove={handleMoveItem} />
          }
          <Card title={arr.title}>
            {
              arr.children && 
              arr.children.map((item) => {
                return instantiateElement(item, zIndex + 1)
              })
            }
          </Card>
        </div>
      )
    } else if (arr.type === 'table') {
      return (
        <div 
          id={arr.id}
          style={{margin: arr.margin}} 
          data-alt={`${arr.id}`} 
          key={arr.id} 
          className={focusElement ? focusElement.id === arr.id ? 'focusElement' : '' : ''}
          onDoubleClick={() => handleFocusClick(arr)}
        >
          {
            focusElement && focusElement.id === arr.id && <AdditionalTool id={arr.id} onDelete={handleDeleteItem} onMove={handleMoveItem} />
          }
          <Table columns={arr.columns} dataSource={[]} />
        </div>
      )
    } else if (arr.type === 'input') {
      if (parent.type.indexOf('form') > -1) {
        return (
          <div 
            id={arr.id}
            data-alt={`${arr.id}`} 
            key={arr.id}
          > 
            <Form.Item label='标题' labelCol={parent.layout.labelCol} wrapperCol={parent.layout.wrapperCol}>
              <Input placeholder='请输入内容' />
            </Form.Item>
          </div>
        )
      }

      return <Input placeholder='请输入内容' />
    } else if (arr.type === 'select') {
      if (parent.type.indexOf('form') > -1) {
        return (
          <div 
            id={arr.id}
            data-alt={`${arr.id}`} 
            key={arr.id}
          > 
            <Form.Item label='标题' labelCol={parent.layout.labelCol} wrapperCol={parent.layout.wrapperCol}>
              <Select placeholder='select'/>
            </Form.Item>
          </div>
        )
      }

      return <Select placeholder='select'/>
    } else if (arr.type === 'radio') {
      if (parent.type.indexOf('form') > -1) {
        return (
          <div 
            id={arr.id}
            data-alt={`${arr.id}`} 
            key={arr.id}
          > 
            <Form.Item label='标题' labelCol={parent.layout.labelCol} wrapperCol={parent.layout.wrapperCol}>
              <Radio name='radio_tml'>Radio</Radio>
            </Form.Item>
          </div>
        )
      }

      return <Radio name='radio_tml'>Radio</Radio>
    } else if (arr.type === 'checkbox') {
      if (parent.type.indexOf('form') > -1) {
        return (
          <div 
            id={arr.id}
            data-alt={`${arr.id}`} 
            key={arr.id}
          > 
            <Form.Item label='标题' labelCol={parent.layout.labelCol} wrapperCol={parent.layout.wrapperCol}>
              <Checkbox>Checkbox</Checkbox>
            </Form.Item>
          </div>
        )
      }

      return <Checkbox>Checkbox</Checkbox>
    } else if (arr.type === 'datepicker') {
      if (parent.type.indexOf('form') > -1) {
        return (
          <div 
            id={arr.id}
            data-alt={`${arr.id}`} 
            key={arr.id}
          > 
            <Form.Item label='标题' labelCol={parent.layout.labelCol} wrapperCol={parent.layout.wrapperCol}>
              <DatePicker />
            </Form.Item>
          </div>
        )
      }

      return <DatePicker />
    } else if (arr.type === 'form') {
      return (
        <div 
          id={arr.id}
          data-alt={`${arr.id}`} 
          key={arr.id} 
          style={{minHeight: arr.height}}
        > 
          <Form 
            name='module'
          >
            {
              arr.children && 
              arr.children.map((item) => {
                return instantiateElement(item, zIndex + 1, {
                  type: arr.type,
                  layout: {
                    labelCol: { span: 4 },
                    wrapperCol: { span: 6 },
                  }
                })
              })
            }
          </Form>
        </div>
      )
    } else {
      return <React.Fragment key={arr.id}>
        <EmptyPlaceholder id={arr.id} />
      </React.Fragment>
    }
  }

  const handleClick = (e) => {
    if (e.target.dataset.alt && e.target.dataset.alt.indexOf('bg') > -1) {
      localStore.editorMange.focusElement = null
    }
  }

  useEffect(() => {
    setWidth(document.getElementById('editorBox').clientWidth)
    setHeight(document.getElementById('editorBox').clientHeight)
  }, [])

  useEffect(() => {
    setElementsObjClone(toJS(elements))
  }, [elements])

  return (
    <div className='editorContainer'>
      <div id='editorBox' className='editorBox' onClick={handleClick}>
        <BgTable />
        <div className='elementBox'>
          {
            elementsObjClone && instantiateElement(elementsObjClone[0], 0)
          }
        </div>
      </div>
    </div>
  )
})

export default Editor