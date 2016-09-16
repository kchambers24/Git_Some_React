import React from 'react';
import { render } from 'react-dom'
import App from './App';
import './index.css';
import { Router, Route, hashHistory } from 'react-router'
import ClassList from './ClassList'
import Repos from './Repos'
import UserInfo from './UserInfo'

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      {/* make them children of `App` */}
      <Route path="/classlist" component={ClassList}>
      <Route path="/classlist/:userName" component={UserInfo}/>
      </Route>

    </Route>
  </Router>
), document.getElementById('root'))
