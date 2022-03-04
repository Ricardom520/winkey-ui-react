import React, { useEffect, useRef, useState } from 'react'
import { toJS } from 'mobx'
import { useLocalStore } from 'mobx-react'
import { observer } from 'mobx-react-lite'

import { Tooltip, message } from '@/components'
import Header from '../Header'
import Editor from './Components/Editor'
import { ElementStruct } from '@/stores/EditorMange'
import Control from './Components/Control'
import DegisnContext from './DegisnContext'
import {
  BlockTml,
  CardTml,
  TableTml,
  InputTml,
  ButtonTml,
  SelectTml,
  RadioTml,
  CheckboxTml,
  DatePickerTml,
  FormTml
} from './Templates'
import store from '@/stores'
import ColorInput from './ColorInput'
import { HandleNextNodeId, GetScrollY } from '@/tool/utils'
import './index.less'

type HTMLElementEventStyle = {
  offsetY: number
  offsetX: number
}

type HTMLElementEvent<T extends HTMLElementEventStyle> = Event & {
  nativeEvent: T
}

const Design: React.FC = observer(() => {
  const localStore = useLocalStore(() => store)
  const { elements, focusElement } = localStore.editorMange
  const BlockRef: any = useRef<HTMLLIElement>()
  const CardRef: any = useRef<HTMLElement>()
  const TableRef: any = useRef<HTMLElement>()
  const InputRef: any = useRef<HTMLElement>()
  const ButtonRef: any = useRef<HTMLElement>()
  const SelectRef: any = useRef<HTMLElement>()
  const RadioRef: any = useRef<HTMLElement>()
  const CheckboxRef: any = useRef<HTMLElement>()
  const DatePickerRef: any = useRef<HTMLElement>()
  const FormRef: any = useRef<HTMLElement>()
  const [isMovingDom, setIsMovingDOM] = useState<boolean>(false)

  const getContext = () => {
    return {
      isMovingDom,
      setIsMovingDom: (val) => setIsMovingDOM(val),
      setElement
    }
  }

  const getMargin = (obj: ElementStruct, index: number) => {
    if (index === 0) {
      if (obj.children.length > 1) {
        return '0 0 25px 0'
      }

      return ''
    }

    return '25px 0 0 0'
  }

  const addChilren = (
    elementsObj_clone: ElementStruct,
    index: number,
    paths: string[],
    obj: any
  ) => {
    const children = elementsObj_clone.children
    const len = paths.length

    if (children.length === 2 * index + 1) {
      // 在后面添加
      children.push(obj)

      paths[len - 1] = `${~~paths[len - 1] + 1}`
      children.push({
        id: `placeholder_${paths.join('_')}`,
        type: 'placeholder'
      })
    } else if (index === 0) {
      // 在前面插入
      children.splice(index + 1, 0, obj, {
        id: `placeholder_${paths.join('_')}`,
        type: 'placeholder'
      })

      HandleNextNodeId(index + 2, children, true)
    } else {
      // 在中间插入
      children.splice(index + 2, 0, obj, {
        id: `placeholder_${paths.join('_')}`,
        type: 'placeholder'
      })

      HandleNextNodeId(index + 3, children, true)
    }
  }

  const filterDomType = (type, id, index, elementsObj_clone, suffix?: string) => {
    let obj = null

    switch (type) {
      case 'block':
        obj = {
          id: id,
          type,
          minWidth: '100%',
          minHeight: '380px',
          padding: '20px 40px 20px 40px',
          backgroundColor: '#fff',
          children: [
            {
              id: suffix ? `placeholder_${suffix}_0` : 'placeholder_0',
              type: 'placeholder'
            }
          ]
        }
        break
      case 'card':
        obj = {
          id,
          type,
          width: '100%',
          height: '380px',
          title: '标题',
          margin: elementsObj_clone ? getMargin(elementsObj_clone[0], index) : '',
          content: '',
          children: [
            {
              id: suffix ? `placeholder_${suffix}_0` : 'placeholder_0',
              type: 'placeholder'
            }
          ]
        }

        break
      case 'table':
        obj = {
          id,
          type,
          width: '100%',
          height: '380px',
          margin: elementsObj_clone ? getMargin(elementsObj_clone[0], index) : '',
          columns: [
            {
              title: 'table',
              dataIndex: 'table'
            },
            {
              title: '属性1',
              dataIndex: '属性1'
            },
            {
              title: '属性2',
              dataIndex: '属性2'
            }
          ]
        }
        break
      case 'input':
        obj = {
          id,
          type
        }
        break
      case 'select':
        obj = {
          id,
          type
        }
        break
      case 'radio':
        obj = {
          id,
          type
        }
        break
      case 'checkbox':
        obj = {
          id,
          type
        }
        break
      case 'datepicker':
        obj = {
          id,
          type
        }
        break
      case 'form':
        obj = {
          id,
          type,
          height: '180px',
          layout: 'horizontal',
          margin: elementsObj_clone ? getMargin(elementsObj_clone[0], index) : '',
          labelCol: 4,
          wrapperCol: 6,
          row: 1,
          isSubmit: true,
          submitAlign: 'flex-start',
          formItems: [
            {
              title: '标题',
              name: 'input',
              type: 'input',
              placeholder: 'Input text'
            }
          ]
        }
    }

    return obj
  }

  const setElement = (e: any, type: string) => {
    const target: any = e.target
    const elementsObj_clone = toJS(localStore.editorMange.elements)
    let obj = null

    if (!elements) {
      obj = filterDomType(type, `${type}_0`, 0, elementsObj_clone)
      console.log(obj)
      localStore.editorMange.setFocusElement(obj)
      localStore.editorMange.setElementsObj([obj])
    } else {
      if (target.dataset.alt && target.dataset.alt.indexOf('bg') > -1) {
        message.warning('有且仅有一个根节点!')
        return
      }

      if (!target.dataset.alt) return

      const arrs = target.dataset.alt.split('_')

      arrs.splice(0, 1)

      const suffix = arrs.join('_')
      const id = `${type}_${suffix}`
      const index = parseInt(arrs[arrs.length - 1])
      obj = filterDomType(type, id, index, elementsObj_clone, suffix)

      const deepTreeData = (tree: ElementStruct[], zIndex: number) => {
        const _index = zIndex === 0 ? 0 : parseInt(arrs[zIndex]) * 2 + 1
        if (zIndex === arrs.length - 2) {
          addChilren(tree[_index], index, arrs, obj)
          localStore.editorMange.setFocusElement(obj)
          localStore.editorMange.setElementsObj(elementsObj_clone)
          return
        }

        deepTreeData(tree[_index].children, zIndex + 1)
      }

      deepTreeData(elementsObj_clone, 0)
    }
  }

  const handleMouseDown = (type: string, e) => {
    let target: any
    let copyElement: any

    if (type === 'block') {
      target = BlockRef.current.children[0]
    } else if (type === 'card') {
      target = CardRef.current.children[0]
    } else if (type === 'table') {
      target = TableRef.current.children[0]
    } else if (type === 'input') {
      target = InputRef.current.children[0]
    } else if (type === 'button') {
      target = ButtonRef.current.children[0]
    } else if (type === 'select') {
      target = SelectRef.current.children[0]
    } else if (type === 'radio') {
      target = RadioRef.current.children[0]
    } else if (type === 'checkbox') {
      target = CheckboxRef.current.children[0]
    } else if (type === 'form') {
      target = FormRef.current.children[0]
    }

    copyElement = target.cloneNode(true)
    handleMove(copyElement, target, type, e)
    setIsMovingDOM(true)
  }

  const handleMove: (
    copyElement: HTMLElement,
    target: HTMLElement,
    type: string,
    event: HTMLElementEvent<HTMLElementEventStyle>
  ) => void = (copyElement, target, type, event) => {
    const getLocation = (event: MouseEvent) => {
      setElement(event, type)
    }

    let scrollY = GetScrollY()
    copyElement.style.position = 'absolute'
    copyElement.style.zIndex = '2'
    copyElement.style.top = target.getBoundingClientRect().top + scrollY + 'px'
    copyElement.style.left = target.getBoundingClientRect().left + 'px'

    document.body.appendChild(copyElement)

    window.onmousemove = (moveEvent: MouseEvent) => {
      scrollY = GetScrollY()
      copyElement.style.top = moveEvent.y - event.nativeEvent.offsetY + scrollY + 'px'
      copyElement.style.left = moveEvent.x - event.nativeEvent.offsetX + 'px'

      window.onmouseup = () => {
        document.body.removeChild(copyElement)
        document.addEventListener('mousemove', getLocation)
        setIsMovingDOM(false)
        setTimeout(function () {
          window.onmousemove = null
          window.onmouseup = null

          document.removeEventListener('mousemove', getLocation)
        }, 100)
      }
    }
  }

  return (
    <DegisnContext.Provider value={getContext()}>
      <div className='designContainer'>
        <Header />
        <div className='container'>
          <div className='left'>
            <ul>
              <li
                className='listItem'
                onMouseDown={(e) => handleMouseDown('block', e)}
                ref={BlockRef}
              >
                <Tooltip title='block'>
                  <div>
                    <BlockTml />
                  </div>
                </Tooltip>
              </li>
              <li
                className='listItem'
                onMouseDown={(e) => handleMouseDown('card', e)}
                ref={CardRef}
              >
                <Tooltip title='Card'>
                  <div>
                    <CardTml />
                  </div>
                </Tooltip>
              </li>
              <li
                className='listItem'
                onMouseDown={(e) => handleMouseDown('table', e)}
                ref={TableRef}
              >
                <Tooltip title='Table'>
                  <div>
                    <TableTml />
                  </div>
                </Tooltip>
              </li>
              <li
                className='listItem'
                onMouseDown={(e) => handleMouseDown('form', e)}
                ref={FormRef}
              >
                <Tooltip title='Form'>
                  <div>
                    <FormTml />
                  </div>
                </Tooltip>
              </li>
              {/* <li className='listItem' onMouseDown={(e) => handleMouseDown('input', e)} ref={InputRef}>
                <Tooltip title='Input'>
                  <div>
                    <InputTml/>
                  </div>
                </Tooltip>
              </li>
              <li className='listItem' onMouseDown={(e) => handleMouseDown('button', e)} ref={ButtonRef}>
                <Tooltip title='Button'>
                  <div>
                    <ButtonTml/>
                  </div>
                </Tooltip>
              </li>
              <li className='listItem' onMouseDown={(e) => handleMouseDown('select', e)} ref={SelectRef}>
                <Tooltip title='Select'>
                  <div>
                    <SelectTml/>
                  </div>
                </Tooltip>
              </li>
              <li className='listItem' onMouseDown={(e) => handleMouseDown('radio', e)} ref={RadioRef}>
                <Tooltip title='Radio'>
                  <div>
                    <RadioTml/>
                  </div>
                </Tooltip>
              </li>
              <li className='listItem' onMouseDown={(e) => handleMouseDown('checkbox', e)} ref={CheckboxRef}>
                <Tooltip title='Checkbox'>
                  <div>
                    <CheckboxTml/>
                  </div>
                </Tooltip>
              </li>
              <li className='listItem' onMouseDown={(e) => handleMouseDown('datepicker', e)} ref={DatePickerRef}>
                <Tooltip title='DatePicker'>
                  <div>
                    <DatePickerTml/>
                  </div>
                </Tooltip>
              </li> */}
            </ul>
          </div>
          <div className='right'>
            <div className='content'>
              <Editor />
            </div>
            {focusElement && <Control />}
          </div>
        </div>
      </div>
    </DegisnContext.Provider>
  )
})

export default Design
