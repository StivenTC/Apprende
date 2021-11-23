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
import { Question2 } from './pages/ai2/question2/Question2';
import { Question3 } from './pages/ai2/question3/Question3';
import { Llamas } from './pages/ai2/llamas/Llamas';
import CasterAI3 from './pages/ai3/Caster';
import { Question9 } from './pages/ai/question9/Question9';
import { Ballons } from './pages/ai/question-5/Balloons';
import { Question5 } from './pages/ai3/question5/Question5';
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
        <Route exact path="/actividades-interactivas-3" component={CasterAI3} />
        <Route exact path="/metacognicion" component={CasterMetacognicion} />
        <Route exact path="/evaluacion-formal" component={CasterEFDA} />
        <Route exact path="/video" component={VideoFraccion} />
        <Route exact path="/infografia" component={Infography} />
        <Route exact path="/video-fraccion" component={VideoFraccion} />
        <Route exact path="/llamas" component={Question2} />
        <Route exact path="/llamas-2" component={Llamas} />
        <Route exact path="/llamas-3" component={Question3} />
        <Route exact path="/question-9" component={Question9} />
        <Route exact path="/question-5" component={Ballons} />
        <Route exact path="/question-5-ai3" component={Question5} />
      </Switch>
    </Router>
  );
}