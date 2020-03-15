import {
  CREATE_USER,
  LOAD_CREATED_USER,
  LOAD_LOG_IN_USER,
  AUTHORIZE_USER,
} from 'Types';

const initialState = {
  isFetching: false,
  isInitialized: false,
  isRequestFailed: false,
  id: 0,
  created: false,
  authorize: false,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CREATED_USER:
    case LOAD_LOG_IN_USER:
      return {
        ...state,
        isFetching: true,
      };

    case CREATE_USER:
      return {
        ...state,
        isFetching: false,
        id: action.payload,
        created: true,
      };

    case AUTHORIZE_USER:
      return {
        ...state,
        isFetching: false,
        id: action.payload.id,
        token: action.payload.token,
        authorize: true,
      };

    default:
      return state;
    }
};

export default auth;