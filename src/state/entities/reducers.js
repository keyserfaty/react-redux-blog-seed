import { combineReducers } from 'redux';
import posts from './posts/reducers';
import tags from './tags/reducers';

export default entities = combineReducers({
  posts,
  tags,
});