import React, { useEffect, useState } from 'react'
import { toJS } from 'mobx'
import { useLocalStore } from 'mobx-react'
import { observer } from 'mobx-react-lite'

import store from '@/stores'
import { ElementStruct } from '@/stores/EditorMange'
import { Card, Form, Input, Radio } from '@/components'
import TreeData from './TreeData'
 
const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
};

const Control: React.FC = observer(() => {
  const localStore = useLocalStore(() => store)
  const { elementsObj, focusElement } = localStore.editorMange
  const [_elementsObj, setElementsObj] = useState<ElementStruct>()

  const handleChangeHasBorder = (val) => {
    focusElement.hasBorder = val
  }

  const handleChangeInput = (e, type: string) => {
    const value = e.target.value
    const _focusElement = toJS(focusElement)
    const keyPath = _focusElement.id
    const paths = keyPath.split('_')

    if (paths.length === 1) {

    } else {
      const deepSetData = (obj, index) => {
        if (index === paths.length) {
          obj[type] = value

          _focusElement[type] = value
          localStore.editorMange.setElementsObj(_elementsObj)
          localStore.editorMange.setFocusElement(_focusElement)
          return
        }

        deepSetData(obj.children[paths[index]], index + 1)
      }

      deepSetData(_elementsObj, 1)
    }
  }

  const hanleChangeTree = (val) => {
    handleData(val, 'columns')
  }

  const handleData = (val: any, type: string) => {
    const _focusElement = toJS(focusElement)
    const keyPath = _focusElement.id
    const paths = keyPath.split('_')

    if (paths.length === 1) {

    } else {
      const deepSetData = (obj, index) => {
        if (index === paths.length) {
          obj[type] = val

          _focusElement[type] = val
          localStore.editorMange.setElementsObj(_elementsObj)
          localStore.editorMange.setFocusElement(_focusElement)
          return
        }

        deepSetData(obj.children[paths[index]], index + 1)
      }

      deepSetData(_elementsObj, 1)
    }
  }

  useEffect(() => {
    setElementsObj(toJS(elementsObj))
  }, [elementsObj])

  return (
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
            <Input placeholder='请输入字体颜色' value={focusElement.color || '#000'} onChange={(e) => handleChangeInput(e, 'color')} />
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
          {
            focusElement.columns &&
            <Form.Item label='列属性'>
              <div>
                <TreeData data={toJS(focusElement.columns)} onChange={(val) => hanleChangeTree(val)} />
              </div>
            </Form.Item>
          }
        </Form>
      </Card>
    </div>
  )
})

export default Control