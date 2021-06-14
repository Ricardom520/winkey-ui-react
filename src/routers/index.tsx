import React from 'react';
import { withRouter } from 'react-router-dom';
import { IRoute } from '../interface';
import { routers } from './config';

import Router from './Router';

class Routers extends React.Component<IRoute> {
  render() {
    return (
      <Router page={routers} />
    )
  }
}

export default withRouter(Routers)