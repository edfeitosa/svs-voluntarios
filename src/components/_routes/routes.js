import React from 'react';
import { Switch, Route } from 'react-router-dom';

import IndexPage from '../../pages/indexPage';
import User from '../../pages/user';
import Churches from '../../pages/churches';
import Departments from '../../pages/departments';
import NotFound from '../../pages/notFound';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/home" component={IndexPage} />
        <Route path="/user" component={User} />
        <Route path="/churches" component={Churches} />
        <Route path="/departments" component={Departments} />
        <Route path="*" component={NotFound} />
      </Switch>
    )
  }
}

export default Routes;