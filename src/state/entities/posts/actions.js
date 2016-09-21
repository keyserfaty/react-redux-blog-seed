export const ENTRIES_REQUEST = 'ENTRIES_REQUEST';
export const ENTRIES_REQUEST_SUCCESS = 'ENTRIES_REQUEST_SUCCESS';
export const ENTRIES_REQUEST_FAILURE = 'ENTRIES_REQUEST_FAILURE';

export function entriesRequest() {
  return {
    type: ENTRIES_REQUEST,
    payload: {
      requestingEntries: true,
      requestingEntriesSuccess: false,
    },
  };
}

export function entriesRequestSuccess(entries) {
  return {
    type: ENTRIES_REQUEST_SUCCESS,
    payload: {
      requestingEntries: false,
      requestingEntriesSuccess: true,
      entries,
    },
  };
}

export function entriesRequestFailure(error) {
  return {
    type: ENTRIES_REQUEST_FAILURE,
    payload: {
      requestingEntries: false,
      requestingEntriesSuccess: false,
      error: new Error(error),
    },
  };
}

export const POST_ENTRY = 'POST_ENTRY';
export const POST_ENTRY_SUCCESS = 'POST_ENTRY_SUCCESS';
export const POST_ENTRY_FAILURE = 'POST_ENTRY_FAILURE';

export function postEntry(entry) {
  return {
    type: POST_ENTRY,
    payload: {
      postingEntry: true,
      postingEntrySuccess: false,
      entry,
    },
  };
}

export function postEntrySuccess() {
  return {
    type: POST_ENTRY_SUCCESS,
    payload: {
      postingEntry: false,
      postingEntrySuccess: true,
    },
  };
}

export function postEntryFailure(error) {
  return {
    type: POST_ENTRY_FAILURE,
    payload: {
      postingEntry: false,
      postingEntrySuccess: false,
      error: new Error(error),
    },
  };
}
