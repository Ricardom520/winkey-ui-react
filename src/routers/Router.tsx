import React from 'react'
import { Redirect, Route, Switch, withRouter } from 'react-router-dom'

import { IRoute } from '@/interface'
import Transition from '@/components/Transition'

interface IProps extends IRoute {
  transition?: boolean // 开启跳转动画
  page: {
    [index: string]: any
  }
  location: any
  history: any
}

// 路由注册
const Router: React.SFC<IProps> = ({ transition, page, location, history }) => {
  const key: string[] = Object.keys(page)

  const res = (
    <Switch location={location} key={location.pathname}>
      {key.map((item, index) => (
        <Route key={index} path={item} exact={item === '/'} component={page[item]} />
      ))}
      <Redirect to={key[0]} />
    </Switch>
  )

  if (transition) {
    const name = history.action === 'PUSH' ? 'go' : 'back'

    return <Transition name={name}>{res}</Transition>
  }

  return res
}

export default withRouter(Router)
