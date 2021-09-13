import React from 'react';
import { hot } from 'react-hot-loader';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'mobx-react'

import Routers from './routers';
import store from './stores';

const App = () => (
  <Provider {...store}>
    <Router>
      <Routers/>
    </Router>
  </Provider>
)

export default hot(module)(App);