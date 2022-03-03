import { ReactNode } from 'react'

export interface PickerViewTypes {
  disabled?: boolean
  selectedValue?: any
  onValueChange?: (value: any, index?: number, label?: string) => void
  itemStyle?: any
  /** web only */
  prefixCls?: string
  indicatorStyle?: any
  indicatorClassName?: string
  className?: string
  defaultSelectedValue?: any
  style?: React.CSSProperties
  onScrollChange?: (value: any) => void
  noAnimate?: boolean
  children?: ReactNode
}
