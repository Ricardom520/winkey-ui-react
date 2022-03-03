import React, { ReactNode } from 'react'

import BreadcrumbItem from './BreadcrumbItem'
import './index.less'

interface BreadcrumbProps {
  children?: any
  separator?: ReactNode
  className?: string
}

export default class Breadcrumb extends React.Component<BreadcrumbProps> {
  static Item = BreadcrumbItem

  static defaultProps = {
    separator: '/'
  }

  render() {
    const { children, separator, className } = this.props

    return (
      <div className={'wk-breadcrumb' + (className ? ` ${className}` : '')}>
        {children.length > 0 &&
          React.Children.map(children, (child, index) => {
            return React.cloneElement(child, {
              isLast: index === children.length - 1,
              separator
            })
          })}
        {!children.length && children}
      </div>
    )
  }
}
