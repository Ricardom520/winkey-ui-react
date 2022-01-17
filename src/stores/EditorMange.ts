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
  columns?: {
    title: string
    dataIndex: string
  }[]
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