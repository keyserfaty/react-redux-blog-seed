import {
  ENTRIES_REQUEST,
  ENTRIES_REQUEST_SUCCESS,
  ENTRIES_REQUEST_FAILURE,
  POST_ENTRY,
  POST_ENTRY_SUCCESS,
  POST_ENTRY_FAILURE,
} from './actions';

const initialState = {
  posts: {},
  requestingEntries: '',
  requestingEntriesSuccess: '',
  postingEntry: '',
  postingEntrySuccess: '',
};

export default posts = (state = initialState, action) => {
  switch (action.type) {
    case ENTRIES_REQUEST:
    case ENTRIES_REQUEST_FAILURE:
      return {
        requestingEntries: action.payload.requestingEntries,
        requestingEntriesSuccess: action.payload.requestingEntriesSuccess,
      };

    case ENTRIES_REQUEST_SUCCESS:
      return {
        requestingEntries: action.payload.requestingEntries,
        requestingEntriesSuccess: action.payload.requestingEntriesSuccess,
        posts: action.payload.posts,
      };

    case POST_ENTRY:
    case POST_ENTRY_FAILURE:
    case POST_ENTRY_SUCCESS:
      return {
        postingEntry: action.payload.postingEntry,
        postingEntrySuccess: action.payload.postingEntrySuccess,
      };

    default:
      return state;
  };
};
