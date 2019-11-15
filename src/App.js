import React from 'react';
import { Main, Blog, About, Metronome, Calculator, BlogSinglePost, Error404, Weather, Todo } from './components'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './assets/css/App.css';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Main} />
                <Route exact path='/blog' component={Blog} />
                <Route exact path='/blog/:page' component={Blog} />
                <Route exact path='/post/:id' component={BlogSinglePost} />
                <Route exact path='/metronome' component={Metronome} />
                <Route exact path='/calculator' component={Calculator} />
                <Route exact path='/weather' component={Weather} />
                <Route exact path='/todo' component={Todo} />
                <Route exact path='/about' component={About} />
                <Route component={Error404} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;