export default function useForm() {
  const submit = () => {
    if (this.formThis) {
      return this.formThis.state.formValues
    }

    return {}
  }

  const resetFields = () => {
    const values = {}

    Object.keys(this.formThis.state.formValues).forEach((i) => {
      values[i] = ''
    })
    this.formThis.setState({
      formValues: values
    })
  }

  const getFieldValue = (name) => {
    const values = this.formThis.state.formValues

    return values[name]
  }

  const setFieldsValue = (store) => {
    const values = this.formThis.state.formValues

    Object.keys(store).forEach((i) => {
      values[i] = store[i]
    })

    this.formThis.setState({
      formValues: values
    })
  }

  const itemRef = (ref, _this) => {
    this.form = ref
    this.formThis = _this
  }

  this._form = {
    setFieldsValue,
    getFieldValue,
    resetFields,
    submit,
    __INITERNAL__: {
      itemRef,
      name: undefined
    }
  }

  return [this._form]
}
