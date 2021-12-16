import React from 'react';

import Select from '../Select';
import Row from '../Row';
import Col from '../Col';
import Button from '../Button';
import Input from '../Input';
import Checkbox from '../Checkbox';
import DatePicker from '../DatePicker';
import Radio from '../Radio';
import Switch from '../Switch';
import TimePicker from '../TimePicker';
import "./index.less";

interface FormItemProps {
  children?: any;
  name?: string;
  label?: string;
  formName?: string;
  labelCol?: any;
  wrapperCol?: any;
  onFinish?: (val) => void;
  rules?: any;
  isError?: boolean;
  shouldUpdate?: (preValue, currentValue) => boolean;
  formValues?: any;
  setFormValues?: (val) => void;
  isRequired?: any;
  onFinishFailed?: (val) => void;
  setError?: (val) => void;
  onValuesChange?: (val) => void;
  size?: "small" | "default" | "large";
  labelAlign?: "left | right | center";
}

interface FormItemState {
  childrenType: string;
}

const colClass = {
  right: "",
  center: " wk-form-item-label-center",
  left: " wk-form-item-label-left"
}

export default class FormItem extends React.Component<FormItemProps, FormItemState> {
  constructor(props) {
    super(props);

    this.state = {
      childrenType: "",
    }
  } 
  
  componentDidMount() {
    const { children } = this.props;

    const childrenCopy: any = children;

    if (children) {
      this.setState({
        childrenType: childrenCopy.type && childrenCopy.type.displayName,
      })
    }
  }

  shouldComponentUpdate(next) {
    const { shouldUpdate } = next;

    if (shouldUpdate) {
      shouldUpdate()
    } 

    return true
  }

  formButtonClick = (e, props) => {
    const { isRequired, formValues, onFinish, onFinishFailed, setError, name } = this.props;
    const { onClick, htmlType } = props;

    if (htmlType === 'submit') {
      const errors = {};

      Object.keys(formValues).forEach(i => {
        if (isRequired[i] && !formValues[i]) {
          errors[i] = isRequired[i].message || `请输入${i}`;
        } 
      })

      if (Object.keys(errors).length) {
        if (onFinishFailed) {
          onFinishFailed(errors);
        }

        setError(errors);

        return;
      }

      setError({})
      onFinish(formValues)
    }

    if (onClick) {
      onClick(e)
    }
  }

  formSelectChange = (val, props) => {
    const { name, setFormValues, formValues, onValuesChange } = this.props;
    const { onChange } = props;

    if (name) {
      formValues[name] = val;

      setFormValues(formValues)
    }

    if (onChange) {
      onChange(val)
    }

    if (onValuesChange) {
      const values = {};
      values[name] = val;
      onValuesChange(values)
    }
  }

  formInputChange = (e, props) => {
    const { name, setFormValues, formValues, onValuesChange } = this.props;
    const { onChange } = props;

    if (name) {
      formValues[name] = e.target.value;
    
      setFormValues(formValues)
    }

    if (onChange) {
      onChange(e)
    }

    if (onValuesChange) {
      const values = {};
      values[name] = e.target.value;
      onValuesChange(values)
    }
  }

  formCheckBoxChange = (e, props) => {
    const { name, setFormValues, formValues, onValuesChange } = this.props;
    const { onChange } = props;

    if (name) {
      formValues[name] = e.target.checked;
    
      setFormValues(formValues)
    }

    if (onChange) {
      onChange(e)
    }

    if (onValuesChange) {
      const values = {};
      values[name] = e.target.checked;
      onValuesChange(values);
    }
  }

  formRadioGroupChange = (e, props) => {
    const { name, setFormValues, formValues, onValuesChange } = this.props;
    const { onChange } = props;

    if (name) {
      formValues[name] = e.target.value;
    
      setFormValues(formValues)
    }

    if (onChange) {
      onChange(e)
    }

    if (onValuesChange) {
      const values = {};
      values[name] = e.target.value;
      onValuesChange(values)
    }
  }

  formSwitchChange = (boolean, props) => {
    const { name, setFormValues, formValues, onValuesChange } = this.props;
    const { onChange } = props;

    if (name) {
      formValues[name] = boolean;
    
      setFormValues(formValues)
    }

    if (onChange) {
      onChange(boolean)
    }

    if (onValuesChange) {
      const values = {};
      values[name] = boolean;
      onValuesChange(values);
    }
  }

  formDatePickerChange = (val, props) => {
    const { name, setFormValues, formValues, onValuesChange } = this.props;
    const { onChange } = props;

    if (name) {
      formValues[name] = val;
    
      setFormValues(formValues)
    }

    if (onChange) {
      onChange(val)
    }

    if (onValuesChange) {
      const values = {};
      values[name] = val;
      onValuesChange(values);
    }
  }

  formTimePickerChange = (val, props) => {
    const { name, setFormValues, formValues, onValuesChange } = this.props;
    const { onChange } = props;

    if (name) {
      formValues[name] = val;
    
      setFormValues(formValues)
    }

    if (onChange) {
      onChange(val)
    }

    if (onValuesChange) {
      const values = {};
      values[name] = val;
      onValuesChange(values);
    }
  }

  formRadioChange = (e, props) => {
    const { name, setFormValues, formValues, onValuesChange } = this.props;
    const { onChange } = props;

    if (name) {
      formValues[name] = e.target.checked;
    
      setFormValues(formValues)
    }

    if (onChange) {
      onChange(e.target.checked)
    }

    if (onValuesChange) {
      const values = {};
      values[name] = e.target.checked;
      onValuesChange(values);
    }
  }

  formCheckboxGroupChange = (val, props) => {
    const { name, setFormValues, formValues, onValuesChange } = this.props;
    const { onChange } = props;

    if (name) {
      formValues[name] = val;
    
      setFormValues(formValues)
    }

    if (onChange) {
      onChange(val)
    }

    if (onValuesChange) {
      const values = {};
      values[name] = val;
      onValuesChange(values);
    }
  }

  initChildren = (kid?, key?) => {
    const { formValues, name, size } = this.props;

    const childType = {
      button: <Button {...kid.props} key={key} onClick={(e) => this.formButtonClick(e, kid.props)} size={size} />,
      select: <Select value={formValues[name] === undefined ? (kid.props.value || kid.props.defaultValue) : formValues[name]} {...kid.props} size={size} key={key} onChange={(e) => this.formSelectChange(e, kid.props)}/>,
      input: <Input value={formValues[name] === undefined ? (kid.props.value || kid.props.defaultValue) : formValues[name]} {...kid.props} size={size} key={key} onChange={(e) => this.formInputChange(e, kid.props)} />,
      password: <Input value={formValues[name] === undefined ? (kid.props.value || kid.props.defaultValue) : formValues[name]} {...kid.props} size={size} key={key} onChange={(e) => this.formInputChange(e, kid.props)} />,
      checkbox: <Checkbox value={formValues[name] === undefined ? (kid.props.value || kid.props.defaultValue) : formValues[name]} {...kid.props} size={size} key={key} onChange={e => this.formCheckBoxChange(e, kid.props)} />,
      radioGroup: <Radio.Group value={formValues[name] === undefined ? (kid.props.value || kid.props.defaultValue) : formValues[name]} {...kid.props} size={size} key={key} onChange={e => this.formRadioGroupChange(e, kid.props)} />,
      datepicker: <DatePicker value={formValues[name] === undefined ? (kid.props.value || kid.props.defaultValue) : formValues[name]} {...kid.props} size={size} key={key} onChange={e => this.formDatePickerChange(e, kid.props)} />,
      switch: <Switch value={formValues[name] === undefined ? (kid.props.value || kid.props.defaultValue) : formValues[name]} {...kid.props} size={size} key={key} onChange={boolean => this.formSwitchChange(boolean, kid.props)} />,
      timepicker: <TimePicker value={formValues[name] === undefined ? (kid.props.value || kid.props.defaultValue) : formValues[name]} {...kid.props} size={size} key={key} onChange={e => this.formTimePickerChange(e, kid.props)} />,
      radio: <Radio value={formValues[name] === undefined ? (kid.props.value || kid.props.defaultValue) : formValues[name]} {...kid.props} size={size} key={key} onChange={e => this.formRadioChange(e, kid.props)} />, 
      checkGroup: <Checkbox.Group value={formValues[name] === undefined ? (kid.props.value || kid.props.defaultValue) : formValues[name]} {...kid.props} size={size} key={key} onChange={e => this.formCheckboxGroupChange(e, kid.props)} />
    }

    return childType[kid.type.winkeyName] || kid
  }

  render() {
    const { label, labelCol, formName, children, wrapperCol, rules, isError, labelAlign } = this.props;

    return (
      <Row className={
        "wk-form-item" +
        (isError ? " wk-form-item-has-error" : "") +
        (isError && rules && rules[0] ? " wk-form-item-with-help" : "")
      }>
        {
          label && 
          <Col className={
            "wk-form-item-label" +
            colClass[labelAlign]
          } {...labelCol}>
            <label htmlFor={`${formName}_${label}`} title={label} className={rules && rules[0].required && "wk-form-item-required"}>
              {label}
            </label>
          </Col>
        }
        <Col {...wrapperCol} className="wk-form-item-control">
          <div className="wk-form-item-control-input">
            <div className="wk-form-item-control-input-content">
              {
                !children.length &&
                this.initChildren(children)
              }
              {
                children.length > 0 &&
                children.map((i, n) => {
                  return (
                    this.initChildren(i, n)
                  )
                })
              }
            </div>
          </div>
          {
            isError &&
            <div
              className={
                "wk-form-item-explain" +
                " wk-form-item-explain-error"
              }
            >
              {isError}
            </div>
          }
        </Col> 
      </Row>
    )
  }
}