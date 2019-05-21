import React from 'react';
import { Main, About } from './components'
import { BrowserRouter,  Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route exact path='/' component={Main} />
        <Route exact path='/about' component={About} />
      </div>
    </BrowserRouter>
  );
}

export default App;