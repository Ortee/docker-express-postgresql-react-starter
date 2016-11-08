import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from './store/store';

import App from './components/app';
import Author from './components/AuthorComponent/author';
import Posts from './components/PostsComponent/posts';
import NotFound from './components/NotFoundComponent/notfound';

const app = document.getElementById('app');

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Posts}/>
        <Route path="/author" name="author" component={Author}/>
        <Route path="/posts" name="posts" component={Posts}/>
        <Route path="*" component={NotFound}/>
      </Route>
    </Router>
  </Provider>,
app);
