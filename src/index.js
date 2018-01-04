import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route, Switch, } from 'react-router-dom';

import Home from './components/Home.js';
import Portfolio from './components/Portfolio.js';
import Bio from './components/Bio.js';
import Contact from './components/Contact.js';
import MainNav from './components/MainNavigation.js';

ReactDOM.render(
  <BrowserRouter>
    <MainNav>
      <Switch>
        <Route path="/Home" component={Home}/>
        <Route path="/Portfolio" component={Portfolio}/>
        <Route path="/Bio" component={Bio}/>
        <Route path="/Contact" component={Contact}/>
      </Switch>
    </MainNav>
  </BrowserRouter>
,document.getElementById('root'));
registerServiceWorker();
