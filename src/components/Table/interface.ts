import { ReactNode } from "react";

export interface TableProps {
  columns: Column[]
  dataSource: DataSource[]
}

export interface TableState {
  dataIndexMap: string[]
}

export interface Column {
  title: string,
  dataIndex?: string,
  key?: string | number,
  render?: (text: DataSource, record: DataSource[]) => ReactNode
}

export interface DataSource {
  key?: string | number
  [props: string]: any
}