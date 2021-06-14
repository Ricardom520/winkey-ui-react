```tsx
import React from 'react';
import { Form, Input, Checkbox, Button, Select, Radio, DatePicker, Switch, TimePicker } from 'winkey-ui-react';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const Demo: React.FC = () => {
  const [size, setSize] = useState<"small" | "default" | "large">("default");

  const onFormLayoutChange = ({ size }: { size: "small" | "default" | "large" }) => {
    setSize(size);
  };

  return (
    <Form
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 14 }}
      layout="horizontal"
      initialValues={{ size }}
      onValuesChange={onFormLayoutChange}
      size={size}
    >
      <Form.Item label="Form Size" name="size">
        <Radio.Group>
          <Radio.Button value="small">Small</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="large">Large</Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="Input">
        <Input />
      </Form.Item>
      <Form.Item label="Select">
        <Select>
          <Select.Option value="demo">Demo</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label="DatePicker">
        <DatePicker />
      </Form.Item>
      <Form.Item label="Switch">
        <Switch />
      </Form.Item>
      <Form.Item label="Button">
        <Button>Button</Button>
      </Form.Item>
      <Form.Item label="TimePicker">
        <TimePicker/>
      </Form.Item>
      <Form.Item label="Radio">
        <Radio>Radio</Radio>
      </Form.Item>
      <Form.Item label="CheckboxGroup">
        <Checkbox.Group options={plainOptions} />
      </Form.Item>
    </Form>
  )
}

export default Demo;
```