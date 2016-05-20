import {
  ENTRIES_REQUEST,
  ENTRIES_REQUEST_SUCCESS,
  ENTRIES_REQUEST_FAILURE,
  POST_ENTRY,
  POST_ENTRY_SUCCESS,
  POST_ENTRY_FAILURE,
} from './actions';

const initialState = {
  entries: [],
  requestingEntries: '',
  requestingEntriesSuccess: '',
  postingEntry: '',
  postingEntrySuccess: '',
};

export const posts = (state = initialState, action) => {
  switch (action.type) {
  case ENTRIES_REQUEST:
  case ENTRIES_REQUEST_FAILURE:
    return {
      ...state,
      requestingEntries: action.payload.requestingEntries,
      requestingEntriesSuccess: action.payload.requestingEntriesSuccess,
    };

  case ENTRIES_REQUEST_SUCCESS:
    return {
      ...state,
      requestingEntries: action.payload.requestingEntries,
      requestingEntriesSuccess: action.payload.requestingEntriesSuccess,
      entries: [
        ...state.entries,
        action.payload.entry,
      ],
    };

  case POST_ENTRY:
  case POST_ENTRY_FAILURE:
    return {
      ...state,
      postingEntry: action.payload.postingEntry,
      postingEntrySuccess: action.payload.postingEntrySuccess,
    };

  case POST_ENTRY_SUCCESS:
    return {
      ...state,
      postingEntry: action.payload.postingEntry,
      postingEntrySuccess: action.payload.postingEntrySuccess,
      entries: [
        ...state.entries,
        action.payload.entry,
      ],
    };

  default:
    return state;
  }
};
