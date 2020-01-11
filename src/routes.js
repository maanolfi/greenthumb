import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Questions from './pages/Questions';
import Results from './pages/Results';
import Details from './pages/Details';


export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/questions" exact component={Questions} />
      <Route path="/results" exact component={Results} />
      <Route path="/details" exact component={Details} />

    </Switch>
  );
}
