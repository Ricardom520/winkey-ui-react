import React, { useEffect, useRef, useState } from 'react'
import { useLocalStore } from 'mobx-react'
import { observer } from 'mobx-react-lite'

import { Tooltip, Card, Form, Input, Radio, message } from '@/components'
import Header from '../Header'
import Editor from './Components/Editor'
import { ElementStruct } from '@/stores/EditorMange'
import { Block } from './Templates'
import store from '@/stores'
import './index.less'

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
};

const Design: React.FC = observer(() => {
  const localStore = useLocalStore(() => store)
  const { elementsObj, focusElement } = localStore.editorMange
  const BlockRef: any = useRef<HTMLLIElement>()

  const setElement = (e: MouseEvent, type: string) => {
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
          backgroundColor: '#fff',
        })
        localStore.editorMange.setFocusElement({
          id: '0',
          type,
          width: '100%',
          height: '380px',
          backgroundColor: '#fff'
        })
      }
    } else {
      if (target.dataset.alt.indexOf('bg') > -1) {
        message.warning('有且仅有一个根节点!')
        return
      }
    }
  }

  const handleChangeHasBorder = (val) => {
    focusElement.hasBorder = val
  }

  const handleMouseDown = (type: string, e) => {
    let target: any;
    let copyElement: any;

    const getLocation = (event: MouseEvent) => {
      setElement(event, type)
    }

    if (type === 'block') {
      target = BlockRef.current.children[0]
      copyElement = target.cloneNode(true)
      
      copyElement.style.position = "absolute"
      copyElement.style.top = target.getBoundingClientRect().top + "px"
      copyElement.style.left = target.getBoundingClientRect().left + "px"

      document.body.appendChild(copyElement)
      
      window.onmousemove = (moveEvent: MouseEvent) => {
        copyElement.style.top = moveEvent.y - e.nativeEvent.offsetY + 'px'
        copyElement.style.left = moveEvent.x - e.nativeEvent.offsetX + 'px'

        window.onmouseup = (upEvent: MouseEvent) => {
          console.log('///')
          console.log(upEvent)
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
                  <Block/>
                </div>
              </Tooltip>
            </li>
            <li className='listItem'>
              <Tooltip title='Card'>
                <div>
                  <Card title='title' size='small'/>
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