export const TAGS_REQUEST = 'TAGS_REQUEST';
export const TAGS_REQUEST_SUCCESS = 'TAGS_REQUEST_SUCCESS';
export const TAGS_REQUEST_FAILURE = 'TAGS_REQUEST_FAILURE';

function tagsRequest() {
  return {
    type: TAGS_REQUEST,
    payload: {
      requestingTags: true,
      requestingTagsSuccess: false,
    },
  };
}

function tagsRequestSuccess(tags) {
  return {
    type: TAGS_REQUEST_SUCCESS,
    payload: {
      requestingTags: false,
      requestingTagsSuccess: true,
      tags,
    },
  };
}

function tagsRequestFailure(error) {
  return {
    type: TAGS_REQUEST_FAILURE,
    payload: {
      requestingTags: false,
      requestingTagsSuccess: false,
      error: new Error(error),
    },
  };
}

export function fetchTags() {
  return function tagsFetch(dispatch) {
    dispatch(tagsRequest());

    return fetch('', {
      method: 'GET',
      credentials: 'include',
    })
      .then(response => response.json())
      .then(response => {
        if (response.status === 'true') {
          return dispatch(tagsRequestSuccess(response));
        }

        return dispatch(tagsRequestFailure('Fetching tags failed'));
      });
  };
}
