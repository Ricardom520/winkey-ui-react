import { observable, makeObservable, action } from 'mobx'

export interface ElementStruct {
  type: string
  minWidth: string | number
  minHeight: string | number
  backgroundColor: string 
  children?: {
    [propsName: string]: string | number
  }
}

class editorMange {
  constructor() {
    makeObservable(this)
  }

  @observable test: number = 0
  @observable elementsObj = {}
}

export default editorMange