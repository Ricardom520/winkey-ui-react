import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { routes } from './routes'
import { Router } from '~/pages/router'
import 'highlight.js/styles/monokai-sublime.css'
import '~/styles/base.less'
import './index.less'

const root = ReactDOM.createRoot(document.getElementById('app') as HTMLElement)

root.render(
  <HashRouter>
    <Router routes={routes} />
  </HashRouter>
)
