import React, { useEffect, useRef, useState } from 'react'
import { toJS } from 'mobx'
import { useLocalStore } from 'mobx-react'
import { observer } from 'mobx-react-lite'

import { Tooltip, Card, Form, Input, Radio, message } from '@/components'
import Header from '../Header'
import Editor from './Components/Editor'
import { ElementStruct } from '@/stores/EditorMange'
import { 
  BlockTml, 
  CardTml, 
  TableTml, 
  InputTml,
  ButtonTml,
  SelectTml,
  RadioTml,
  CheckboxTml,
  DatePickerTml
} from './Templates'
import store from '@/stores'
import './index.less'

type HTMLElementEventStyle = {
  offsetY: number
  offsetX: number
}

type HTMLElementEvent<T extends HTMLElementEventStyle> = Event & {
  nativeEvent: T
}

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
};

const Design: React.FC = observer(() => {
  const localStore = useLocalStore(() => store)
  const { elementsObj, focusElement } = localStore.editorMange
  const BlockRef: any = useRef<HTMLLIElement>()
  const CardRef: any = useRef<HTMLElement>()
  const TableRef: any = useRef<HTMLElement>()
  const InputRef: any = useRef<HTMLElement>()
  const ButtonRef: any = useRef<HTMLElement>()
  const SelectRef: any = useRef<HTMLElement>()
  const RadioRef: any = useRef<HTMLElement>()
  const CheckboxRef: any = useRef<HTMLElement>()
  const DatePickerRef: any = useRef<HTMLElement>()

  const setElement = (e: any, type: string) => {
    console.log(type)
    console.log(e)
    const target: any = e.target
    
    if (!elementsObj) {
      if (type === 'block') {
        localStore.editorMange.setElementsObj({
          id: '0',
          type,
          minWidth: '100%',
          minHeight: '380px',
          padding: '20px 40px 20px 40px',
          backgroundColor: '#fff',
          children: []
        })
        localStore.editorMange.setFocusElement({
          id: '0',
          type,
          width: '100%',
          height: '380px',
          padding: '20px 40px 20px 40px',
          backgroundColor: '#fff'
        })
      } else if (type === 'card') {
        console.log(e)
      }
    } else {
      if (target.dataset.alt && target.dataset.alt.indexOf('bg') > -1) {
        message.warning('有且仅有一个根节点!')
        return
      }

      const index = e.target.dataset.alt
      const elementsObj_clone = toJS(elementsObj)
      const id = `${index}_${localStore.editorMange.elementsObj.children.length}`
      
      if (type === 'card') {
        console.log(toJS(elementsObj))
        elementsObj_clone.children.push({
          id,
          type,
          width: '100%',
          height: '380px',
          backgroundColor: '#fff',
          title: '标题',
          content: ''
        })

        localStore.editorMange.setFocusElement({
          id,
          type,
          width: '100%',
          height: '380px',
          backgroundColor: '#fff',
          title: '标题',
          content: ''
        })

        localStore.editorMange.setElementsObj(elementsObj_clone)
      } else {
        elementsObj_clone.children.push({
          id,
          type,
          width: '100%',
          height: '380px',
        })

        localStore.editorMange.setFocusElement({
          id,
          type,
          width: '100%',
          height: '380px',
        })

        localStore.editorMange.setElementsObj(elementsObj_clone)
      }
    }
  }

  const handleChangeHasBorder = (val) => {
    focusElement.hasBorder = val
  }

  const handleMouseDown = (type: string, e) => {
    let target: any;
    let copyElement: any;

    if (type === 'block') {
      target = BlockRef.current.children[0]
      copyElement = target.cloneNode(true)
    } else if (type === 'card'){
      console.log(e)
      target = CardRef.current.children[0]
      copyElement = target.cloneNode(true)
    } else if (type === 'table') {
      target = TableRef.current.children[0]
      copyElement = target.cloneNode(true)
    }

    handleMove(copyElement, target, type, e)
  }

  const handleMove: (copyElement: HTMLElement, target: HTMLElement, type: string, event: HTMLElementEvent<HTMLElementEventStyle>) => void = (copyElement, target, type, event) => {
    const getLocation = (event: MouseEvent) => {
      setElement(event, type)
    }

    copyElement.style.position = "absolute"
    copyElement.style.zIndex = '2'
    copyElement.style.top = target.getBoundingClientRect().top + "px"
    copyElement.style.left = target.getBoundingClientRect().left + "px"

    document.body.appendChild(copyElement)
    
    window.onmousemove = (moveEvent: MouseEvent) => {
      copyElement.style.top = moveEvent.y - event.nativeEvent.offsetY + 'px'
      copyElement.style.left = moveEvent.x - event.nativeEvent.offsetX + 'px'

      window.onmouseup = () => {
        document.body.removeChild(copyElement)
        document.addEventListener('mousemove', getLocation)
  
        setTimeout(function() {
          window.onmousemove = null
          window.onmouseup = null

          document.removeEventListener('mousemove', getLocation)
        }, 100)
      }
    }
  }

  const handleChangeInput = (e, type: string) => {
    console.log(e.target.value)
    console.log(type)
    console.log(toJS(focusElement))
    console.log(toJS(elementsObj))
    const _elementsObj = toJS(elementsObj)
    const keyPath = toJS(focusElement).id
    const paths = keyPath.split('_')

    if (paths.length === 1) {

    } else {
      const deepSetData = (obj, index) => {
        if (index === paths.length) {
          
        }
      }
    }
  }

  return (
    <div className='designContainer'>
      <Header/>
      <div className='container'>
        <div className='left'>
          <ul>
            <li className='listItem' onMouseDown={(e) => handleMouseDown('block', e)} ref={BlockRef}>
              <Tooltip title='block'>
                <div> 
                  <BlockTml/>
                </div>
              </Tooltip>
            </li>
            <li className='listItem' onMouseDown={(e) => handleMouseDown('card', e)} ref={CardRef}>
              <Tooltip title='Card'>
                <div>
                  <CardTml/>
                </div>
              </Tooltip>
            </li>
            <li className='listItem' onMouseDown={(e) => handleMouseDown('table', e)} ref={TableRef}>
              <Tooltip title='Table'>
                <div>
                  <TableTml/>
                </div>
              </Tooltip>
            </li>
            <li className='listItem' onMouseDown={(e) => handleMouseDown('input', e)} ref={InputRef}>
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
            </li>
          </ul>
        </div>
        <div className='right'>
          <div className='content'>
            <Editor />
          </div>
          {
            focusElement &&
            <div className='controls'>
              <Card title='属性' bordered={false}>
                <Form {...layout}>
                  <Form.Item label='宽度'>
                    <Input placeholder='请输入宽度' value={focusElement.width ? `${focusElement.width}` : 'auto'} addonAfter='PX' />
                  </Form.Item>
                  <Form.Item label='高度'>
                    <Input placeholder='请输入高度' value={focusElement.height ? `${focusElement.height}` : 'auto'} addonAfter='PX' />
                  </Form.Item>
                  <Form.Item label='字体颜色'>
                    <Input placeholder='请输入宽度' value={focusElement.color || '#000'}/>
                  </Form.Item>
                  <Form.Item label='字体大小'>
                    <Input placeholder='请输入字体大小' value={focusElement.fontSize ? `${focusElement.fontSize}` : '16'} addonAfter='PX' />
                  </Form.Item>
                  <Form.Item label='是否加粗'>
                    <Radio.Group value={focusElement.fontWeight || 0}>
                      <Radio value={1}>是</Radio>
                      <Radio value={0}>否</Radio>
                    </Radio.Group>
                  </Form.Item>
                  <Form.Item label='背景色'>
                    <Input placeholder='请输入宽度' value={focusElement.backgroundColor || '#fff'}/>
                  </Form.Item>
                  <Form.Item label='内边距'>
                    <Input placeholder='格式如：上 右 下 左' value={focusElement.padding} addonAfter='PX' />
                  </Form.Item>
                  <Form.Item label='外边距'>
                    <Input placeholder='格式如：上 右 下 左' value={focusElement.margin} addonAfter='PX'/>
                  </Form.Item>
                  <Form.Item label='是否边框'>
                    <Radio.Group value={focusElement.hasBorder || 0} onChange={handleChangeHasBorder}>
                      <Radio value={1}>是</Radio>
                      <Radio value={0}>否</Radio>
                    </Radio.Group>
                  </Form.Item>
                  {
                    focusElement.hasBorder && <Form.Item label='边框颜色'>
                    <Input placeholder='请输入外边距' value={focusElement.borderColor}/>
                  </Form.Item>
                  }
                  {
                    focusElement.hasBorder &&
                      <Form.Item label='边框宽度'>
                        <Input placeholder='请输入边框宽度' value={focusElement.borderSize}/>
                      </Form.Item> 
                  }
                  {
                    focusElement.title &&
                    <Form.Item label='标题'>
                      <Input placeholder='请输入标题' value={focusElement.title} onChange={(e) => handleChangeInput(e, 'title')}/>
                    </Form.Item>
                  }
                </Form>
              </Card>
            </div>
          }
        </div>
      </div>
    </div>
  )
})

export default Design