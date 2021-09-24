import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from '../src/pages/App';

export default function AppRoutes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
      </Switch>
    </Router>
  );
}