import { takeEvery, delay } from 'redux-saga';
import { put, call } from 'redux-saga/effects';

import * as actions from './actions';

const entriesFetch = () =>
  fetch('', {
    method: 'GET',
    credentials: 'include',
  })
    .then(response => response.json())
    .then(response => response)
    .catch(error => error);

/**
 * Performs the async call to fetch entries and handles
 * the response or error
  */
export function* fetchEntriesWorker() {
  const { response, error } = yield call(entriesFetch);

  if (response) yield put(actions.entriesRequestSuccess, response);
  if (error) yield put(actions.entriesRequestFailure, error);
}

export function* fetchPostEntry(content) {
  yield put(actions.postEntrySuccess, content);
}

/**
 * Launch the action
 */
function* watchFetchEntries() {
  yield* takeEvery(actions.entriesRequest, fetchEntriesWorker);
}

function* watchPostEntry() {
  yield* takeEvery(actions.postEntry, fetchPostEntry);
}

export default [
  watchFetchEntries,
  watchPostEntry
];