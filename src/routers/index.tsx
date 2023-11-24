import React from 'react';
import { withRouter } from 'react-router-dom';
// import { IRoute } from '../interface';
import { routers } from './config';

import Router from './Router';

class Routers extends React.Component<any> {
  render() {
    return (
      <Router page={routers as any} />
    )
  }
}

export default withRouter(Routers)