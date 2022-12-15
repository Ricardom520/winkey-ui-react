import React, { ReactNode, MouseEvent } from 'react'

export interface ButtonProps {
  block?: boolean
  children?: ReactNode
  className?: string
  danger?: boolean
  disabled?: boolean
  loading?: boolean
  icon?: ReactNode
  type?: 'default' | 'primary' | 'dashed' | 'text' | 'link'
  shape?: 'circle'
  style?: React.CSSProperties
  size?: 'large' | 'small' | ''
  ghost?: boolean
  onClick?: (event: MouseEvent) => void
  htmlType?: 'button' | 'submit' | 'reset'
  href?: string
}
