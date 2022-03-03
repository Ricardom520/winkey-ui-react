export interface PaginationProps {
  type?: 'table'
  pageSize?: number
  disabled?: boolean
  defaultPageSize?: number
  defaultCurrent?: number
  current?: number
  size?: 'default' | 'small'
  total?: number
  onChange?: (page: number, pageSize: number) => void
}

export interface PaginationState {
  current: number
  pageSize: number
}
