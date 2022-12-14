import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import './index.less'

const routes = [
  {
    url: '/components',
    title: '组件'
  },
  {
    url: '/design',
    title: '设计'
  }
]

const ListsMenus: React.FC = () => {
  const [actIndex, setActIndex] = useState<number>(0)

  useEffect(() => {
    switch (window.location.hash) {
      case '#/components':
        setActIndex(0)
        break
      case '#/design':
        setActIndex(1)
        break
      default:
        setActIndex(0)
    }
  }, [])

  return (
    <ul className='lists-menus'>
      {routes.map(
        (
          i: {
            title: string
            url: string
          },
          index: number
        ) => {
          return (
            <li className={actIndex === index ? 'active' : ''} key={i.title}>
              <Link to={i.url}>{i.title}</Link>
            </li>
          )
        }
      )}
    </ul>
  )
}

export default ListsMenus
