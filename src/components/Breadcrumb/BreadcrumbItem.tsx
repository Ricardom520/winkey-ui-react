import React, { ReactNode } from 'react'

import './index.less'

interface BreadcrumbItemProps {
  children?: ReactNode
  isLast?: boolean
  href?: string
  separator?: string
  onClick?: (event) => void
  className?: string
}

export default class BreadcrumbItem extends React.Component<BreadcrumbItemProps> {
  render() {
    const { children, isLast, href, separator, onClick, className } = this.props

    return (
      <span onClick={onClick} className={className}>
        {href !== undefined && <a className='wk-breadcrumb-link'>{children}</a>}
        {href === undefined && <span className='wk-breadcrumb-link'>{children}</span>}
        {!isLast && <span className='wk-breadcrumb-separator'>{separator}</span>}
      </span>
    )
  }
}
