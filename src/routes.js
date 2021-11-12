import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from '../src/pages/App';
import Caster from './pages/exploration/Caster';
import CasterAI from './pages/ai/Caster';
import VideoFraccion from './pages/Media/Video';
import { Register } from './pages/auth/register/Register';
import CasterMetacognicion from './pages/metacognition/Caster';
import { Question3 } from './pages/efda/question-3/Question3';
import { Question7 } from './pages/efda/question-7/Question7';
import { Question8 } from './pages/efda/question-8/Question8';
// import { Header } from './components/layout/Header/header';

export default function AppRoutes() {
  return (
    <Router>
      {/* <Header /> */}
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/registro" component={Register} />
        <Route exact path="/exploracion" component={Caster} />
        <Route exact path="/actividades-interactivas" component={CasterAI} />
        <Route exact path="/metacognicion" component={CasterMetacognicion} />
        <Route exact path="/video-fraccion" component={VideoFraccion} />
        <Route exact path="/efda" component={Question3} />
        <Route exact path="/efda2" component={Question7} />
        <Route exact path="/efda3" component={Question8} />
      </Switch>
    </Router>
  );
}