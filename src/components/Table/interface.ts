import { ReactNode } from "react";

export interface TableProps {
  columns: Column[]
  dataSource: DataSource[]
  rowSelection?: {
    type?: 'checkbox' | 'radio'
    onChange?: (selectedRowKeys: React.Key[], selectedRows: DataSource[]) => void
    getCheckboxProps?: (record: DataSource) => void
  }
}

export interface TableState {
 
}

export interface Column {
  title: string,
  dataIndex?: string,
  key?: string | number,
  render?: (text: DataSource | string | number | boolean, record: DataSource[] | DataSource) => ReactNode
}

export interface DataSource {
  key?: string | number
  [props: string]: any
}