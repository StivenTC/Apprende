import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from '../src/pages/App';
import Caster from './pages/activities/Caster';
// import { Header } from './components/layout/Header/header';

export default function AppRoutes() {
  return (
    <Router>
      {/* <Header /> */}
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/activities" component={Caster} />
      </Switch>
    </Router>
  );
}