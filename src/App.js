import React from 'react';
import { Main, Blog, About, Metronome, Calculator } from './components'
import { Route, Switch } from "react-router-dom";
import './assets/css/App.css';

function App() {
  return (
    <Switch>
        <Route exact path='/' component={Main} />
        <Route exact path='/blog' component={Blog} />
        <Route exact path='/metronome' component={Metronome} />
        <Route exact path='/calculator' component={Calculator} />
        <Route exact path='/about' component={About} />
    </Switch>
  );
}

export default App;