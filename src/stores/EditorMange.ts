import { observable, makeObservable, action } from 'mobx'
import { ReactNode } from 'react'

export interface ElementStruct {
  id: string
  type: string
  minWidth?: string | number
  minHeight?: string | number
  backgroundColor?: string 
  margin?: string
  children?: {
    id: string
    type: string
    [propsName: string]: string | number
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
  @observable elementsObj = null
  @observable focusElement: FocusElementBaseStruct = null

  @action setElementsObj = (val) => {
    this.elementsObj = val
  }

  @action setFocusElement = (val: FocusElementBaseStruct) => {
    this.focusElement = val
  }
}

export default editorMange