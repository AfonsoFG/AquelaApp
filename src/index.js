import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { Context } from './context';
import { store } from './store';

import 'jquery/src/jquery';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

const newStore = store();

ReactDOM.render(
    <Context.Provider value={ newStore }>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Context.Provider>,
    document.getElementById('root')
);

module.hot.accept();