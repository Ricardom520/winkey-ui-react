import React from 'react'

import styles from './index.module.less'

interface PageTitleProps {
  title: string
  description: string
}

const PageTitle: React.FC<PageTitleProps> = (props) => {
  const { title, description } = props

  return (
    <section className={styles['page-title-container']}>
      <h2>{title}</h2>
      <p>{description}</p>
    </section>
  )
}

export default PageTitle
