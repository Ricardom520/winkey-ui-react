import React, { useEffect, useState } from 'react'

import {
  Form,
  Input,
  Checkbox,
  Button,
  Select,
  Radio,
  DatePicker,
  Switch,
  TimePicker
} from '@/components'
import { HighlightCode } from '@/tool/func'
import PageTitle from '../PageTitle'
import IntroduceBox from '../IntroduceBox'
import FormBaseMd from '@/assets/markdowns/Form/base.md'
import FormFormMd from '@/assets/markdowns/Form/form.md'
import FormSizeMd from '@/assets/markdowns/Form/size.md'
import FormLayoutMd from '@/assets/markdowns/Form/layout.md'
import FormReadMd from '@/assets/markdowns/Form/read.md'

const { Option } = Select

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 }
}

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 }
}

const plainOptions = ['Apple', 'Pear', 'Orange']

const FormPage: React.FC = () => {
  const [form] = Form.useForm()
  const [size, setSize] = useState<'small' | 'default' | 'large'>('default')
  const [formLayout, setFormLayout] = useState<'horizontal' | 'vertical' | 'inline'>('horizontal')

  const onFormLayoutChange2 = ({ layout }: { layout: 'horizontal' | 'vertical' | 'inline' }) => {
    setFormLayout(layout)
  }

  const formItemLayout =
    formLayout === 'horizontal'
      ? {
          labelCol: { span: 4 },
          wrapperCol: { span: 14 }
        }
      : null

  const buttonItemLayout =
    formLayout === 'horizontal'
      ? {
          wrapperCol: { span: 14, offset: 4 }
        }
      : null

  const onFinish = (values: any) => {
    console.log('Success:', values)
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  const onGenderChange = (value: string) => {
    switch (value) {
      case 'male':
        form.setFieldsValue({ note: 'Hi, man!' })
        return
      case 'female':
        form.setFieldsValue({ note: 'Hi, lady!' })
        return
      case 'other':
        form.setFieldsValue({ note: 'Hi there!' })
    }
  }

  const onSubmit = () => {
    console.log(form.submit())
  }

  const onReset = () => {
    form.resetFields()
  }

  const onFill = () => {
    form.setFieldsValue({
      note: 'Hello world!',
      gender: 'male'
    })
  }

  const onFormLayoutChange = ({ size }: { size: 'small' | 'default' | 'large' }) => {
    setSize(size)
  }

  useEffect(() => {
    HighlightCode()
  }, [])

  return (
    <div style={{ paddingBottom: '20px' }}>
      <PageTitle
        title='Form表单'
        description='高性能表单控件，自带数据域管理。包含数据录入、校验以及对应样式。'
      />

      <IntroduceBox
        height={1130}
        title='基本'
        description='最简单的用法，在浮层中可以选择或者输入日期。'
        demo={
          <div style={{ paddingBottom: '20px' }}>
            <Form {...layout} name='basic' onFinish={onFinish} onFinishFailed={onFinishFailed}>
              <Form.Item
                label='Username'
                name='username'
                rules={[{ required: true, message: 'Please input your username!' }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label='Password'
                name='password'
                rules={[{ required: true, message: 'Please input your password!' }]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item {...tailLayout} name='remember'>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Form.Item {...tailLayout}>
                <Button type='primary' htmlType='submit'>
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        }
        markdown={
          <div className='show-html' dangerouslySetInnerHTML={{ __html: FormBaseMd.html }} />
        }
      />

      <IntroduceBox
        height={1490}
        title='表单方法调用'
        description='通过 Form.useForm 对表单数据域进行交互。'
        demo={
          <div style={{ paddingBottom: '20px' }}>
            <Form {...layout} form={form} name='control-hooks' onFinish={onFinish}>
              <Form.Item name='note' label='Note' rules={[{ required: true }]}>
                <Input />
              </Form.Item>
              <Form.Item name='gender' label='Gender' rules={[{ required: true }]}>
                <Select
                  placeholder='Select a option and change input text above'
                  onChange={onGenderChange}
                  allowClear
                >
                  <Option value='male'>male</Option>
                  <Option value='female'>female</Option>
                  <Option value='other'>other</Option>
                </Select>
              </Form.Item>
              <Form.Item {...tailLayout}>
                <Button
                  type='primary'
                  htmlType='submit'
                  style={{ marginRight: '5px' }}
                  onClick={onSubmit}
                >
                  Submit
                </Button>
                <Button htmlType='button' onClick={onReset}>
                  Reset
                </Button>
                <Button type='link' htmlType='button' onClick={onFill}>
                  Fill form
                </Button>
              </Form.Item>
            </Form>
          </div>
        }
        markdown={
          <div className='show-html' dangerouslySetInnerHTML={{ __html: FormFormMd.html }} />
        }
      />

      <IntroduceBox
        height={1280}
        title='表单尺寸'
        description='设置表单组件尺寸，仅对 winkey 组件有效。'
        demo={
          <div style={{ paddingBottom: '20px' }}>
            <Form
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 14 }}
              layout='horizontal'
              initialValues={{ size }}
              onValuesChange={onFormLayoutChange}
              size={size}
            >
              <Form.Item label='Form Size' name='size'>
                <Radio.Group>
                  <Radio.Button value='small'>Small</Radio.Button>
                  <Radio.Button value='default'>Default</Radio.Button>
                  <Radio.Button value='large'>Large</Radio.Button>
                </Radio.Group>
              </Form.Item>
              <Form.Item label='Input'>
                <Input />
              </Form.Item>
              <Form.Item label='Select'>
                <Select>
                  <Select.Option value='demo'>Demo</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item label='DatePicker'>
                <DatePicker />
              </Form.Item>
              <Form.Item label='Switch'>
                <Switch />
              </Form.Item>
              <Form.Item label='Button'>
                <Button>Button</Button>
              </Form.Item>
              <Form.Item label='TimePicker'>
                <TimePicker />
              </Form.Item>
              <Form.Item label='Radio'>
                <Radio>Radio</Radio>
              </Form.Item>
              <Form.Item label='CheckboxGroup'>
                <Checkbox.Group options={plainOptions} />
              </Form.Item>
            </Form>
          </div>
        }
        markdown={
          <div className='show-html' dangerouslySetInnerHTML={{ __html: FormSizeMd.html }} />
        }
      />

      <IntroduceBox
        height={1250}
        title='表单布局'
        description='表单有三种布局。'
        demo={
          <div style={{ paddingBottom: '20px' }}>
            <Form
              {...formItemLayout}
              layout={formLayout}
              form={form}
              initialValues={{ layout: formLayout }}
              onValuesChange={onFormLayoutChange2}
            >
              <Form.Item label='Form Layout' name='layout'>
                <Radio.Group value={formLayout}>
                  <Radio.Button value='horizontal'>Horizontal</Radio.Button>
                  <Radio.Button value='vertical'>Vertical</Radio.Button>
                  <Radio.Button value='inline'>Inline</Radio.Button>
                </Radio.Group>
              </Form.Item>
              <Form.Item label='Field A'>
                <Input placeholder='input placeholder' />
              </Form.Item>
              <Form.Item label='Field B'>
                <Input placeholder='input placeholder' />
              </Form.Item>
              <Form.Item {...buttonItemLayout}>
                <Button type='primary'>Submit</Button>
              </Form.Item>
            </Form>
          </div>
        }
        markdown={
          <div className='show-html' dangerouslySetInnerHTML={{ __html: FormLayoutMd.html }} />
        }
      />

      <IntroduceBox
        title='API'
        table={<div className='show-html' dangerouslySetInnerHTML={{ __html: FormReadMd.html }} />}
      />
    </div>
  )
}

export default FormPage
