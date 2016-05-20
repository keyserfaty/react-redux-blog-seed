import {
  TAGS_REQUEST,
  TAGS_REQUEST_SUCCESS,
  TAGS_REQUEST_FAILURE,
} from './actions';

const initialState = {
  tags: [],
  requestingTags: '',
  requestingTagsSuccess: '',
};

export const tags = (state = initialState, action) => {
  switch (action.type) {
  case TAGS_REQUEST:
  case TAGS_REQUEST_FAILURE:
    return {
      requestingTags: action.payload.requestingTags,
      requestingTagsSuccess: action.payload.requestingTagsSuccess,
    };

  case TAGS_REQUEST_SUCCESS:
    return {
      requestingTags: action.payload.requestingTags,
      requestingTagsSuccess: action.payload.requestingTagsSuccess,
      tags: [
        ...state.tags,
        action.payload.tags,
      ],
    };

  default:
    return state;
  }
};
