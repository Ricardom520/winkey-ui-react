import React, { useEffect, useState } from 'react'
import { toJS } from 'mobx'
import { useLocalStore } from 'mobx-react'
import { observer } from 'mobx-react-lite'

import store from '@/stores'
import { ElementStruct } from '@/stores/EditorMange'
import { Card, Form, Input, Radio, Select, InputNumber, Button, Modal } from '@/components'
import { fetchExportCodeFile } from '@/services/code'
import TreeData from './TreeData'
import FormItemOptions from './FormItemOptions'
import { FormItemTypeOptionsFilter } from '../datas'

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 }
}

const Control: React.FC = observer(() => {
  const localStore = useLocalStore(() => store)
  const { elements, focusElement } = localStore.editorMange
  const [_elementsObj, setElementsObj] = useState<ElementStruct[]>()
  const [modalShow, setModalShow] = useState<boolean>(false)

  const handleChangeHasBorder = (val) => {
    focusElement.hasBorder = val
  }

  const handleData = (val: any, type: string) => {
    const _focusElement = toJS(focusElement)
    const keyPath = _focusElement.id
    const paths = keyPath.split('_')

    if (paths.length === 1) {
    } else {
      const deepSetData = (obj, index) => {
        if (index === paths.length - 1) {
          obj[parseInt(paths[index]) * 2 + 1][type] = val

          _focusElement[type] = val
          localStore.editorMange.setElementsObj(_elementsObj)
          localStore.editorMange.setFocusElement(_focusElement)
          return
        }

        deepSetData(obj[index === 1 ? 0 : 2 * parseInt(paths[index]) + 1].children, index + 1)
      }

      deepSetData(_elementsObj, 1)
    }
  }

  const handleFormItemData = (val: any, type: string) => {
    const _focusElement = toJS(focusElement)
    const keyPath = _focusElement.id
    const paths = keyPath.split('_')

    if (paths.length === 1) {
    } else {
      const deepSetData = (obj, index) => {
        if (!obj) return
        if (index === paths.length - 2) {
          obj[parseInt(paths[index]) * 2 + 1]['formItems'][paths[index + 1]][type] = val

          _focusElement[type] = val
          console.log(_focusElement)
          localStore.editorMange.setElementsObj(_elementsObj)
          localStore.editorMange.setFocusElement(_focusElement)
          return
        }

        deepSetData(obj[index === 1 ? 0 : 2 * parseInt(paths[index]) + 1].children, index + 1)
      }

      deepSetData(_elementsObj, 1)
    }
  }

  const handleExport = () => {
    fetchExportCodeFile({ code: JSON.stringify(_elementsObj)})
  }

  useEffect(() => {
    setElementsObj(toJS(elements))
  }, [elements])

  return (
    <div className='controls'>
      <Card title='属性' bordered={false}>
        <Form {...layout}>
          {focusElement.width && (
            <Form.Item label='宽度'>
              <Input
                placeholder='请输入宽度'
                value={focusElement.width || 'auto'}
                addonAfter='PX'
              />
            </Form.Item>
          )}
          {focusElement.height && (
            <Form.Item label='高度'>
              <Input
                placeholder='请输入高度'
                value={focusElement.height || 'auto'}
                addonAfter='PX'
              />
            </Form.Item>
          )}
          {focusElement.color && (
            <Form.Item label='字体颜色'>
              <Input
                placeholder='请输入字体颜色'
                value={focusElement.color || '#000'}
                onChange={(e) => handleData(e, 'color')}
              />
            </Form.Item>
          )}
          {focusElement.fontSize && (
            <Form.Item label='字体大小'>
              <Input
                placeholder='请输入字体大小'
                value={focusElement.fontSize || '16'}
                addonAfter='PX'
              />
            </Form.Item>
          )}
          {focusElement.fontWeight && (
            <Form.Item label='是否加粗'>
              <Radio.Group value={focusElement.fontWeight || 0}>
                <Radio value={1}>是</Radio>
                <Radio value={0}>否</Radio>
              </Radio.Group>
            </Form.Item>
          )}
          {focusElement.backgroundColor && (
            <Form.Item label='背景色'>
              <Input placeholder='请输入宽度' value={focusElement.backgroundColor || '#fff'} />
            </Form.Item>
          )}
          {focusElement.padding !== undefined && (
            <Form.Item label='内边距'>
              <Input
                placeholder='格式如：上 右 下 左'
                value={focusElement.padding || ''}
                addonAfter='PX'
              />
            </Form.Item>
          )}
          {focusElement.margin !== undefined && (
            <Form.Item label='外边距'>
              <Input
                placeholder='格式如：上 右 下 左'
                value={focusElement.margin || ''}
                addonAfter='PX'
              />
            </Form.Item>
          )}
          {focusElement.hasBorder !== undefined && (
            <Form.Item label='是否边框'>
              <Radio.Group value={focusElement.hasBorder || 0} onChange={handleChangeHasBorder}>
                <Radio value={1}>是</Radio>
                <Radio value={0}>否</Radio>
              </Radio.Group>
            </Form.Item>
          )}
          {focusElement.hasBorder !== undefined && (
            <Form.Item label='边框颜色'>
              <Input placeholder='请输入外边距' value={focusElement.borderColor} />
            </Form.Item>
          )}
          {focusElement.hasBorder !== undefined && (
            <Form.Item label='边框宽度'>
              <Input placeholder='请输入边框宽度' value={focusElement.borderSize} />
            </Form.Item>
          )}
          {focusElement.title !== undefined && (
            <Form.Item label='标题'>
              <Input
                placeholder='请输入标题'
                value={focusElement.title}
                onChange={(e) => handleData(e, 'title')}
              />
            </Form.Item>
          )}
          {focusElement.columns !== undefined && (
            <Form.Item label='列属性'>
              <div>
                <TreeData
                  inputWay='input'
                  type='columns'
                  data={toJS(focusElement.columns)}
                  onChange={(val) => handleData(val, 'columns')}
                  content={{ title: '新增属性', dataIndex: '新增属性' }}
                />
              </div>
            </Form.Item>
          )}
          {focusElement.layout !== undefined && (
            <Form.Item label='layout'>
              <Select
                value={focusElement.layout}
                options={[
                  {
                    label: 'horizontal',
                    value: 'horizontal'
                  },
                  {
                    label: 'vertical',
                    value: 'vertical'
                  },
                  {
                    label: 'inline',
                    value: 'inline'
                  }
                ]}
                onChange={(val) => handleData(val, 'layout')}
              />
            </Form.Item>
          )}
          {focusElement.labelCol !== undefined && (
            <Form.Item label='labelCol'>
              <InputNumber
                min={1}
                max={30}
                defaultValue={4}
                onChange={(val) => handleData(val, 'labelCol')}
              />
            </Form.Item>
          )}
          {focusElement.wrapperCol !== undefined && (
            <Form.Item label='wrapper'>
              <InputNumber
                min={1}
                max={30}
                defaultValue={6}
                onChange={(val) => handleData(val, 'wrapperCol')}
              />
            </Form.Item>
          )}
          {focusElement.row !== undefined && (
            <Form.Item label='每行个数'>
              <InputNumber
                min={1}
                max={4}
                defaultValue={1}
                onChange={(val) => handleData(val, 'row')}
              />
            </Form.Item>
          )}
          {focusElement.isSubmit !== undefined && (
            <Form.Item label='提交？'>
              <Radio.Group
                value={focusElement.isSubmit ? 1 : 0}
                options={[
                  {
                    label: '是',
                    value: 1
                  },
                  {
                    label: '否',
                    value: 0
                  }
                ]}
                onChange={(val) => handleData(val === 1, 'isSubmit')}
              ></Radio.Group>
            </Form.Item>
          )}
          {focusElement.submitAlign !== undefined && focusElement.isSubmit && (
            <Form.Item label='按钮位置'>
              <Select
                value={focusElement.submitAlign}
                options={[
                  {
                    label: '居左',
                    value: 'flex-start'
                  },
                  {
                    label: '居中',
                    value: 'center'
                  },
                  {
                    label: '居右',
                    value: 'flex-end'
                  },
                  {
                    label: '靠后',
                    value: 'end'
                  }
                ]}
                onChange={(val) => handleData(val, 'submitAlign')}
              />
            </Form.Item>
          )}
          {focusElement.formItems !== undefined && (
            <Form.Item label='内容模块'>
              <TreeData
                type='formItems'
                inputWay='select'
                data={toJS(focusElement.formItems)}
                filterKey={['type']}
                onChange={(val) => handleData(val, 'formItems')}
                content={{
                  title: '标题',
                  name: 'input',
                  type: 'input',
                  children: {
                    title: 'options',
                    label: 'label',
                    value: 'value'
                  }
                }}
              />
            </Form.Item>
          )}
          {focusElement.placeholder !== undefined && (
            <Form.Item label='占位符'>
              <Input
                placeholder='Input Text'
                value={focusElement.placeholder}
                onChange={(e) => handleFormItemData(e.target.value, 'placeholder')}
              />
            </Form.Item>
          )}
          {focusElement.options !== undefined &&
            FormItemTypeOptionsFilter.includes(focusElement.type) && (
              <Form.Item label='选择项'>
                <FormItemOptions
                  datas={toJS(focusElement.options)}
                  onChange={(val) => handleFormItemData(val, 'options')}
                />
              </Form.Item>
            )}
        </Form>
      </Card>
      <div className='controls_btn'>
        <Button type='primary' onClick={() => setModalShow(true)}>
          导出
        </Button>
      </div>
      <Modal visible={modalShow} cancelText='取消' okText='确认' onOk={handleExport} onCancel={() => setModalShow(false)}>
        <Form labelCol={{ span: 4 }} wrapperCol={{ span: 16 }} style={{ paddingTop: '45px' }}>
          <Form.Item label='语言'>
            <Select
              defaultValue={0}
              options={[
                {
                  label: 'React',
                  value: 0
                }
              ]}
            />
          </Form.Item>
          <Form.Item label='Js类型'>
            <Select
              defaultValue={0}
              options={[
                {
                  label: 'Typescript',
                  value: 0
                },
                {
                  label: 'JavaScript',
                  value: 1
                }
              ]}
            />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
})

export default Control
