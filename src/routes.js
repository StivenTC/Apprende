import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from '../src/pages/App';
import Caster from './pages/exploration/Caster';
import CasterAI from './pages/ai/Caster';
import VideoFraccion from './pages/Media/Video/Video';
import { Register } from './pages/auth/register/Register';
import CasterMetacognicion from './pages/metacognition/Caster';
import CasterAI2 from './pages/ai2/Caster';
import { SignOut } from './pages/auth/signOut/SignOut';
import Infography from './pages/Media/Infography/Infography';
import CasterEFDA from './pages/efda/Caster';
import { Question8 } from './pages/efda/question-8/Question8';
// import { Header } from './components/layout/Header/header';

export default function AppRoutes() {
  return (
    <Router>
      {/* <Header /> */}
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/registro" component={Register} />
        <Route exact path="/gracias" component={SignOut} />
        <Route exact path="/exploracion" component={Caster} />
        <Route exact path="/actividades-interactivas" component={CasterAI} />
        <Route exact path="/actividades-interactivas-2" component={CasterAI2} />
        <Route exact path="/metacognicion" component={CasterMetacognicion} />
        <Route exact path="/evaluacion-formal" component={CasterEFDA} />
        <Route exact path="/video" component={VideoFraccion} />
        <Route exact path="/infografia" component={Infography} />
        <Route exact path="/video-fraccion" component={VideoFraccion} />
        <Route exact path="/question-8" component={Question8} />
      </Switch>
    </Router>
  );
}