import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { toJS } from 'mobx'
import { useLocalStore } from 'mobx-react'
import { observer } from 'mobx-react-lite'

import { ElementStruct } from '@/stores/EditorMange'
import BgTable from './BgTable'
import AdditionalTool from './AdditionalTool'
import store from '@/stores'
import './index.less'
import { Card, Form, Table, Input, Select, Radio, Checkbox, DatePicker, Row, Col, Button } from '@/components'
import EmptyPlaceholder from './EmplyPlaceholder'
import { HandleNextNodeId } from '@/tool/utils'

const FormTypeMap = {
  input: <Input/>,
  select: <Select />,
  radio: <Radio/>,
  checkbox: <Checkbox/>,
  datepicker: <DatePicker/>,
}

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

  const handleFocusClick = (item: ElementStruct, e: any) => {
    localStore.editorMange.setFocusElement(item)

    try {
      e.stopPropagation()
    } catch {
      e.cancelBubble = true
    }
  }

  const handleDeleteItem = async (id: string) => {
    const paths = id.split('_')
    const _zIndex: number = paths.length - 2
    const _index: number = parseInt(paths[paths.length - 1])

    const deepTreeData = (arr: ElementStruct, zIndex: number) => {
      if (zIndex === _zIndex) {
        if (_index === 0) {
          // 如果只有一个元素，则清空children
          paths[0] = 'placeholder'
          arr.children = [{
            id: paths.join('_'),
            type: 'placeholder'
          }]
        } else {
          const __index = 2 * _index + 1
          arr.children.splice(__index, 2)

          HandleNextNodeId(__index, arr.children, false)
        }

        localStore.editorMange.setElementsObj(elementsObjClone)
        localStore.editorMange.setFocusElement(null)
        return
      }

      deepTreeData(arr.children[2 * parseInt(paths[zIndex]) + 1], zIndex + 1)
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

  const handleFocusFormItemClick = (e, item, id, index) => {
    console.log(item)
    localStore.editorMange.setFocusElement({
      id: `${id}_${index}`,
      placeholder: item.placeholder
    })

    try {
      e.stopPropagation()
    } catch {
      e.cancelBubble = true
    }
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
          onDoubleClick={(e) => handleFocusClick(arr, e)}
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
          onDoubleClick={(e) => handleFocusClick(arr, e)}
        >
          {
            focusElement && focusElement.id === arr.id && <AdditionalTool id={arr.id} onDelete={handleDeleteItem} onMove={handleMoveItem} />
          }
          <Table columns={arr.columns} dataSource={[]} />
        </div>
      )
    } else if (arr.type === 'input') {
      return <Input placeholder='请输入内容' />
    } else if (arr.type === 'select') {
      return <Select placeholder='select'/>
    } else if (arr.type === 'radio') {
      return <Radio name='radio_tml'>Radio</Radio>
    } else if (arr.type === 'checkbox') {
      return <Checkbox>Checkbox</Checkbox>
    } else if (arr.type === 'datepicker') {
      return <DatePicker />
    } else if (arr.type === 'form') {
      return (
        <div 
          id={arr.id}
          data-alt={`${arr.id}`} 
          key={arr.id} 
          className={focusElement ? focusElement.id === arr.id ? 'focusElement' : '' : ''}
          onDoubleClick={(e) => handleFocusClick(arr, e)}
        > 
          {
            focusElement && focusElement.id === arr.id && <AdditionalTool id={arr.id} onDelete={handleDeleteItem} onMove={handleMoveItem} />
          }
          <Form 
            name='module'
            layout={arr.layout}
            style={{minHeight: arr.height}}
            labelCol={{span: arr.labelCol}}
            wrapperCol={{span: arr.wrapperCol}}
          >
             <Row >
              {
                arr.formItems && 
                arr.formItems.map((item, index) => {
                  return (
                    <>
                      <Col span={24 / arr.row} key={`${arr.id}_${index}`}>
                        <Form.Item labelCol={{span: arr.labelCol}} wrapperCol={{span: arr.wrapperCol}} label={item.title} name={item.name as string}>
                          <div className={focusElement.id === `${arr.id}_${index}` ? 'formItem-focus' : ''} onDoubleClick={(e) => handleFocusFormItemClick(e, item, arr.id, index)}>
                            {/* {FormTypeMap[item.type]} */}
                            {
                              item.type === 'input' && <Input placeholder={item.placeholder as string} />
                            }
                            {
                              item.type === 'select' && <Select placeholder={item.placeholder as string} options={item.options as {
                                label: string
                                value: string | number
                              }[]} />
                            }
                          </div>
                        </Form.Item>
                      </Col>
                      {
                        arr.isSubmit && arr.submitAlign === 'end' && index === arr.formItems.length - 1 &&
                        <Col style={{paddingLeft: '5%'}} span={24 / arr.row} key={`${arr.id}_button`}>
                          <Button type='primary'>提交</Button> 
                        </Col>
                      }
                    </>
                  )
                })
              }
             </Row>
             {
               arr.isSubmit && arr.submitAlign !== 'end' &&
               <Row style={{justifyContent: arr.submitAlign}}>
                 <Col offset={arr.labelCol / arr.row}>
                  <Button type='primary'>提交</Button> 
                 </Col>
               </Row>
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