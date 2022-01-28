import { observable, makeObservable, action } from 'mobx'
import { ReactNode } from 'react'

export interface ElementStruct {
  id: string
  type: string
  minWidth?: string | number
  minHeight?: string | number
  height?: string | number
  backgroundColor?: string 
  margin?: string
  children?: {
    id: string
    type: string
    [propsName: string]: string | number | {
      title: string
      dataIndex: string
    }[]
  }[]
  title?: string
  content?: string | ReactNode
  labelCol?: number,
  wrapperCol?: number,
  layout?: "horizontal" | "vertical" | "inline"
  columns?: {
    title: string
    dataIndex: string
  }[]
  formItems?: {
    title: string
    [propsName: string]: string
  }[]
  row?: number // form每行个数
  isSubmit?: boolean // form是否有提交按钮
  submitAlign?: 'left' | 'center' | 'right' | 'end' // 提交按钮位置
}

export interface FocusElementBaseStruct {
  id: string
  [props: string]: any
}

class editorMange {
  constructor() {
    makeObservable(this)
  }

  @observable test: number = 0
  @observable elements: ElementStruct[] = null
  @observable focusElement: FocusElementBaseStruct = null

  @action.bound setElementsObj = (val) => {
    this.elements = val
  }

  @action setFocusElement = (val: FocusElementBaseStruct) => {
    this.focusElement = val
  }
}

export default editorMange