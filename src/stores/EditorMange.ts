import { observable, makeObservable, action } from 'mobx'

export interface ElementStruct {
  id: string
  type: string
  minWidth: string | number
  minHeight: string | number
  backgroundColor: string 
  children?: {
    [propsName: string]: string | number
  }
}

interface FocusElementBaseStruct {
  id: string
  type: string
  width?: string
  height?: string
  color?: string
  fontSize?: number
  fontWeight?: number
  hasBorder?: number
  padding?: string
  margin?: string
  backgroundColor?: string
  borderColor?: string
  borderSize?: string
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