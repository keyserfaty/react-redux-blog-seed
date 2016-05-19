export const ENTRIES_REQUEST = 'ENTRIES_REQUEST';
export const ENTRIES_REQUEST_SUCCESS = 'ENTRIES_REQUEST_SUCCESS';
export const ENTRIES_REQUEST_FAILURE = 'ENTRIES_REQUEST_FAILURE';

function entriesRequest() {
  return {
    type: ENTRIES_REQUEST,
    payload: {
      requestingEntries: true,
      requestingEntriesSuccess: false,
    },
  }
};

function entriesRequestSuccess(entries) {
  return {
    type: ENTRIES_REQUEST_SUCCESS,
    payload: {
      requestingEntries: false,
      requestingEntriesSuccess: true,
      entries,
    },
  }
};

function entriesRequestFailure(error) {
  return {
    type: ENTRIES_REQUEST_FAILURE,
    payload: {
      requestingEntries: false,
      requestingEntriesSuccess: false,
      error: new Error(error),
    },
  }
};

export function fetchEntries() {
  return function entriesFetch(dispatch) {
    dispatch(entriesRequest());

    return fetch('', {
      method: 'GET',
      credentials: 'include',
    })
      .then(response => response.json())
      .then(response => {
        if (response.status === 'true') {
          return dispatch(entriesRequestSuccess(response));
        }

        return dispatch(entriesRequestFailure('Fetching entries failed'));
      });
  };
};

export const POST_ENTRY = 'POST_ENTRY';
export const POST_ENTRY_SUCCESS = 'POST_ENTRY_SUCCESS';
export const POST_ENTRY_FAILURE = 'POST_ENTRY_FAILURE';

function postEntry() {
  return {
    type: POST_ENTRY,
    payload: {
      postingEntry: true,
      postingEntrySuccess: false,
    },
  }
};

function postEntrySuccess(entries) {
  return {
    type: POST_ENTRY_SUCCESS,
    payload: {
      postingEntry: false,
      postingEntrySuccess: true,
      entries,
    },
  }
};

function postEntryFailure(error) {
  return {
    type: POST_ENTRY_FAILURE,
    payload: {
      postingEntry: false,
      postingEntrySuccess: false,
      error: new Error(error),
    },
  }
};

export function fetchPostEntry(content) {
  return function entryPostFetch(dispatch) {
    dispatch(postEntry());

    return fetch('', {
      method: 'POST',
      credentials: 'include',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: content.title,
        content,
      }),
    })
      .then(response => response.json())
      .then(response => {
        if (response.status === 'true') {
          return dispatch(postEntrySuccess(response));
        }

        return dispatch(postEntryFailure('Posting entry failed'));
      });
  };
};