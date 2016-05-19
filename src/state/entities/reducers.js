import { combineReducers } from 'redux';
import { posts } from './posts/reducers';
import { tags } from './tags/reducers';

export const entities = combineReducers({
  posts,
  tags,
});
