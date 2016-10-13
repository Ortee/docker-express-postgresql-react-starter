import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Main from './components/MainComponent/main';
import Author from './components/AuthorComponent/author';
import NotFound from './components/NotFoundComponent/notfound';
const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}/>
    <Route path="author" name="author" component={Author}/>
    <Route path='*' component={NotFound} />
  </Router>,
app);
