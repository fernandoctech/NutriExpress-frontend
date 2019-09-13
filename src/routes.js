import React from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './pages/Main';
import Feed from './pages/feed';
import Post from './pages/post/index';
import Nutri from './pages/professional';
import Student from './pages/Student';

const Routes = () =>(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Feed} />
      <Route path="/post/:id" component={Post} />
      <Route path="/nutri" component={Nutri} />
      <Route path="/student" component={Student}/>
    </Switch>
  </BrowserRouter>
);

export default Routes;