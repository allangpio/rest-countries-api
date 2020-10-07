import React from 'react';
import { Switch, Route } from 'react-router';
import Details from '../pages/Details';
import Home from '../pages/Home';


const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/detail/:name" component={Details} />
    </Switch>
  )
}

export default Routes;
