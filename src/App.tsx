import React from 'react';
import { hot } from 'react-hot-loader';
import { HashRouter as Router } from 'react-router-dom';

import Routers from './routers';

const App = () => (
  <Router>
    <Routers/>
  </Router>
)

export default hot(module)(App);