import { ReactNode } from 'react'
import { useRoutes } from 'react-router-dom'

export type RoutesStruct = {
  path: string
  name?: string
  index?: boolean
  element: ReactNode
}

export const Router: React.FC<{
  routes: RoutesStruct[]
}> = (props) => {
  const elm = useRoutes(props.routes)

  return elm
}
