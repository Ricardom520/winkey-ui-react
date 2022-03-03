export interface InputNumberProps {
  min?: number
  max?: number
  onChange?: (val: number) => void
  defaultValue?: number
  value?: number
}

export interface InputNumberState {
  value: string
}
