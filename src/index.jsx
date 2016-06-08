import React from 'react';
import { render } from 'react-dom';
import { Router, Route, useRouterHistory, IndexRoute } from 'react-router';

import { applyMiddleware, createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import createLogger from 'redux-logger';

import { createHashHistory } from 'history';

import App from './components/views/App';
import { PostContainer } from './components/views/Post/PostContainer';
import Entries from './components/views/Entries/Entries';

import { entities } from './state/entities/reducers';

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });
const loggerMiddleware = createLogger();

const store = createStore(combineReducers({
  entities,
}), applyMiddleware(
  thunkMiddleware,
  loggerMiddleware
));

render(
  <div>
    <Provider store={store}>
      <Router history={appHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={PostContainer} />
          <Route path="entries" component={Entries} />
          <Route path="post" component={PostContainer} />
          <Route path="*" component={PostContainer} />
        </Route>
      </Router>
    </Provider>
  </div>,
  document.getElementById('root')
);

