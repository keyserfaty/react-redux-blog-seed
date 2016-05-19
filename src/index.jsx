import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, useRouterHistory } from 'react-router';

import { applyMiddleware, createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import { createHashHistory } from 'history';

import { Post } from './components/views/Post.jsx';
import { Entries } from './components/views/Entries.jsx';

import entities from './state/entities/reducers';
import view from './state/view/reducers';

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });
const loggerMiddleware = createLogger();

const store = createStore(combineReducers({
  entities,
  view
}), applyMiddleware(
  thunkMiddleware,
  loggerMiddleware
));

ReactDOM.render((
  <Provider store={store}>
    <Router history={appHistory}>
      <Route path="/" component={Post} />
      <Route path="entries" component={Entries} />
      <Route path="post" component={Post} />
      <Route path="*" component={Entries} />
    </Router>
  </Provider>
), document.getElementById('root'));
