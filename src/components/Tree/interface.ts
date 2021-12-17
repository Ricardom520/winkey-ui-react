import { ReactNode } from "react";

export interface TreeDataStruce {
  title: ReactNode
  key: string | number
  disabled?: boolean
  disableCheckbox?: boolean
  children?: TreeDataStruce[]
}

export interface TreeDataPrivateStruce extends TreeDataStruce {
  checked?: boolean
  indeterminate?: boolean
  expanded?: boolean
}

export interface TreeProps {
  checkable?: boolean
  defaultExpandedKeys?: any[]
  defaultSelectedKeys?: any[]
  defaultCheckedKeys?: any[]
  checkedKeys?: any[]
  expandedKeys?: any[]
  onSelect?: (selectedKeys: React.Key[], info: any) => void
  onCheck?: (selectedKeys: React.Key[], info: any) => void
  treeData?: TreeDataStruce[]
}

export interface TreeState {
  checkedKeys: any[]
  expandedKeys: any[]
  treeData: TreeDataPrivateStruce[]
}