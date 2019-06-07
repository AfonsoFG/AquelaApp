import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom";

import 'jquery/src/jquery';

import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));

module.hot.accept();