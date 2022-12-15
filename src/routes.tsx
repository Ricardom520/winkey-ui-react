import Index from '~/pages/index'
import Document from '~/pages/document'

export const routes = [
  {
    path: '/',
    name: '主页',
    element: <Index />
  },
  {
    path: '/components/*',
    name: '组件',
    element: <Document />
  }
]
