import React, { ReactNode } from 'react';

import useForm from './UseForm';
import FormItem from './FormItem';
import "./index.less";

interface FormProps {
  name?: string;
  children?: any;
  layout?: "horizontal" | "vertical" | "inline";
  labelCol?: any;
  style?: React.CSSProperties
  wrapperCol?: any;
  onFinish?: (val) => void;
  onFinishFailed?: (val) => void;
  onValuesChange?: (val) => void;
  form?: any;
  size?: "small" | "default" | "large",
  initialValues?: any;
  labelAlign?: "left | right | center"
}

interface FormState {
  errors: number[];
  formValues: any;
  isRequired: any;
}

const LayoutClass = {
  horizontal: " wk-form-horizontal",
  vertical: " wk-form-vertical",
  inline: " wk-form-inline",
  default: " wk-form-default",
  small: " wk-form-small",
  large: " wk-form-large",
  "": ""
}

export default class index extends React.Component<FormProps, FormState> {
  private form;

  static Item = FormItem;
  static useForm = useForm;

  static defaultProps = {
    layout: "horizontal",
    size: "default",
    name: "",
    labelAlign: "right",
    initialValues: {},
  }

  constructor(props) {
    super(props);

    this.state = {
      errors: [],
      isRequired: {},
      formValues: {},
    }

    this.form = React.createRef();
  }

  componentDidMount() {
    const { form, name, children, initialValues } = this.props;
    const { formValues, isRequired } = this.state;

    if (form) {
      form.__INITERNAL__.itemRef(this.form, this)
      form.__INITERNAL__.name = name
    }

    if (children && typeof children === 'object') {
      if (!children.length) {
        if (children.props.name) {
          formValues[children.props.name] = initialValues[children.props.name] || undefined;
        }
      } else {
        children.forEach(i => {
          if (i && i.props && i.props.name) {
            formValues[i.props.name] = initialValues[i.props.name] || undefined;
            if (i.props.rules && i.props.rules[0].required) {
              isRequired[i.props.name] = i.props.rules[0]
            }
          }
        })
      }
    }

    this.setState({
      formValues,
      isRequired
    })
  }

  render() {
    const { name, children, layout, labelCol, wrapperCol, onFinish, onFinishFailed, size, onValuesChange, labelAlign, style } = this.props;
    const { errors, formValues, isRequired,  } = this.state;

    return (
      <form style={style} action="#" ref={this.form} id={name} className={
        "wk-form" +
        LayoutClass[layout] +
        LayoutClass[size]
      }>
        {
          children && typeof children === 'object' && React.Children.map(children, (child: any) => {
            if (!child) return null;

            if (!child.type.name) return child
            return React.cloneElement(child, {
              formName: name,
              labelCol: child.props.labelCol || labelCol,
              wrapperCol: child.props.wrapperCol || wrapperCol,
              onFinish,
              onFinishFailed,
              rules: child.props ? child.props.rules : [],
              isError: child.props ? errors[child.props.name] : [],
              formValues,
              setError: (val) => {
                this.setState({
                  errors: val
                })
              },
              setFormValues: (val) => this.setState({
                formValues: val
              }),
              isRequired,
              onValuesChange,
              size,
              labelAlign,
            })
          })
        }
        {
          children && typeof children !== 'object' && children
        }
      </form>
    )
  }
}